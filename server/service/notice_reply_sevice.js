const { NoticeReply, User, PointTotal, PointHistory, PointType, sequelize } = require("../models");
const Op = require("sequelize").Op;
const { POINT_TYPE, POINT } = require("../config/state");

// TODO 포인트 추가해줄것
module.exports.create = async ({id, boardNo, content}) => {
    try {
        await sequelize.transaction( async (t) => {
            await User.findOne({
                                    where : { id }
            }).then( async (user) => {
                await NoticeReply.create({
                                            userNo : user.no,
                                            boardNo, 
                                            content
                                        },
                                        {
                                            transaction: t
                                        });
                await PointHistory.create({
                                            userNo : user.no,
                                            typeNo : POINT_TYPE.WRITE_REPLY
                                        },
                                        {
                                            transaction: t
                                        });
                await PointTotal.increment({
                                                point : POINT.WRITE_REPLY
                                            },
                                            {
                                                where : { userNo : user.no }
                                            },
                                            {
                                                transaction: t
                                            });
            });
        });

    } catch (err) {
        console.error(err);
    }
}

// TODO 포인트 추가해줄것
module.exports.createNested = async ({id, boardNo, replyNo, content}) => {
    try {
        await sequelize.transaction( async (t) => {
            await User.findOne({
                                    where : { id }
            }).then( async (user) => {
                await NoticeReply.create({
                                            userNo : user.no,
                                            boardNo, 
                                            replyNo,
                                            content
                                        },
                                        {
                                            transaction: t
                                        });
                const pointType = await PointType.findOne({
                                                            where : {
                                                                id : POINT_TYPE.WRITE_REPLY
                                                            }
                                                            });
                await PointHistory.create({
                                            userNo : user.no,
                                            typeNo : POINT_TYPE.WRITE_REPLY
                                        },
                                        {
                                            transaction: t
                                        });
                await PointTotal.increment({
                                                point : pointType.point
                                            },
                                            {
                                                where : { userNo : user.no }
                                            },
                                            {
                                                transaction: t
                                            });
            });
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports.list = async (boardNo) => {
    try {
        return await NoticeReply.findAll(
                {
                    attributes : ['id', 'replyNo', 'content', 'createdAt'],
                    include: [
                        {
                         attributes : ['userNo'],  
                         model : User 
                        }
                    ],
                    where : {
                        boardNo
                    }
                }
            );
    } catch (err) {
        console.error(err);
    }
}

module.exports.update = async (id, content) => {
    try {
        NoticeReply.update(
            {
                content
            },
            {
                where : { 
                    id
                }
            }
        );
    } catch (err) {
        console.error(err);
    }
}

module.exports.delete = async (id) => {
    try {
        NoticeReply.destroy(
            {
                where : { 
                    [Op.or] : [{
                        id
                    },{
                        replyNo : id // 댓글이 삭제되면 해당 대댓글도 삭제
                    }]
                }
            }
        )
    } catch (err) {
        console.error(err);
    }
}