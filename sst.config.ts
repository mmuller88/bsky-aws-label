/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "bsky-aws-label",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          // allowedAccountIds: ["975050266733"],
          allowedAccountIds: ["851725569687"],
          // account: "746669236955",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("BskyAwsLabel");
  },
});
