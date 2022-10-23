

const CONDITION = {
    WAITING : 1,
    ACTIVITY: 2,
    INACTIVITY: 3,
  };
  
  const AUTHORITY = {
    ADMIN: 1,
    USER: 2,
  };
  
  const BOARDS = {
    TIP_BOARD: "tipBoard",
    QNA_BOARD: "qnaBoard",
    // FREE_BOARD: "freeBoard",
  };
  
  const POINT_TYPE = {
    JOIN: 1,
    WRITE_POST: 2,
    WRITE_REPLY: 3,
    SKIN_BUY: 4,
  };
  
  const POINT = {
    JOIN: 500,
    WRITE_POST: 50,
    WRITE_REPLY: 20
  };

  module.exports = { AUTHORITY, CONDITION, BOARDS, POINT_TYPE, POINT };