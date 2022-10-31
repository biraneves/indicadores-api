import SlackService from '../services/slack.service.js';

const getSlackInfo = async (_req, res, next) => {
    try {
        res.send(await SlackService.getSlackInfo());
    } catch (err) {
        next(err);
    }
};

export default { getSlackInfo };
