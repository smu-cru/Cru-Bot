"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var cron = require("node-cron");
const schedulePollHandler = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var task = cron.schedule("10 * * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        const chatId = ctx.chat.id;
        const question = "Lunch Today?";
        const options = ["Yes, I'm cool like that", "No, I like to feel FOMO"];
        const extra = {
            is_anonymous: false,
        };
        const result = yield ctx.telegram.sendPoll(chatId, question, options, extra);
        console.log(result);
    }));
    task.start();
    // ctx.reply("sendPoll is not implemented yet");
});
// module.exports = sendPollHandler;
exports.default = { schedulePollHandler };
//  # ┌────────────── second(optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *
