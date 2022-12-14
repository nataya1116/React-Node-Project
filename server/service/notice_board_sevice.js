const { NoticeBoard, NoticeReply, User, PointTotal, PointHistory, sequelize } = require("../models");
const Op = require("sequelize").Op;
const { POINT_TYPE, POINT } = require("../config/state");

// 포인트 토탈, 포인트 히스토리 추가해줄것
module.exports.create = async ({ id, title, content }) => {
  try {
    return await sequelize.transaction(async (t) => {
      return await User.findOne({
        attributes: ["no"],
        where: { id },
      }).then(async (user) => {
        const result = await NoticeBoard.create(
          {
            userNo: user.no,
            title,
            content,
          },
          {
            transaction: t,
          }
        );
        await PointHistory.create(
          {
            userNo: user.no,
            typeNo: POINT_TYPE.WRITE_POST,
            point: POINT.WRITE_POST
          },
          {
            transaction: t,
          }
        );
        await PointTotal.increment(
          {
            point: POINT.WRITE_POST,
          },
          {
            where: { userNo: user.no },
          },
          {
            transaction: t,
          }
        );
        return result;
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports.searchingList = async (offset, limit, searchKey, searchWord) => {

  const whereUser = {};
  if(searchKey == "nickname" && !!searchWord) whereUser.nickname = { [Op.like]: `%${searchWord}%` };

  const where = {};
  if(searchKey == "title" && !!searchWord) where.title = { [Op.like]: `%${searchWord}%` };                  
  if(searchKey == "content" && !!searchWord) where.content = { [Op.like]: `%${searchWord}%` };
  
  try {
    return await NoticeBoard.findAndCountAll({
      attributes: ["no", "title", "content", "createdAt", "view"],
      include: [
        {
          attributes: ["nickname"],
          model: User,
          where : whereUser,
        },
        {
          attributes: ["no", "content", "replyNo", "createdAt"],
          model: NoticeReply,
          separate : true, // hasMany로 연결된 인스턴스 가지고 오는 옵션
          include: [
            {
              attributes: ["nickname"],
              model: User,
              where : whereUser,
            }
          ]
        }
      ],
      where,
      order: [["no", "DESC"]],
      subQuery: false,
      distinct: "NoticeBoard.no",
      offset,
      limit,
    });
  } catch (err) {
    console.error(err);
    return false;
  }
  
};

module.exports.update = async ({id, no, title, content }) => {
  try {
    const user = await User.findOne({
                                      attributes : ["no"],
                                      where: { id }
                                    });
    if (!user) return false;

    return await NoticeBoard.update(
      {
        title,
        content,
      },
      {
        where: {
          no,
          userNo : user.no
        },
      }
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports.delete = async (id, no) => {
  try {
    const user = await User.findOne({
      attributes : ["no"],
      where: { id }
    });

    if (!user) return false;

    // 게시글이 삭제되면 댓글도 함께 삭제된다.
    return await sequelize.transaction(async (t) => {
      const result = await NoticeBoard.destroy({
        where: { 
          no, 
          userNo : user.no 
        },
        transaction: t,
      });
      console.log({no, 
        userNo : user.no });
      console.log("destroy",{result});
      if(result){
        await NoticeReply.destroy({
          where: { boardNo: no },
          transaction: t,
        });
      }
      return result
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports.updateReadCount = async (no) => {
  try {
    await NoticeBoard.increment(
      {
        view: 1,
      },
      {
        where: { no },
      }
    );
  } catch (err) {
    console.error(err);
  }
};
