// projects
type WEB_TYPE = "web";
type AND_TYPE = "android";
type IOS_TYPE = "ios";

export type ProjectType = {
  projectId: number;
  projectName: string;
  projectType: WEB_TYPE | AND_TYPE | IOS_TYPE;
};

export type { WEB_TYPE, AND_TYPE, IOS_TYPE };

// position
type FRONTEND_DEV = "frontend_dev";
type BACKEND_DEV = "backend_dev";
type ANDROID_DEV = "android_dev";
type IOS_DEV = "ios_dev";
type FULLSTACK_DEV = "fullstack_dev";

export type MyPosition = {
  projecLeader: boolean;
  partLeader: boolean;
  position: FRONTEND_DEV | BACKEND_DEV | ANDROID_DEV | IOS_DEV | FULLSTACK_DEV;
};

export type { FRONTEND_DEV, BACKEND_DEV, ANDROID_DEV, IOS_DEV, FULLSTACK_DEV };
