let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import * as dfff from 'dialogflow-fulfillment'; //_splitter_
import * as dialogflow from '@google-cloud/dialogflow'; //_splitter_
import * as axios from 'axios'; //_splitter_
//append_imports_end
export class whatsappPluginTestService {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'whatsappPluginTestService';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new whatsappPluginTestService(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_whatsappPluginTestService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: whatsappPluginTestService'
    );

    //appendnew_flow_whatsappPluginTestService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: whatsappPluginTestService');

    this.app['post'](
      `${this.serviceBasePath}/whatsapp/:message`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_3TIqJnLTwdseorvq(bh, parentSpanInst);
          //appendnew_next_sd_BipCx5rPEANMM27h
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BipCx5rPEANMM27h');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/callback`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_bslW72MHsQyRbIBI(bh, parentSpanInst);
          //appendnew_next_sd_mimar3WAXm0p2Bcx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mimar3WAXm0p2Bcx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_whatsappPluginTestService_HttpIn
  }
  //   service flows_whatsappPluginTestService

  async sd_Vj1mXichfw3yuFL1(parentSpanInst, input: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vj1mXichfw3yuFL1',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          input: input,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B6T2i43oLhRrHVbx(bh, parentSpanInst);
      //appendnew_next_sd_Vj1mXichfw3yuFL1
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vj1mXichfw3yuFL1',
        spanInst,
        'sd_Vj1mXichfw3yuFL1'
      );
    }
  }

  //appendnew_flow_whatsappPluginTestService_start

  async sd_3TIqJnLTwdseorvq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3TIqJnLTwdseorvq',
      parentSpanInst
    );
    try {
      const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
      const WEBHOOK = JSON.parse(process.env.WEBHOOK);
      const PORT = process.env.SSD_DEFAULT_PORT || 3000;

      const PROJECTID = CREDENTIALS['project_id'];

      const CONFIGURATION = {
        credentials: {
          private_key: CREDENTIALS['private_key'],
          client_email: CREDENTIALS['client_email'],
        },
      };

      const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_jpKe77TaHm7qXpdh(bh, parentSpanInst);
      //appendnew_next_sd_3TIqJnLTwdseorvq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3TIqJnLTwdseorvq',
        spanInst,
        'sd_3TIqJnLTwdseorvq'
      );
    }
  }

  async sd_jpKe77TaHm7qXpdh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jpKe77TaHm7qXpdh');
    }
  }

  async sd_B6T2i43oLhRrHVbx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B6T2i43oLhRrHVbx',
      parentSpanInst
    );
    try {
      console.log(bh.input.input);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_B6T2i43oLhRrHVbx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B6T2i43oLhRrHVbx',
        spanInst,
        'sd_B6T2i43oLhRrHVbx'
      );
    }
  }

  async sd_bslW72MHsQyRbIBI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bslW72MHsQyRbIBI',
      parentSpanInst
    );
    try {
      let outputVariables = await this.sd_Vj1mXichfw3yuFL1(
        spanInst,
        bh.local.body
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HQEnwAJy3xSAyuKk(bh, parentSpanInst);
      //appendnew_next_sd_bslW72MHsQyRbIBI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bslW72MHsQyRbIBI',
        spanInst,
        'sd_bslW72MHsQyRbIBI'
      );
    }
  }

  async sd_HQEnwAJy3xSAyuKk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HQEnwAJy3xSAyuKk');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_whatsappPluginTestService_Catch
}
