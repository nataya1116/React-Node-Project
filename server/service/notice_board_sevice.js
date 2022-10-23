const { NoticeBoard, NoticeReply, User, PointTotal, PointHistory, sequelize } = require("../models");
const Op = require("sequelize").Op;
const { POINT_TYPE, POINT } = require("../config/state");

// 포인트 토탈, 포인트 히스토리 추가해줄것
module.exports.create = async ({ id, title, content }) => {
  try {
    await sequelize.transaction(async (t) => {
      await User.findOne({
        where: { id },
      }).then(async (user) => {
        await NoticeBoard.create(
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
            typeId: POINT_TYPE.WRITE_POST,
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
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports.viewId = async ( no) => {
  try {
    return await NoticeBoard.findOne({
      include: [
        {
          attributes: ["id"],
          model: User,
        },
      ],
      where: {
        no,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports.viewOffset = async (offset, searchKey, searchWord) => {

  // 모델 유저에서 검색하기 위한 whereUser 객체
  const whereUser = {};
  if(searchKey == "id" && !!searchWord) whereUser.id = { [Op.like]: `%${searchWord}%` };

  // 모델 NoticeBoard에서 검색하기 위한 where 객체
  const where = {};
  if(searchKey == "title" && !!searchWord) where.title = { [Op.like]: `%${searchWord}%` };                  
  if(searchKey == "content" && !!searchWord) where.content = { [Op.like]: `%${searchWord}%` };

  try {
    return await NoticeBoard.findAndCountAll({
      include: [
        {
          attributes: ["id"],
          model: User,
          where : whereUser
        },
      ],
      where,
      order: [["no", "DESC"]],
      offset,
      limit: 1,
    });
  } catch (err) {
    console.error(err);
  }
};

// 게시판의 목록(검색어가 없을 때)
// 게시판의 목록을 DB에서 가져온다
// 이걸 가져와서 페이지에 보여준다
// 페이지 네이션에서 필요한 것
module.exports.listSearching = async (offset, limit, searchKey, searchWord) => {

  // 모델 유저에서 검색하기 위한 whereUser 객체
  const whereUser = {};
  if(searchKey == "id" && !!searchWord) whereUser.id = { [Op.like]: `%${searchWord}%` };

  // 모델 NoticeBoard에서 검색하기 위한 where 객체
  const where = {};
  if(searchKey == "title" && !!searchWord) where.title = { [Op.like]: `%${searchWord}%` };                  
  if(searchKey == "content" && !!searchWord) where.content = { [Op.like]: `%${searchWord}%` };

  try {
    // findAndCountAll 조건에 맞는걸 찾고 개수도 알려줌
    return await NoticeBoard.findAndCountAll({
      attributes: ["no", "title", "createdAt", "view"],
      // include : 쿼리문의 join이랑 같은거(다른 테이블이랑 매핑하는 것)
      include: [
        {
          attributes: ["nickname"],
          model: User,
          where : whereUser
        },
      ],
      where,
      order: [["no", "DESC"]],
      offset,
      limit,
    });
  } catch (err) {
    console.error(err);
    return false;
  }
  
};

module.exports.update = async ({ no, title, content }) => {
  try {
    return await NoticeBoard.update(
      {
        title,
        content,
      },
      {
        where: {
          no,
        },
      }
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports.delete = async (no) => {
  try {
    // 게시글이 삭제되면 댓글도 함께 삭제된다.
    await sequelize.transaction(async (t) => {
      await NoticeBoard.destroy({
        where: { no },
        transaction: t,
      });

      await NoticeReply.destroy({
        where: { boardId: no },
        transaction: t,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateViewsCount = async (no) => {
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
