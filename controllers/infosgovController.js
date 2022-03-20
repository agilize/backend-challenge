const { getInfosGov } = require('../services/infosgovService');
const { success } = require('../utils/dictionary');

const getInfosGovController = async (req, res, next) => {
  try {
    const infos = await getInfosGov();

    return res.status(success).json(infos);
  } catch (error) {
    console.log(`GET INFOS -> ${error.message}`);
    next(error);
  }
};

module.exports = {
  getInfosGovController,
};