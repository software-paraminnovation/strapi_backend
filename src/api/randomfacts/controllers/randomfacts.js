// 'use strict';

// /**
//  * A set of functions called "actions" for `randomfacts`
//  */

// module.exports = {
//   exampleAction: async (ctx, next) => {
//     try {
//       ctx.body = 'ok';
//     } catch (err) {
//       ctx.body = err;
//     }
//   }
// };

"use strict";
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI, // Ensure the correct environment variable name
});

/**
 * A set of functions called "actions" for `randomfacts`
 */

module.exports = {
  async exampleAction(ctx) {
    try {
      const input = `Generate random science fact that is:
Scientifically accurate Maximum 2 lines Suitable for a general audience visiting a science center Intriguing or surprising Easy to understand without specialized knowledge Focused on physics, biology, chemistry, astronomy, or earth science Examples: "Bananas are radioactive, but don't cancel your smoothie plans!" "Clouds weigh millions of pounds. Talk about heavy thinking!" "Octopuses have three hearts. Extra love for tentacles?"
Avoid:
Controversial topics
Overly complex terminology
Dark or inappropriate humor
Facts that require extensive explanation`; // Assuming the input is sent in the body as { input: "your input" }
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      });

      const answer = completion.choices[0].message.content;

      ctx.body = { message: answer };
    } catch (err) {
      console.error("Error in exampleAction:", err.message);
      ctx.throw(500, "Failed to generate response");
    }
  },
};
