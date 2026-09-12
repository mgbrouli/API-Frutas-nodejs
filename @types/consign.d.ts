declare module 'consign' {
  interface ConsignInstance {
    include(path: string): ConsignInstance;
    then(path: string): ConsignInstance;
    exclude(path: string): ConsignInstance;
    into(app: any): ConsignInstance;
  }
  
  function consign(options?: {
    cwd?: string;
    locale?: string;
    logger?: any;
    verbose?: boolean;
    extensions?: string[];
    loggingType?: string;
  }): ConsignInstance;

  export = consign;
}