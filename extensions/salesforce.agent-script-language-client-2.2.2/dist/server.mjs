#!/usr/bin/env node

      import { createRequire } from 'module';
      const require = createRequire(import.meta.url);
    
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.thenable = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports.typedArray = typedArray;
    function thenable(value) {
      return value && func(value.then);
    }
    exports.thenable = thenable;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports.stringArray = stringArray;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
    var is = require_is2();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports.Message = Message = {}));
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports.Touch = Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports.LRUCache = LRUCache;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports.Disposable = Disposable = {}));
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports.default = RAL;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = exports.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports.Emitter = Emitter;
    Emitter._noop = function() {
    };
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancellationTokenSource = exports.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports.CancellationTokenSource = CancellationTokenSource;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports.Semaphore = Semaphore;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column: while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMessageConnection = exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports.Trace = Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues || (exports.TraceValues = TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options?.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection2, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
    exports.createMessageConnection = createMessageConnection;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
    exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    var ral_1 = require_ral();
    exports.RAL = ral_1.default;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/ril.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = __require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports.default = RIL;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMessageConnection = exports.createServerSocketTransport = exports.createClientSocketTransport = exports.createServerPipeTransport = exports.createClientPipeTransport = exports.generateRandomPipeName = exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var path = __require("path");
    var os = __require("os");
    var crypto_1 = __require("crypto");
    var net_1 = __require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports.createMessageConnection = createMessageConnection;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/node.js"(exports, module) {
    "use strict";
    module.exports = require_main();
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/umd/main.js"(exports, module) {
    (function(factory) {
      if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(__require, exports);
        if (v !== void 0) module.exports = v;
      } else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
      }
    })(function(require2, exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.TextDocument = exports2.EOL = exports2.WorkspaceFolder = exports2.InlineCompletionContext = exports2.SelectedCompletionInfo = exports2.InlineCompletionTriggerKind = exports2.InlineCompletionList = exports2.InlineCompletionItem = exports2.StringValue = exports2.InlayHint = exports2.InlayHintLabelPart = exports2.InlayHintKind = exports2.InlineValueContext = exports2.InlineValueEvaluatableExpression = exports2.InlineValueVariableLookup = exports2.InlineValueText = exports2.SemanticTokens = exports2.SemanticTokenModifiers = exports2.SemanticTokenTypes = exports2.SelectionRange = exports2.DocumentLink = exports2.FormattingOptions = exports2.CodeLens = exports2.CodeAction = exports2.CodeActionContext = exports2.CodeActionTriggerKind = exports2.CodeActionKind = exports2.DocumentSymbol = exports2.WorkspaceSymbol = exports2.SymbolInformation = exports2.SymbolTag = exports2.SymbolKind = exports2.DocumentHighlight = exports2.DocumentHighlightKind = exports2.SignatureInformation = exports2.ParameterInformation = exports2.Hover = exports2.MarkedString = exports2.CompletionList = exports2.CompletionItem = exports2.CompletionItemLabelDetails = exports2.InsertTextMode = exports2.InsertReplaceEdit = exports2.CompletionItemTag = exports2.InsertTextFormat = exports2.CompletionItemKind = exports2.MarkupContent = exports2.MarkupKind = exports2.TextDocumentItem = exports2.OptionalVersionedTextDocumentIdentifier = exports2.VersionedTextDocumentIdentifier = exports2.TextDocumentIdentifier = exports2.WorkspaceChange = exports2.WorkspaceEdit = exports2.DeleteFile = exports2.RenameFile = exports2.CreateFile = exports2.TextDocumentEdit = exports2.AnnotatedTextEdit = exports2.ChangeAnnotationIdentifier = exports2.ChangeAnnotation = exports2.TextEdit = exports2.Command = exports2.Diagnostic = exports2.CodeDescription = exports2.DiagnosticTag = exports2.DiagnosticSeverity = exports2.DiagnosticRelatedInformation = exports2.FoldingRange = exports2.FoldingRangeKind = exports2.ColorPresentation = exports2.ColorInformation = exports2.Color = exports2.LocationLink = exports2.Location = exports2.Range = exports2.Position = exports2.uinteger = exports2.integer = exports2.URI = exports2.DocumentUri = void 0;
      var DocumentUri;
      (function(DocumentUri2) {
        function is(value) {
          return typeof value === "string";
        }
        DocumentUri2.is = is;
      })(DocumentUri || (exports2.DocumentUri = DocumentUri = {}));
      var URI;
      (function(URI2) {
        function is(value) {
          return typeof value === "string";
        }
        URI2.is = is;
      })(URI || (exports2.URI = URI = {}));
      var integer;
      (function(integer2) {
        integer2.MIN_VALUE = -2147483648;
        integer2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
        }
        integer2.is = is;
      })(integer || (exports2.integer = integer = {}));
      var uinteger;
      (function(uinteger2) {
        uinteger2.MIN_VALUE = 0;
        uinteger2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
        }
        uinteger2.is = is;
      })(uinteger || (exports2.uinteger = uinteger = {}));
      var Position;
      (function(Position2) {
        function create(line, character) {
          if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
          }
          if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
          }
          return { line, character };
        }
        Position2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position2.is = is;
      })(Position || (exports2.Position = Position = {}));
      var Range;
      (function(Range2) {
        function create(one, two, three, four) {
          if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
          } else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
          } else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
          }
        }
        Range2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
        }
        Range2.is = is;
      })(Range || (exports2.Range = Range = {}));
      var Location;
      (function(Location2) {
        function create(uri, range) {
          return { uri, range };
        }
        Location2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location2.is = is;
      })(Location || (exports2.Location = Location = {}));
      var LocationLink;
      (function(LocationLink2) {
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
          return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
        }
        LocationLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink2.is = is;
      })(LocationLink || (exports2.LocationLink = LocationLink = {}));
      var Color;
      (function(Color2) {
        function create(red, green, blue, alpha) {
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        Color2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color2.is = is;
      })(Color || (exports2.Color = Color = {}));
      var ColorInformation;
      (function(ColorInformation2) {
        function create(range, color) {
          return {
            range,
            color
          };
        }
        ColorInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation2.is = is;
      })(ColorInformation || (exports2.ColorInformation = ColorInformation = {}));
      var ColorPresentation;
      (function(ColorPresentation2) {
        function create(label, textEdit, additionalTextEdits) {
          return {
            label,
            textEdit,
            additionalTextEdits
          };
        }
        ColorPresentation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation2.is = is;
      })(ColorPresentation || (exports2.ColorPresentation = ColorPresentation = {}));
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2.Comment = "comment";
        FoldingRangeKind2.Imports = "imports";
        FoldingRangeKind2.Region = "region";
      })(FoldingRangeKind || (exports2.FoldingRangeKind = FoldingRangeKind = {}));
      var FoldingRange;
      (function(FoldingRange2) {
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
          var result = {
            startLine,
            endLine
          };
          if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
          }
          if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
          }
          if (Is.defined(kind)) {
            result.kind = kind;
          }
          if (Is.defined(collapsedText)) {
            result.collapsedText = collapsedText;
          }
          return result;
        }
        FoldingRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange2.is = is;
      })(FoldingRange || (exports2.FoldingRange = FoldingRange = {}));
      var DiagnosticRelatedInformation;
      (function(DiagnosticRelatedInformation2) {
        function create(location, message) {
          return {
            location,
            message
          };
        }
        DiagnosticRelatedInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation2.is = is;
      })(DiagnosticRelatedInformation || (exports2.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
      var DiagnosticSeverity3;
      (function(DiagnosticSeverity4) {
        DiagnosticSeverity4.Error = 1;
        DiagnosticSeverity4.Warning = 2;
        DiagnosticSeverity4.Information = 3;
        DiagnosticSeverity4.Hint = 4;
      })(DiagnosticSeverity3 || (exports2.DiagnosticSeverity = DiagnosticSeverity3 = {}));
      var DiagnosticTag2;
      (function(DiagnosticTag3) {
        DiagnosticTag3.Unnecessary = 1;
        DiagnosticTag3.Deprecated = 2;
      })(DiagnosticTag2 || (exports2.DiagnosticTag = DiagnosticTag2 = {}));
      var CodeDescription;
      (function(CodeDescription2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription2.is = is;
      })(CodeDescription || (exports2.CodeDescription = CodeDescription = {}));
      var Diagnostic;
      (function(Diagnostic2) {
        function create(range, message, severity, code, source, relatedInformation) {
          var result = { range, message };
          if (Is.defined(severity)) {
            result.severity = severity;
          }
          if (Is.defined(code)) {
            result.code = code;
          }
          if (Is.defined(source)) {
            result.source = source;
          }
          if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
          }
          return result;
        }
        Diagnostic2.create = create;
        function is(value) {
          var _a;
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic2.is = is;
      })(Diagnostic || (exports2.Diagnostic = Diagnostic = {}));
      var Command;
      (function(Command2) {
        function create(title, command) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var result = { title, command };
          if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
          }
          return result;
        }
        Command2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command2.is = is;
      })(Command || (exports2.Command = Command = {}));
      var TextEdit;
      (function(TextEdit2) {
        function replace(range, newText) {
          return { range, newText };
        }
        TextEdit2.replace = replace;
        function insert(position, newText) {
          return { range: { start: position, end: position }, newText };
        }
        TextEdit2.insert = insert;
        function del(range) {
          return { range, newText: "" };
        }
        TextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
        }
        TextEdit2.is = is;
      })(TextEdit || (exports2.TextEdit = TextEdit = {}));
      var ChangeAnnotation;
      (function(ChangeAnnotation2) {
        function create(label, needsConfirmation, description) {
          var result = { label };
          if (needsConfirmation !== void 0) {
            result.needsConfirmation = needsConfirmation;
          }
          if (description !== void 0) {
            result.description = description;
          }
          return result;
        }
        ChangeAnnotation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        ChangeAnnotation2.is = is;
      })(ChangeAnnotation || (exports2.ChangeAnnotation = ChangeAnnotation = {}));
      var ChangeAnnotationIdentifier;
      (function(ChangeAnnotationIdentifier2) {
        function is(value) {
          var candidate = value;
          return Is.string(candidate);
        }
        ChangeAnnotationIdentifier2.is = is;
      })(ChangeAnnotationIdentifier || (exports2.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
      var AnnotatedTextEdit;
      (function(AnnotatedTextEdit2) {
        function replace(range, newText, annotation) {
          return { range, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.replace = replace;
        function insert(position, newText, annotation) {
          return { range: { start: position, end: position }, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.insert = insert;
        function del(range, annotation) {
          return { range, newText: "", annotationId: annotation };
        }
        AnnotatedTextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit2.is = is;
      })(AnnotatedTextEdit || (exports2.AnnotatedTextEdit = AnnotatedTextEdit = {}));
      var TextDocumentEdit;
      (function(TextDocumentEdit2) {
        function create(textDocument, edits) {
          return { textDocument, edits };
        }
        TextDocumentEdit2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit2.is = is;
      })(TextDocumentEdit || (exports2.TextDocumentEdit = TextDocumentEdit = {}));
      var CreateFile;
      (function(CreateFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "create",
            uri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        CreateFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile2.is = is;
      })(CreateFile || (exports2.CreateFile = CreateFile = {}));
      var RenameFile;
      (function(RenameFile2) {
        function create(oldUri, newUri, options, annotation) {
          var result = {
            kind: "rename",
            oldUri,
            newUri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        RenameFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile2.is = is;
      })(RenameFile || (exports2.RenameFile = RenameFile = {}));
      var DeleteFile;
      (function(DeleteFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "delete",
            uri
          };
          if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        DeleteFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile2.is = is;
      })(DeleteFile || (exports2.DeleteFile = DeleteFile = {}));
      var WorkspaceEdit;
      (function(WorkspaceEdit2) {
        function is(value) {
          var candidate = value;
          return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if (Is.string(change.kind)) {
              return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
            } else {
              return TextDocumentEdit.is(change);
            }
          }));
        }
        WorkspaceEdit2.is = is;
      })(WorkspaceEdit || (exports2.WorkspaceEdit = WorkspaceEdit = {}));
      var TextEditChangeImpl = (
        /** @class */
        (function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        })()
      );
      var ChangeAnnotations = (
        /** @class */
        (function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        })()
      );
      var WorkspaceChange = (
        /** @class */
        (function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = /* @__PURE__ */ Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        })()
      );
      exports2.WorkspaceChange = WorkspaceChange;
      var TextDocumentIdentifier;
      (function(TextDocumentIdentifier2) {
        function create(uri) {
          return { uri };
        }
        TextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier2.is = is;
      })(TextDocumentIdentifier || (exports2.TextDocumentIdentifier = TextDocumentIdentifier = {}));
      var VersionedTextDocumentIdentifier;
      (function(VersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        VersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier2.is = is;
      })(VersionedTextDocumentIdentifier || (exports2.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
      var OptionalVersionedTextDocumentIdentifier;
      (function(OptionalVersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        OptionalVersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier2.is = is;
      })(OptionalVersionedTextDocumentIdentifier || (exports2.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
      var TextDocumentItem;
      (function(TextDocumentItem2) {
        function create(uri, languageId, version, text) {
          return { uri, languageId, version, text };
        }
        TextDocumentItem2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem2.is = is;
      })(TextDocumentItem || (exports2.TextDocumentItem = TextDocumentItem = {}));
      var MarkupKind2;
      (function(MarkupKind3) {
        MarkupKind3.PlainText = "plaintext";
        MarkupKind3.Markdown = "markdown";
        function is(value) {
          var candidate = value;
          return candidate === MarkupKind3.PlainText || candidate === MarkupKind3.Markdown;
        }
        MarkupKind3.is = is;
      })(MarkupKind2 || (exports2.MarkupKind = MarkupKind2 = {}));
      var MarkupContent;
      (function(MarkupContent2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(value) && MarkupKind2.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent2.is = is;
      })(MarkupContent || (exports2.MarkupContent = MarkupContent = {}));
      var CompletionItemKind2;
      (function(CompletionItemKind3) {
        CompletionItemKind3.Text = 1;
        CompletionItemKind3.Method = 2;
        CompletionItemKind3.Function = 3;
        CompletionItemKind3.Constructor = 4;
        CompletionItemKind3.Field = 5;
        CompletionItemKind3.Variable = 6;
        CompletionItemKind3.Class = 7;
        CompletionItemKind3.Interface = 8;
        CompletionItemKind3.Module = 9;
        CompletionItemKind3.Property = 10;
        CompletionItemKind3.Unit = 11;
        CompletionItemKind3.Value = 12;
        CompletionItemKind3.Enum = 13;
        CompletionItemKind3.Keyword = 14;
        CompletionItemKind3.Snippet = 15;
        CompletionItemKind3.Color = 16;
        CompletionItemKind3.File = 17;
        CompletionItemKind3.Reference = 18;
        CompletionItemKind3.Folder = 19;
        CompletionItemKind3.EnumMember = 20;
        CompletionItemKind3.Constant = 21;
        CompletionItemKind3.Struct = 22;
        CompletionItemKind3.Event = 23;
        CompletionItemKind3.Operator = 24;
        CompletionItemKind3.TypeParameter = 25;
      })(CompletionItemKind2 || (exports2.CompletionItemKind = CompletionItemKind2 = {}));
      var InsertTextFormat2;
      (function(InsertTextFormat3) {
        InsertTextFormat3.PlainText = 1;
        InsertTextFormat3.Snippet = 2;
      })(InsertTextFormat2 || (exports2.InsertTextFormat = InsertTextFormat2 = {}));
      var CompletionItemTag;
      (function(CompletionItemTag2) {
        CompletionItemTag2.Deprecated = 1;
      })(CompletionItemTag || (exports2.CompletionItemTag = CompletionItemTag = {}));
      var InsertReplaceEdit;
      (function(InsertReplaceEdit2) {
        function create(newText, insert, replace) {
          return { newText, insert, replace };
        }
        InsertReplaceEdit2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit2.is = is;
      })(InsertReplaceEdit || (exports2.InsertReplaceEdit = InsertReplaceEdit = {}));
      var InsertTextMode;
      (function(InsertTextMode2) {
        InsertTextMode2.asIs = 1;
        InsertTextMode2.adjustIndentation = 2;
      })(InsertTextMode || (exports2.InsertTextMode = InsertTextMode = {}));
      var CompletionItemLabelDetails;
      (function(CompletionItemLabelDetails2) {
        function is(value) {
          var candidate = value;
          return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        CompletionItemLabelDetails2.is = is;
      })(CompletionItemLabelDetails || (exports2.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
      var CompletionItem;
      (function(CompletionItem2) {
        function create(label) {
          return { label };
        }
        CompletionItem2.create = create;
      })(CompletionItem || (exports2.CompletionItem = CompletionItem = {}));
      var CompletionList;
      (function(CompletionList2) {
        function create(items, isIncomplete) {
          return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList2.create = create;
      })(CompletionList || (exports2.CompletionList = CompletionList = {}));
      var MarkedString;
      (function(MarkedString2) {
        function fromPlainText(plainText) {
          return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
        MarkedString2.fromPlainText = fromPlainText;
        function is(value) {
          var candidate = value;
          return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString2.is = is;
      })(MarkedString || (exports2.MarkedString = MarkedString = {}));
      var Hover;
      (function(Hover2) {
        function is(value) {
          var candidate = value;
          return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
        }
        Hover2.is = is;
      })(Hover || (exports2.Hover = Hover = {}));
      var ParameterInformation;
      (function(ParameterInformation2) {
        function create(label, documentation) {
          return documentation ? { label, documentation } : { label };
        }
        ParameterInformation2.create = create;
      })(ParameterInformation || (exports2.ParameterInformation = ParameterInformation = {}));
      var SignatureInformation;
      (function(SignatureInformation2) {
        function create(label, documentation) {
          var parameters = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
          }
          var result = { label };
          if (Is.defined(documentation)) {
            result.documentation = documentation;
          }
          if (Is.defined(parameters)) {
            result.parameters = parameters;
          } else {
            result.parameters = [];
          }
          return result;
        }
        SignatureInformation2.create = create;
      })(SignatureInformation || (exports2.SignatureInformation = SignatureInformation = {}));
      var DocumentHighlightKind;
      (function(DocumentHighlightKind2) {
        DocumentHighlightKind2.Text = 1;
        DocumentHighlightKind2.Read = 2;
        DocumentHighlightKind2.Write = 3;
      })(DocumentHighlightKind || (exports2.DocumentHighlightKind = DocumentHighlightKind = {}));
      var DocumentHighlight;
      (function(DocumentHighlight2) {
        function create(range, kind) {
          var result = { range };
          if (Is.number(kind)) {
            result.kind = kind;
          }
          return result;
        }
        DocumentHighlight2.create = create;
      })(DocumentHighlight || (exports2.DocumentHighlight = DocumentHighlight = {}));
      var SymbolKind2;
      (function(SymbolKind3) {
        SymbolKind3.File = 1;
        SymbolKind3.Module = 2;
        SymbolKind3.Namespace = 3;
        SymbolKind3.Package = 4;
        SymbolKind3.Class = 5;
        SymbolKind3.Method = 6;
        SymbolKind3.Property = 7;
        SymbolKind3.Field = 8;
        SymbolKind3.Constructor = 9;
        SymbolKind3.Enum = 10;
        SymbolKind3.Interface = 11;
        SymbolKind3.Function = 12;
        SymbolKind3.Variable = 13;
        SymbolKind3.Constant = 14;
        SymbolKind3.String = 15;
        SymbolKind3.Number = 16;
        SymbolKind3.Boolean = 17;
        SymbolKind3.Array = 18;
        SymbolKind3.Object = 19;
        SymbolKind3.Key = 20;
        SymbolKind3.Null = 21;
        SymbolKind3.EnumMember = 22;
        SymbolKind3.Struct = 23;
        SymbolKind3.Event = 24;
        SymbolKind3.Operator = 25;
        SymbolKind3.TypeParameter = 26;
      })(SymbolKind2 || (exports2.SymbolKind = SymbolKind2 = {}));
      var SymbolTag2;
      (function(SymbolTag3) {
        SymbolTag3.Deprecated = 1;
      })(SymbolTag2 || (exports2.SymbolTag = SymbolTag2 = {}));
      var SymbolInformation;
      (function(SymbolInformation2) {
        function create(name, kind, range, uri, containerName) {
          var result = {
            name,
            kind,
            location: { uri, range }
          };
          if (containerName) {
            result.containerName = containerName;
          }
          return result;
        }
        SymbolInformation2.create = create;
      })(SymbolInformation || (exports2.SymbolInformation = SymbolInformation = {}));
      var WorkspaceSymbol;
      (function(WorkspaceSymbol2) {
        function create(name, kind, uri, range) {
          return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
        }
        WorkspaceSymbol2.create = create;
      })(WorkspaceSymbol || (exports2.WorkspaceSymbol = WorkspaceSymbol = {}));
      var DocumentSymbol;
      (function(DocumentSymbol2) {
        function create(name, detail, kind, range, selectionRange, children) {
          var result = {
            name,
            detail,
            kind,
            range,
            selectionRange
          };
          if (children !== void 0) {
            result.children = children;
          }
          return result;
        }
        DocumentSymbol2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
        }
        DocumentSymbol2.is = is;
      })(DocumentSymbol || (exports2.DocumentSymbol = DocumentSymbol = {}));
      var CodeActionKind2;
      (function(CodeActionKind3) {
        CodeActionKind3.Empty = "";
        CodeActionKind3.QuickFix = "quickfix";
        CodeActionKind3.Refactor = "refactor";
        CodeActionKind3.RefactorExtract = "refactor.extract";
        CodeActionKind3.RefactorInline = "refactor.inline";
        CodeActionKind3.RefactorRewrite = "refactor.rewrite";
        CodeActionKind3.Source = "source";
        CodeActionKind3.SourceOrganizeImports = "source.organizeImports";
        CodeActionKind3.SourceFixAll = "source.fixAll";
      })(CodeActionKind2 || (exports2.CodeActionKind = CodeActionKind2 = {}));
      var CodeActionTriggerKind;
      (function(CodeActionTriggerKind2) {
        CodeActionTriggerKind2.Invoked = 1;
        CodeActionTriggerKind2.Automatic = 2;
      })(CodeActionTriggerKind || (exports2.CodeActionTriggerKind = CodeActionTriggerKind = {}));
      var CodeActionContext;
      (function(CodeActionContext2) {
        function create(diagnostics, only, triggerKind) {
          var result = { diagnostics };
          if (only !== void 0 && only !== null) {
            result.only = only;
          }
          if (triggerKind !== void 0 && triggerKind !== null) {
            result.triggerKind = triggerKind;
          }
          return result;
        }
        CodeActionContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext2.is = is;
      })(CodeActionContext || (exports2.CodeActionContext = CodeActionContext = {}));
      var CodeAction;
      (function(CodeAction2) {
        function create(title, kindOrCommandOrEdit, kind) {
          var result = { title };
          var checkKind = true;
          if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
          } else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
          } else {
            result.edit = kindOrCommandOrEdit;
          }
          if (checkKind && kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        CodeAction2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction2.is = is;
      })(CodeAction || (exports2.CodeAction = CodeAction = {}));
      var CodeLens;
      (function(CodeLens2) {
        function create(range, data) {
          var result = { range };
          if (Is.defined(data)) {
            result.data = data;
          }
          return result;
        }
        CodeLens2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens2.is = is;
      })(CodeLens || (exports2.CodeLens = CodeLens = {}));
      var FormattingOptions;
      (function(FormattingOptions2) {
        function create(tabSize, insertSpaces) {
          return { tabSize, insertSpaces };
        }
        FormattingOptions2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions2.is = is;
      })(FormattingOptions || (exports2.FormattingOptions = FormattingOptions = {}));
      var DocumentLink;
      (function(DocumentLink2) {
        function create(range, target, data) {
          return { range, target, data };
        }
        DocumentLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink2.is = is;
      })(DocumentLink || (exports2.DocumentLink = DocumentLink = {}));
      var SelectionRange;
      (function(SelectionRange2) {
        function create(range, parent) {
          return { range, parent };
        }
        SelectionRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
        }
        SelectionRange2.is = is;
      })(SelectionRange || (exports2.SelectionRange = SelectionRange = {}));
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
        SemanticTokenTypes2["decorator"] = "decorator";
      })(SemanticTokenTypes || (exports2.SemanticTokenTypes = SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers || (exports2.SemanticTokenModifiers = SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens || (exports2.SemanticTokens = SemanticTokens = {}));
      var InlineValueText;
      (function(InlineValueText2) {
        function create(range, text) {
          return { range, text };
        }
        InlineValueText2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText2.is = is;
      })(InlineValueText || (exports2.InlineValueText = InlineValueText = {}));
      var InlineValueVariableLookup;
      (function(InlineValueVariableLookup2) {
        function create(range, variableName, caseSensitiveLookup) {
          return { range, variableName, caseSensitiveLookup };
        }
        InlineValueVariableLookup2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
        }
        InlineValueVariableLookup2.is = is;
      })(InlineValueVariableLookup || (exports2.InlineValueVariableLookup = InlineValueVariableLookup = {}));
      var InlineValueEvaluatableExpression;
      (function(InlineValueEvaluatableExpression2) {
        function create(range, expression) {
          return { range, expression };
        }
        InlineValueEvaluatableExpression2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
        }
        InlineValueEvaluatableExpression2.is = is;
      })(InlineValueEvaluatableExpression || (exports2.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
      var InlineValueContext;
      (function(InlineValueContext2) {
        function create(frameId, stoppedLocation) {
          return { frameId, stoppedLocation };
        }
        InlineValueContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext2.is = is;
      })(InlineValueContext || (exports2.InlineValueContext = InlineValueContext = {}));
      var InlayHintKind;
      (function(InlayHintKind2) {
        InlayHintKind2.Type = 1;
        InlayHintKind2.Parameter = 2;
        function is(value) {
          return value === 1 || value === 2;
        }
        InlayHintKind2.is = is;
      })(InlayHintKind || (exports2.InlayHintKind = InlayHintKind = {}));
      var InlayHintLabelPart;
      (function(InlayHintLabelPart2) {
        function create(value) {
          return { value };
        }
        InlayHintLabelPart2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
        }
        InlayHintLabelPart2.is = is;
      })(InlayHintLabelPart || (exports2.InlayHintLabelPart = InlayHintLabelPart = {}));
      var InlayHint;
      (function(InlayHint2) {
        function create(position, label, kind) {
          var result = { position, label };
          if (kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        InlayHint2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
        }
        InlayHint2.is = is;
      })(InlayHint || (exports2.InlayHint = InlayHint = {}));
      var StringValue2;
      (function(StringValue3) {
        function createSnippet(value) {
          return { kind: "snippet", value };
        }
        StringValue3.createSnippet = createSnippet;
      })(StringValue2 || (exports2.StringValue = StringValue2 = {}));
      var InlineCompletionItem;
      (function(InlineCompletionItem2) {
        function create(insertText, filterText, range, command) {
          return { insertText, filterText, range, command };
        }
        InlineCompletionItem2.create = create;
      })(InlineCompletionItem || (exports2.InlineCompletionItem = InlineCompletionItem = {}));
      var InlineCompletionList;
      (function(InlineCompletionList2) {
        function create(items) {
          return { items };
        }
        InlineCompletionList2.create = create;
      })(InlineCompletionList || (exports2.InlineCompletionList = InlineCompletionList = {}));
      var InlineCompletionTriggerKind;
      (function(InlineCompletionTriggerKind2) {
        InlineCompletionTriggerKind2.Invoked = 0;
        InlineCompletionTriggerKind2.Automatic = 1;
      })(InlineCompletionTriggerKind || (exports2.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
      var SelectedCompletionInfo;
      (function(SelectedCompletionInfo2) {
        function create(range, text) {
          return { range, text };
        }
        SelectedCompletionInfo2.create = create;
      })(SelectedCompletionInfo || (exports2.SelectedCompletionInfo = SelectedCompletionInfo = {}));
      var InlineCompletionContext;
      (function(InlineCompletionContext2) {
        function create(triggerKind, selectedCompletionInfo) {
          return { triggerKind, selectedCompletionInfo };
        }
        InlineCompletionContext2.create = create;
      })(InlineCompletionContext || (exports2.InlineCompletionContext = InlineCompletionContext = {}));
      var WorkspaceFolder;
      (function(WorkspaceFolder2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder2.is = is;
      })(WorkspaceFolder || (exports2.WorkspaceFolder = WorkspaceFolder = {}));
      exports2.EOL = ["\n", "\r\n", "\r"];
      var TextDocument2;
      (function(TextDocument3) {
        function create(uri, languageId, version, content) {
          return new FullTextDocument2(uri, languageId, version, content);
        }
        TextDocument3.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument3.is = is;
        function applyEdits(document, edits) {
          var text = document.getText();
          var sortedEdits = mergeSort2(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
              return a.range.start.character - b.range.start.character;
            }
            return diff;
          });
          var lastModifiedOffset = text.length;
          for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
              text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            } else {
              throw new Error("Overlapping edit");
            }
            lastModifiedOffset = startOffset;
          }
          return text;
        }
        TextDocument3.applyEdits = applyEdits;
        function mergeSort2(data, compare) {
          if (data.length <= 1) {
            return data;
          }
          var p = data.length / 2 | 0;
          var left = data.slice(0, p);
          var right = data.slice(p);
          mergeSort2(left, compare);
          mergeSort2(right, compare);
          var leftIdx = 0;
          var rightIdx = 0;
          var i = 0;
          while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
              data[i++] = left[leftIdx++];
            } else {
              data[i++] = right[rightIdx++];
            }
          }
          while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
          }
          while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
          }
          return data;
        }
      })(TextDocument2 || (exports2.TextDocument = TextDocument2 = {}));
      var FullTextDocument2 = (
        /** @class */
        (function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        })()
      );
      var Is;
      (function(Is2) {
        var toString = Object.prototype.toString;
        function defined(value) {
          return typeof value !== "undefined";
        }
        Is2.defined = defined;
        function undefined2(value) {
          return typeof value === "undefined";
        }
        Is2.undefined = undefined2;
        function boolean(value) {
          return value === true || value === false;
        }
        Is2.boolean = boolean;
        function string(value) {
          return toString.call(value) === "[object String]";
        }
        Is2.string = string;
        function number(value) {
          return toString.call(value) === "[object Number]";
        }
        Is2.number = number;
        function numberRange(value, min, max) {
          return toString.call(value) === "[object Number]" && min <= value && value <= max;
        }
        Is2.numberRange = numberRange;
        function integer2(value) {
          return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
        }
        Is2.integer = integer2;
        function uinteger2(value) {
          return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
        }
        Is2.uinteger = uinteger2;
        function func(value) {
          return toString.call(value) === "[object Function]";
        }
        Is2.func = func;
        function objectLiteral(value) {
          return value !== null && typeof value === "object";
        }
        Is2.objectLiteral = objectLiteral;
        function typedArray(value, check) {
          return Array.isArray(value) && value.every(check);
        }
        Is2.typedArray = typedArray;
      })(Is || (Is = {}));
    });
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectLiteral = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports.objectLiteral = objectLiteral;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest || (exports.ImplementationRequest = ImplementationRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest || (exports.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest || (exports.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest || (exports.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest || (exports.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest || (exports.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
    })(FoldingRangeRefreshRequest || (exports.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest || (exports.DeclarationRequest = DeclarationRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest || (exports.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest || (exports.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest || (exports.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest || (exports.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification || (exports.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest || (exports.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification || (exports.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest || (exports.MonikerRequest = MonikerRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest || (exports.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest || (exports.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest || (exports.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
    })(InlineCompletionRequest || (exports.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
    exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = void 0;
    exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
    })(DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification || (exports.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest || (exports.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest || (exports.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest || (exports.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest || (exports.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest || (exports.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest || (exports.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest || (exports.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest || (exports.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest || (exports.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest || (exports.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest || (exports.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest || (exports.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest || (exports.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest || (exports.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest || (exports.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
    })(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest || (exports.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest || (exports.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports.createProtocolConnection = createProtocolConnection;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
    __exportStar(require_main(), exports);
    __exportStar(require_main2(), exports);
    __exportStar(require_messages2(), exports);
    __exportStar(require_protocol(), exports);
    var connection_1 = require_connection2();
    Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports);
    __exportStar(require_api2(), exports);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports.createProtocolConnection = createProtocolConnection;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateUuid = exports.parse = exports.isUUID = exports.v4 = exports.empty = void 0;
    var ValueUUID = class {
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    V4UUID._timeHighBits = ["8", "9", "a", "b"];
    exports.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    exports.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    exports.isUUID = isUUID;
    function parse3(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    exports.parse = parse3;
    function generateUuid() {
      return v4().asHex();
    }
    exports.generateUuid = generateUuid;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attachPartialResult = exports.ProgressFeature = exports.attachWorkDone = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        let param = {
          kind: "begin",
          title,
          percentage,
          message,
          cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        let param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = arg0;
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    WorkDoneProgressReporterImpl.Instances = /* @__PURE__ */ new Map();
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    exports.attachWorkDone = attachWorkDone;
    var ProgressFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
    exports.attachPartialResult = attachPartialResult;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          let params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports.ConfigurationFeature = ConfigurationFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          let workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensBuilder = exports.SemanticTokensDiff = exports.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder2 = class {
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this._data;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this._data
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports.SemanticTokensBuilder = SemanticTokensBuilder2;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports.FileOperationsFeature = FileOperationsFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports.InlineValueFeature = InlineValueFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports.InlayHintFeature = InlayHintFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports.DiagnosticFeature = DiagnosticFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TextDocuments2 = class {
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports.TextDocuments = TextDocuments2;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/notebook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NotebookDocuments = exports.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            }
          };
        }
      };
    };
    exports.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    var NotebookDocuments = class {
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports.NotebookDocuments = NotebookDocuments;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.MonikerFeature = MonikerFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createConnection = exports.combineFeatures = exports.combineNotebooksFeatures = exports.combineLanguagesFeatures = exports.combineWorkspaceFeatures = exports.combineWindowFeatures = exports.combineClientFeatures = exports.combineTracerFeatures = exports.combineTelemetryFeatures = exports.combineConsoleFeatures = exports._NotebooksImpl = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var UUID = require_uuid();
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      constructor() {
        this._registrations = [];
        this._registered = /* @__PURE__ */ new Set();
      }
      add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = /* @__PURE__ */ new Map();
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        let params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        let params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        let params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
    var TracerImpl = class {
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
    var _NotebooksImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineConsoleFeatures = combineConsoleFeatures;
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineTelemetryFeatures = combineTelemetryFeatures;
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineTracerFeatures = combineTracerFeatures;
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineClientFeatures = combineClientFeatures;
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineWindowFeatures = combineWindowFeatures;
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineLanguagesFeatures = combineLanguagesFeatures;
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports.combineNotebooksFeatures = combineNotebooksFeatures;
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      let result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    exports.combineFeatures = combineFeatures;
    function createConnection2(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      let protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (let remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
    exports.createConnection = createConnection2;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/files.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveModulePath = exports.FileSystem = exports.resolveGlobalYarnPath = exports.resolveGlobalNodePath = exports.resolve = exports.uriToFilePath = void 0;
    var url = __require("url");
    var path = __require("path");
    var fs = __require("fs");
    var child_process_1 = __require("child_process");
    function uriToFilePath(uri) {
      let parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      let segments = parsed.path.split("/");
      for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path.normalize(segments.join("/"));
    }
    exports.uriToFilePath = uriToFilePath;
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        let env = process.env;
        let newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          let cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          let message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    exports.resolve = resolve;
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        let prefix2 = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix2}`);
        }
        if (prefix2.length > 0) {
          if (isWindows()) {
            return path.join(prefix2, "node_modules");
          } else {
            return path.join(prefix2, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports.resolveGlobalNodePath = resolveGlobalNodePath;
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      let options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        let stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
          try {
            let yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports.resolveGlobalYarnPath = resolveGlobalYarnPath;
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path.normalize(child).indexOf(path.normalize(parent)) === 0;
        } else {
          return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path.isAbsolute(nodePath)) {
          nodePath = path.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
    exports.resolveModulePath = resolveModulePath;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/node.js"(exports, module) {
    "use strict";
    module.exports = require_main3();
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProposedFeatures = exports.NotebookDocuments = exports.TextDocuments = exports.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var ic = require_inlineCompletion_proposed();
    __exportStar(require_main3(), exports);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports);
    var ProposedFeatures;
    (function(ProposedFeatures2) {
      ProposedFeatures2.all = {
        __brand: "features",
        languages: ic.InlineCompletionFeature
      };
    })(ProposedFeatures || (exports.ProposedFeatures = ProposedFeatures = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createConnection = exports.Files = void 0;
    var node_util_1 = __require("node:util");
    var Is = require_is();
    var server_1 = require_server();
    var fm = require_files();
    var node_1 = require_node2();
    __exportStar(require_node2(), exports);
    __exportStar(require_api3(), exports);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          let processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          let args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection2(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    exports.createConnection = createConnection2;
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          let arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            var args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          let transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          let transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// ../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/node.js"(exports, module) {
    "use strict";
    module.exports = require_main4();
  }
});

// ../lsp-server/src/index.ts
var import_node = __toESM(require_node3(), 1);

// ../lsp/dist/server-core.js
var import_vscode_languageserver5 = __toESM(require_main4(), 1);

// ../../node_modules/.pnpm/vscode-languageserver-textdocument@1.0.12/node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument2.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument2.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// ../lsp/dist/document-store.js
var DocumentStore = class {
  documents = /* @__PURE__ */ new Map();
  /**
   * Set or update a document in the store.
   */
  set(state) {
    this.documents.set(state.uri, state);
  }
  /**
   * Get a document from the store.
   */
  get(uri) {
    return this.documents.get(uri);
  }
  /**
   * Check if a document exists.
   */
  has(uri) {
    return this.documents.has(uri);
  }
  /**
   * Remove a document from the store.
   */
  delete(uri) {
    this.documents.delete(uri);
  }
  /**
   * Get all document URIs.
   */
  getAllUris() {
    return Array.from(this.documents.keys());
  }
  /**
   * Get all document states.
   */
  getAllStates() {
    return Array.from(this.documents.values());
  }
};

// ../types/dist/position.js
function toRange(node) {
  return {
    start: {
      line: node.startRow,
      character: node.startCol
    },
    end: { line: node.endRow, character: node.endCol }
  };
}

// ../types/dist/diagnostic.js
var DiagnosticSeverity;
(function(DiagnosticSeverity3) {
  DiagnosticSeverity3[DiagnosticSeverity3["Error"] = 1] = "Error";
  DiagnosticSeverity3[DiagnosticSeverity3["Warning"] = 2] = "Warning";
  DiagnosticSeverity3[DiagnosticSeverity3["Information"] = 3] = "Information";
  DiagnosticSeverity3[DiagnosticSeverity3["Hint"] = 4] = "Hint";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DiagnosticTag;
(function(DiagnosticTag2) {
  DiagnosticTag2[DiagnosticTag2["Unnecessary"] = 1] = "Unnecessary";
  DiagnosticTag2[DiagnosticTag2["Deprecated"] = 2] = "Deprecated";
})(DiagnosticTag || (DiagnosticTag = {}));

// ../language/dist/core/types.js
function parseCommentNode(node, attachment = "leading") {
  return {
    value: node.text.slice(1),
    attachment,
    range: toRange(node)
  };
}
function astField(ast, key) {
  return ast[key];
}
function extractDiscriminantValue(entry, fieldName) {
  const field = entry[fieldName];
  if (!field || typeof field !== "object")
    return void 0;
  const expr = field;
  if (typeof expr.value === "string")
    return expr.value;
  if (typeof expr.name === "string")
    return expr.name;
  return void 0;
}
function withCst(ast, node) {
  const existing = ast.__diagnostics;
  const result = Object.assign(ast, {
    __cst: {
      node,
      range: toRange(node)
    },
    __diagnostics: existing ?? []
  });
  return result;
}
var AstNodeBase = class {
  __diagnostics = [];
  __cst;
  __comments;
};
var BARE_ID_PATTERN = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function getKeyText(node) {
  if (node.type === "id") {
    return node.text;
  }
  if (node.type === "string") {
    let value = "";
    for (const child of node.namedChildren) {
      if (child.type === "string_content") {
        value += child.text;
      } else if (child.type === "escape_sequence") {
        if (child.text === '\\"')
          value += '"';
        else if (child.text === "\\'")
          value += "'";
        else if (child.text === "\\\\")
          value += "\\";
        else if (child.text === "\\n")
          value += "\n";
        else if (child.text === "\\r")
          value += "\r";
        else if (child.text === "\\t")
          value += "	";
        else if (child.text === "\\0")
          value += "\0";
      }
    }
    return value;
  }
  return node.text;
}
function emitKeyName(name) {
  if (BARE_ID_PATTERN.test(name)) {
    return name;
  }
  return quoteKeyName(name);
}
function quoteKeyName(name) {
  const escaped = name.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\0/g, "\\0");
  return `"${escaped}"`;
}
function isKeyNode(node) {
  return node.type === "id" || node.type === "string";
}
function getValueNodes(element) {
  return {
    blockValue: element.childForFieldName("block_value"),
    // expression is semantically a colinear value, just promoted due to inline rule
    colinearValue: element.childForFieldName("colinear_value") ?? element.childForFieldName("expression"),
    procedure: element.childForFieldName("procedure")
  };
}
function emitIndent(ctx) {
  return " ".repeat(ctx.indent * (ctx.tabSize ?? 4));
}
function leadingComments(node) {
  return node?.__comments?.filter((c) => c.attachment === "leading") ?? [];
}
function trailingComments(node) {
  return node?.__comments?.filter((c) => c.attachment === "trailing") ?? [];
}
function inlineComments(node) {
  return node?.__comments?.filter((c) => c.attachment === "inline") ?? [];
}
function emitSingleComment(c, ctx) {
  const indent = emitIndent(ctx);
  if (c.value.trim().length === 0)
    return `${indent}#`;
  const prefix2 = c.range ? "#" : "# ";
  return `${indent}${prefix2}${c.value}`;
}
function formatInlineComment(c) {
  if (c.value.trim().length === 0)
    return "#";
  const prefix2 = c.range ? "#" : "# ";
  return `${prefix2}${c.value}`;
}
function appendInlineToFirstLine(body, inlineComment) {
  const newlineIdx = body.indexOf("\n");
  if (newlineIdx === -1)
    return `${body} ${inlineComment}`;
  return `${body.slice(0, newlineIdx)} ${inlineComment}${body.slice(newlineIdx)}`;
}
function emitCommentList(comments, ctx) {
  if (!comments || comments.length === 0)
    return "";
  return comments.map((c) => emitSingleComment(c, ctx)).join("\n");
}
function wrapWithComments(body, node, ctx, trailingIndentOffset) {
  if (!node || !node.__comments?.length)
    return body;
  const leading = leadingComments(node);
  const inline = inlineComments(node);
  const trailing = trailingComments(node);
  const parts = [];
  const leadingText = emitCommentList(leading, ctx);
  if (leadingText)
    parts.push(leadingText);
  if (body) {
    if (inline.length > 0) {
      const inlineText = inline.map((c) => formatInlineComment(c)).join(" ");
      parts.push(appendInlineToFirstLine(body, inlineText));
    } else {
      parts.push(body);
    }
  }
  if (trailing.length > 0) {
    const trailingCtx = trailingIndentOffset != null ? { ...ctx, indent: ctx.indent + trailingIndentOffset } : ctx;
    const trailingText = trailing.map((c) => emitSingleComment(c, trailingCtx)).join("\n");
    if (trailingText)
      parts.push(trailingText);
  }
  return parts.join("\n");
}
var SymbolKind;
(function(SymbolKind2) {
  SymbolKind2[SymbolKind2["File"] = 1] = "File";
  SymbolKind2[SymbolKind2["Module"] = 2] = "Module";
  SymbolKind2[SymbolKind2["Namespace"] = 3] = "Namespace";
  SymbolKind2[SymbolKind2["Package"] = 4] = "Package";
  SymbolKind2[SymbolKind2["Class"] = 5] = "Class";
  SymbolKind2[SymbolKind2["Method"] = 6] = "Method";
  SymbolKind2[SymbolKind2["Property"] = 7] = "Property";
  SymbolKind2[SymbolKind2["Field"] = 8] = "Field";
  SymbolKind2[SymbolKind2["Constructor"] = 9] = "Constructor";
  SymbolKind2[SymbolKind2["Enum"] = 10] = "Enum";
  SymbolKind2[SymbolKind2["Interface"] = 11] = "Interface";
  SymbolKind2[SymbolKind2["Function"] = 12] = "Function";
  SymbolKind2[SymbolKind2["Variable"] = 13] = "Variable";
  SymbolKind2[SymbolKind2["Constant"] = 14] = "Constant";
  SymbolKind2[SymbolKind2["String"] = 15] = "String";
  SymbolKind2[SymbolKind2["Number"] = 16] = "Number";
  SymbolKind2[SymbolKind2["Boolean"] = 17] = "Boolean";
  SymbolKind2[SymbolKind2["Array"] = 18] = "Array";
  SymbolKind2[SymbolKind2["Object"] = 19] = "Object";
  SymbolKind2[SymbolKind2["Key"] = 20] = "Key";
  SymbolKind2[SymbolKind2["Null"] = 21] = "Null";
  SymbolKind2[SymbolKind2["EnumMember"] = 22] = "EnumMember";
  SymbolKind2[SymbolKind2["Struct"] = 23] = "Struct";
  SymbolKind2[SymbolKind2["Event"] = 24] = "Event";
  SymbolKind2[SymbolKind2["Operator"] = 25] = "Operator";
  SymbolKind2[SymbolKind2["TypeParameter"] = 26] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
function isAstNodeLike(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function hasCstRange(value) {
  if (value == null || typeof value !== "object")
    return false;
  const cst = value.__cst;
  return cst != null && typeof cst === "object" && "range" in cst;
}
function parseResult(value, diagnostics) {
  return { value, diagnostics };
}
var WILDCARD_KEY = "__wildcardPrefixes__";
function attachWildcardPrefixes(schema, prefixes) {
  Object.defineProperty(schema, WILDCARD_KEY, {
    value: prefixes,
    enumerable: false,
    writable: false,
    configurable: false
  });
}
function getWildcardPrefixes(schema) {
  return schema[WILDCARD_KEY] ?? [];
}
function resolveWildcardField(schema, fieldName) {
  for (const { prefix: prefix2, fieldType } of getWildcardPrefixes(schema)) {
    if (fieldName.startsWith(prefix2) && fieldName.length > prefix2.length) {
      return fieldType;
    }
  }
  return void 0;
}
function keywordNames(keywords) {
  return keywords.map((k) => k.keyword);
}
function hasDiscriminant(value) {
  return !!value.discriminantField && !!value.resolveSchemaForDiscriminant;
}
var NAMED_MAP_BRAND = Symbol.for("agentscript.NamedMap");
function isNamedMap(value) {
  if (value == null || typeof value !== "object")
    return false;
  return Object.prototype.hasOwnProperty.call(value, NAMED_MAP_BRAND) && Reflect.get(value, NAMED_MAP_BRAND) === true;
}
function isSingularFieldType(_ft) {
  return true;
}
function isCollectionFieldType(ft) {
  return ft.__isCollection === true;
}
function isNamedCollectionFieldType(ft) {
  return "__isNamedCollection" in ft && ft.__isNamedCollection === true;
}
function buildKindToSchemaKey(schema) {
  const map = /* @__PURE__ */ new Map();
  for (const [schemaKey, fieldType] of Object.entries(schema)) {
    if ("kind" in fieldType && typeof fieldType.kind === "string") {
      map.set(fieldType.kind, schemaKey);
    }
    if (isCollectionFieldType(fieldType)) {
      const entryKind = fieldType.entryBlock.kind;
      if (entryKind) {
        map.set(entryKind, schemaKey);
      }
    }
  }
  return map;
}

// ../language/dist/core/children.js
var FieldChild = class {
  key;
  _fieldType;
  entryName;
  __keyRange;
  __type = "field";
  _value;
  /** Original CST mapping_element text for verbatim emission. */
  __elementText;
  /** Column of the original CST mapping_element for verbatim emission. */
  __elementColumn;
  constructor(key, value, _fieldType, entryName, __keyRange) {
    this.key = key;
    this._fieldType = _fieldType;
    this.entryName = entryName;
    this.__keyRange = __keyRange;
    this._value = value;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.__elementText = void 0;
    this.__elementColumn = void 0;
  }
  __emit(ctx) {
    if (this.__elementText != null && this.__elementColumn != null) {
      return emitRawTextVerbatim(this.__elementText, this.__elementColumn, ctx);
    }
    const val = this.value;
    let emitted;
    const carrier = val;
    if (this.entryName && isNamedBlockValue(val)) {
      emitted = val.emitWithKey(this.key, ctx);
      return wrapWithComments(emitted, carrier, ctx, 1);
    }
    if (this._fieldType.emitField) {
      emitted = this._fieldType.emitField(this.key, val, ctx);
      return wrapWithComments(emitted, carrier, ctx, 1);
    }
    const indent = emitIndent(ctx);
    emitted = `${indent}${this.key}: ${this._fieldType.emit(val, ctx)}`;
    return wrapWithComments(emitted, carrier, ctx, 1);
  }
};
function attachElementText(child, elementNode) {
  child.__elementText = normalizeRawText(elementNode.text, elementNode.startPosition.column);
  child.__elementColumn = elementNode.startPosition.column;
}
var MapEntryChild = class {
  name;
  __type = "map_entry";
  value;
  /** Original CST mapping_element text for verbatim emission. */
  __elementText;
  /** Column of the original CST mapping_element for verbatim emission. */
  __elementColumn;
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
  __emit(ctx) {
    if (this.__elementText != null && this.__elementColumn != null) {
      return emitRawTextVerbatim(this.__elementText, this.__elementColumn, ctx);
    }
    const v = this.value;
    if (isEmittable(v)) {
      return wrapWithComments(v.__emit(ctx), v, ctx);
    }
    if (v != null) {
      console.warn(`MapEntryChild '${this.name}': value is non-null but missing __emit \u2014 entry will be dropped from emission`);
    }
    return "";
  }
};
var MapIndex = class {
  /** Build a fresh index from the current `children` array. */
  ensure(children) {
    const index = /* @__PURE__ */ new Map();
    for (const child of children) {
      if (child instanceof MapEntryChild) {
        index.set(child.name, child);
      }
    }
    return index;
  }
};
var SequenceItemChild = class {
  __type = "sequence_item";
  value;
  constructor(value) {
    this.value = value;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const childCtx = { ...ctx, indent: ctx.indent + 1 };
    const childIndent = emitIndent(childCtx);
    const item = this.value;
    if (isEmittable(item) && "__symbol" in item) {
      const rawOutput = item.__emit(childCtx);
      const lines = rawOutput.split("\n");
      lines[0] = `${indent}- ${lines[0].slice(childIndent.length)}`;
      const continuationIndent = indent + "  ";
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].startsWith(childIndent)) {
          lines[i] = continuationIndent + lines[i].slice(childIndent.length);
        }
      }
      return lines.join("\n");
    }
    if (isEmittable(item)) {
      return `${indent}- ${item.__emit({ ...ctx, indent: 0 })}`;
    }
    return "";
  }
};
function countLeadingWsChars(line) {
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    const c = line.charCodeAt(i);
    if (c === 32 || c === 9) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
function normalizeRawText(rawText, baseIndent) {
  const lines = rawText.split("\n");
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  if (lines.length <= 1)
    return lines.join("\n");
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const wsChars = countLeadingWsChars(line);
    if (wsChars >= baseIndent) {
      lines[i] = line.slice(baseIndent);
    } else {
      lines[i] = line.trimStart();
    }
  }
  return lines.join("\n");
}
function emitRawTextVerbatim(rawText, _originalIndent, ctx) {
  const indent = emitIndent(ctx);
  const lines = rawText.split("\n");
  return lines.map((line, i) => {
    if (i === 0) {
      const stripped2 = line.replace(/^\s*/, "");
      return stripped2 ? indent + stripped2 : "";
    }
    const stripped = line.replace(/^\s*/, "");
    if (!stripped)
      return "";
    const lineIndent = line.length - line.trimStart().length;
    return indent + " ".repeat(lineIndent) + stripped;
  }).join("\n");
}
var ErrorBlock = class {
  __type = "error";
  __kind = "ErrorBlock";
  __diagnostics = [];
  __cst;
  /** Normalized raw text with zero-based relative indentation. */
  rawText;
  originalIndent;
  constructor(rawText, originalIndent) {
    this.rawText = normalizeRawText(rawText, originalIndent);
    this.originalIndent = originalIndent;
  }
  __emit(ctx) {
    return emitRawTextVerbatim(this.rawText, this.originalIndent, ctx);
  }
};
var UntypedBlock = class {
  key;
  __type = "untyped";
  __kind = "UntypedBlock";
  __diagnostics = [];
  __cst;
  __comments;
  /** Structured children for analysis (symbols, walkers, completions). */
  __children = [];
  /** Normalized raw text with zero-based relative indentation. */
  rawText;
  originalIndent;
  /**
   * The second key id (e.g., "billing" in "tpoic billing:").
   * Stored with __ prefix to avoid collision with defineFieldAccessors
   * which can create a `name` property accessor when a child has key "name".
   */
  __blockName;
  /**
   * Public accessor for the second key id.
   * NOTE: defineFieldAccessors may overwrite this with a getter for a child
   * named "name". Internal emission uses __blockName to avoid this.
   */
  get name() {
    return this.__blockName;
  }
  constructor(key, name, rawText, originalIndent = 0) {
    this.key = key;
    this.__blockName = name;
    this.rawText = rawText != null ? normalizeRawText(rawText, originalIndent) : void 0;
    this.originalIndent = originalIndent;
  }
  __emit(ctx) {
    if (this.rawText != null) {
      return emitRawTextVerbatim(this.rawText, this.originalIndent, ctx);
    }
    const indent = emitIndent(ctx);
    const header = this.__blockName ? `${this.key} ${this.__blockName}:` : `${this.key}:`;
    if (this.__children.length === 0)
      return `${indent}${header}`;
    const childCtx = { ...ctx, indent: ctx.indent + 1 };
    const body = this.__children.map((child) => child.__emit(childCtx)).filter(Boolean).join("\n");
    return body ? `${indent}${header}
${body}` : `${indent}${header}`;
  }
};
function untypedFieldType(rawText, originalIndent) {
  const normalizedText = normalizeRawText(rawText, originalIndent);
  return {
    __fieldKind: "Primitive",
    __accepts: [],
    parse: () => {
      throw new Error("UntypedFieldType cannot parse");
    },
    emit: (value, ctx) => {
      if (isEmittable(value)) {
        return value.__emit(ctx);
      }
      return String(value ?? "");
    },
    emitField: (_key, _value, ctx) => {
      return emitRawTextVerbatim(normalizedText, originalIndent, ctx);
    }
  };
}
var ValueChild = class {
  __type = "value";
  value;
  constructor(value) {
    this.value = value;
  }
  /** Value emission is handled inline by the parent; this is a no-op. */
  __emit(_ctx) {
    return "";
  }
};
var StatementChild = class {
  __type = "statement";
  value;
  constructor(statement) {
    this.value = statement;
  }
  __emit(ctx) {
    const v = this.value;
    if (isEmittable(v)) {
      return wrapWithComments(v.__emit(ctx), v, ctx);
    }
    return "";
  }
};
function isBlockChild(value) {
  return value != null && typeof value === "object" && "__type" in value;
}
function isNamedBlockValue(v) {
  return v != null && typeof v === "object" && "__kind" in v && "emitWithKey" in v && typeof v.emitWithKey === "function";
}
function isEmittable(value) {
  return value != null && typeof value === "object" && "__emit" in value && typeof value.__emit === "function";
}
function emitChildren(children, ctx, sep = "\n") {
  return children.map((c) => c.__emit(ctx)).filter(Boolean).join(sep);
}
function defineFieldAccessors(block, children) {
  const defined = /* @__PURE__ */ new Set();
  for (const child of children) {
    if (child.__type !== "field")
      continue;
    const fc = child;
    if (fc.entryName)
      continue;
    if (defined.has(fc.key))
      continue;
    defined.add(fc.key);
    Object.defineProperty(block, fc.key, {
      get() {
        return fc.value;
      },
      set(newValue) {
        fc.value = newValue;
      },
      enumerable: true,
      configurable: true
    });
  }
}
function wireBlockProperties(block, children, fields) {
  for (const [key, value] of Object.entries(fields)) {
    if (isNamedMap(value)) {
      block[key] = value;
    }
  }
  defineFieldAccessors(block, children);
}
function initChildren(block, parseChildren, fields, schema) {
  if (parseChildren) {
    wireBlockProperties(block, parseChildren, fields);
    return parseChildren;
  }
  const children = [];
  for (const [key, fieldType] of Object.entries(schema)) {
    const value = fields[key];
    if (value !== void 0) {
      children.push(new FieldChild(key, value, fieldType));
    }
  }
  wireBlockProperties(block, children, fields);
  return children;
}
function extractChildren(parsed) {
  const { __children, ...fields } = parsed;
  return { fields, children: __children };
}

// ../language/dist/core/expressions.js
var StringLiteral = class _StringLiteral extends AstNodeBase {
  value;
  static kind = "StringLiteral";
  static kindLabel = "a string";
  __kind = _StringLiteral.kind;
  constructor(value) {
    super();
    this.value = value;
  }
  __describe() {
    return `string "${this.value}"`;
  }
  __emit(_ctx) {
    const cstText = this.__cst?.node?.text;
    if (cstText) {
      const quote = cstText[0];
      if ((quote === '"' || quote === "'") && cstText.length > 1 && cstText.endsWith(quote)) {
        return cstText;
      }
    }
    const escaped = this.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r");
    return `"${escaped}"`;
  }
  static parse(node) {
    let value = "";
    for (const child of node.namedChildren) {
      if (child.type === "string_content") {
        value += child.text;
      } else if (child.type === "escape_sequence") {
        if (child.text === '\\"')
          value += '"';
        else if (child.text === "\\'")
          value += "'";
        else if (child.text === "\\\\")
          value += "\\";
        else if (child.text === "\\n")
          value += "\n";
        else if (child.text === "\\t")
          value += "	";
        else if (child.text === "\\r")
          value += "\r";
      }
    }
    const parsed = withCst(new _StringLiteral(value), node);
    const hasRawNewlines = node.startRow !== node.endRow;
    if (hasRawNewlines) {
      parsed.__diagnostics = [
        createDiagnostic(node, "String literals must not contain raw newlines. Use template syntax (| ...) for multi-line content.", DiagnosticSeverity.Error, "string-contains-newline")
      ];
    }
    return parsed;
  }
};
var TemplateText = class _TemplateText extends AstNodeBase {
  value;
  static kind = "TemplateText";
  static kindLabel = "template text";
  __kind = _TemplateText.kind;
  constructor(value) {
    super();
    this.value = value;
  }
  __describe() {
    const preview = this.value.slice(0, 20);
    return `template text "${preview}${this.value.length > 20 ? "..." : ""}"`;
  }
  __emit(_ctx) {
    return this.value;
  }
};
var TemplateInterpolation = class _TemplateInterpolation extends AstNodeBase {
  expression;
  static kind = "TemplateInterpolation";
  static kindLabel = "template interpolation";
  __kind = _TemplateInterpolation.kind;
  constructor(expression) {
    super();
    this.expression = expression;
  }
  __describe() {
    return `interpolation {!${this.expression.__describe()}}`;
  }
  __emit(ctx) {
    return `{!${this.expression.__emit(ctx)}}`;
  }
};
var ALL_TEMPLATE_PART_CLASSES = [
  TemplateText,
  TemplateInterpolation
];
var TEMPLATE_PART_KINDS = new Set(ALL_TEMPLATE_PART_CLASSES.map((C) => C.kind));
function parseTemplateParts(node, parseExpr) {
  const parts = [];
  const diagnostics = [];
  for (const child of node.namedChildren) {
    if (child.type === "template_content") {
      parts.push(withCst(new TemplateText(child.text), child));
    } else if (child.type === "template_expression") {
      const exprNode = child.childForFieldName("expression");
      if (exprNode) {
        parts.push(withCst(new TemplateInterpolation(parseExpr(exprNode)), child));
      } else {
        diagnostics.push(createDiagnostic(child, "Malformed template interpolation: missing expression", DiagnosticSeverity.Warning, "malformed-interpolation"));
        parts.push(withCst(new TemplateText(child.text), child));
      }
    } else {
      diagnostics.push(createDiagnostic(child, `Unexpected node in template: ${child.type}`, DiagnosticSeverity.Warning, "unexpected-template-node"));
    }
  }
  dedentTemplateParts(parts, node);
  return { parts, diagnostics };
}
function dedentTemplateParts(parts, node) {
  const fullText = parts.map((p) => p instanceof TemplateText ? p.value : "X").join("");
  const firstNewline = fullText.indexOf("\n");
  if (firstNewline !== -1) {
    const lines = fullText.split("\n");
    const pipeColumn = node.startPosition?.column;
    let stripAmount;
    if (pipeColumn !== void 0) {
      const firstLineIndent = lines[0].match(/^(\s*)/)?.[1]?.length ?? 0;
      stripAmount = pipeColumn + 1 + firstLineIndent;
    } else {
      let minIndent = Infinity;
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim().length === 0)
          continue;
        const indent = lines[i].search(/\S/);
        if (indent >= 0)
          minIndent = Math.min(minIndent, indent);
      }
      stripAmount = minIndent === Infinity ? 0 : minIndent;
    }
    if (stripAmount > 0) {
      let globalLineIndex = 0;
      let atLineStart = true;
      for (const part of parts) {
        if (!(part instanceof TemplateText)) {
          atLineStart = false;
          continue;
        }
        const text = part.value;
        const partLines = text.split("\n");
        for (let i = 0; i < partLines.length; i++) {
          if (i > 0) {
            globalLineIndex++;
            atLineStart = true;
          }
          if (atLineStart && globalLineIndex > 0 && partLines[i].length > 0) {
            const lineIndent = partLines[i].search(/\S|$/);
            partLines[i] = partLines[i].slice(Math.min(lineIndent, stripAmount));
          }
        }
        atLineStart = partLines[partLines.length - 1].length === 0;
        part.value = partLines.join("\n");
      }
    }
  }
  cleanTemplateParts(parts);
}
function cleanTemplateParts(parts) {
  if (parts.length === 0)
    return;
  const firstText = parts.find((p) => p instanceof TemplateText);
  if (firstText) {
    firstText.value = stripLeadingNewlines(firstText.value);
    firstText.value = trimFirstLineWhitespace(firstText.value);
  }
  normalizeBlankLines(parts);
  trimTrailingTextWhitespace(parts);
}
function stripLeadingNewlines(value) {
  const leadingNewlines = value.match(/^\n+/)?.[0]?.length ?? 0;
  const stripped = value.replace(/^\n+/, "");
  return leadingNewlines >= 2 ? "\n" + stripped : stripped;
}
function trimFirstLineWhitespace(value) {
  const nlPos = value.indexOf("\n");
  if (nlPos === -1)
    return value.trimStart();
  return value.slice(0, nlPos).trimStart() + value.slice(nlPos);
}
function normalizeBlankLines(parts) {
  for (const part of parts) {
    if (!(part instanceof TemplateText))
      continue;
    const tp = part;
    const partLines = tp.value.split("\n");
    for (let i = 1; i < partLines.length; i++) {
      if (partLines[i].trim().length === 0) {
        partLines[i] = "";
      }
    }
    tp.value = partLines.join("\n");
  }
}
function trimTrailingTextWhitespace(parts) {
  const lastPart = parts[parts.length - 1];
  if (lastPart instanceof TemplateText) {
    lastPart.value = lastPart.value.trimEnd();
  }
}
var TemplateExpression = class _TemplateExpression extends AstNodeBase {
  parts;
  static kind = "TemplateExpression";
  static kindLabel = "a template";
  __kind = _TemplateExpression.kind;
  /**
   * When true, the `|` was on its own line with content on following lines.
   * Detected from CST text: `|` followed by only whitespace/newline before content.
   */
  barePipeMultiline = false;
  /**
   * When true, emit a space between `|` and the content (e.g. `| Hello`).
   * Detected from CST source text during parse; defaults to false for
   * programmatically constructed templates.
   */
  spaceAfterPipe = false;
  constructor(parts) {
    super();
    this.parts = parts;
  }
  get content() {
    return this.parts.map((p) => p.__emit({ indent: 0 })).join("");
  }
  __describe() {
    const c = this.content;
    const preview = c.slice(0, 20);
    return `template "${preview}${c.length > 20 ? "..." : ""}"`;
  }
  __emit(ctx) {
    const rawInner = this.parts.map((p) => p.__emit(ctx)).join("");
    const childIndent = emitIndent({ ...ctx, indent: ctx.indent + 1 });
    const lines = rawInner.split("\n");
    if (this.barePipeMultiline && lines.length > 0) {
      const allReindented = lines.map((line) => {
        if (line.trim().length === 0)
          return "";
        return childIndent + line;
      }).join("\n");
      return `|
${allReindented}`;
    }
    const sep = this.spaceAfterPipe ? " " : "";
    return lines.map((line, i) => {
      if (i === 0)
        return line.length > 0 ? `|${sep}${line}` : "|";
      if (line.trim().length === 0)
        return "";
      return `${childIndent}${line}`;
    }).join("\n");
  }
  static parse(node, parseExpr) {
    const { parts, diagnostics } = parseTemplateParts(node, parseExpr);
    const expr = withCst(new _TemplateExpression(parts), node);
    const nodeText = node.text;
    if (nodeText && parts.length > 0) {
      const afterPipe = nodeText.slice(1);
      const firstNonWs = afterPipe.search(/\S/);
      if (firstNonWs > 0 && afterPipe.slice(0, firstNonWs).includes("\n")) {
        expr.barePipeMultiline = true;
      }
      if (!expr.barePipeMultiline && afterPipe.length > 0 && afterPipe[0] === " ") {
        expr.spaceAfterPipe = true;
      }
    }
    expr.__diagnostics.push(...diagnostics);
    return expr;
  }
};
var NumberLiteral = class _NumberLiteral extends AstNodeBase {
  value;
  static kind = "NumberLiteral";
  static kindLabel = "a number";
  __kind = _NumberLiteral.kind;
  constructor(value) {
    super();
    this.value = value;
  }
  __describe() {
    return `number ${this.value}`;
  }
  __emit(_ctx) {
    if (this.__cst) {
      return this.__cst.node.text;
    }
    return String(this.value);
  }
  static parse(node) {
    return withCst(new _NumberLiteral(Number(node.text)), node);
  }
};
var BooleanLiteral = class _BooleanLiteral extends AstNodeBase {
  value;
  static kind = "BooleanLiteral";
  static kindLabel = "True or False";
  __kind = _BooleanLiteral.kind;
  constructor(value) {
    super();
    this.value = value;
  }
  __describe() {
    return this.value ? "True" : "False";
  }
  __emit(_ctx) {
    return this.value ? "True" : "False";
  }
  static parse(node) {
    return withCst(new _BooleanLiteral(node.text === "True"), node);
  }
};
var NoneLiteral = class _NoneLiteral extends AstNodeBase {
  static kind = "NoneLiteral";
  static kindLabel = "None";
  __kind = _NoneLiteral.kind;
  __describe() {
    return "None";
  }
  __emit(_ctx) {
    return "None";
  }
  static parse(node) {
    return withCst(new _NoneLiteral(), node);
  }
};
var Identifier = class _Identifier extends AstNodeBase {
  name;
  static kind = "Identifier";
  static kindLabel = "an identifier";
  __kind = _Identifier.kind;
  constructor(name) {
    super();
    this.name = name;
  }
  __describe() {
    return `identifier "${this.name}"`;
  }
  __emit(_ctx) {
    return this.name;
  }
  static parse(node) {
    return withCst(new _Identifier(node.text), node);
  }
};
var ErrorValue = class _ErrorValue extends AstNodeBase {
  rawText;
  static kind = "ErrorValue";
  static kindLabel = "an error value";
  __kind = _ErrorValue.kind;
  constructor(rawText) {
    super();
    this.rawText = rawText;
  }
  __describe() {
    return `error value: ${this.rawText}`;
  }
  __emit(_ctx) {
    return this.rawText;
  }
};
var AtIdentifier = class _AtIdentifier extends AstNodeBase {
  name;
  static kind = "AtIdentifier";
  static kindLabel = "a reference (e.g., @Foo)";
  __kind = _AtIdentifier.kind;
  constructor(name) {
    super();
    this.name = name;
  }
  __describe() {
    return `reference @${this.name}`;
  }
  __emit(_ctx) {
    return `@${this.name}`;
  }
  static parse(node) {
    const idNode = node.namedChildren.find((n) => n.type === "id");
    const name = idNode?.text ?? node.text.slice(1);
    return withCst(new _AtIdentifier(name), node);
  }
};
var MemberExpression = class _MemberExpression extends AstNodeBase {
  object;
  property;
  static kind = "MemberExpression";
  static kindLabel = "a reference (e.g., @Foo.Bar)";
  __kind = _MemberExpression.kind;
  constructor(object, property) {
    super();
    this.object = object;
    this.property = property;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    return `${this.object.__emit(ctx)}.${this.property}`;
  }
  static parse(node, parseExpr) {
    const children = node.namedChildren;
    const objectNode = children[0];
    const propertyNode = children.find((n) => n.type === "id");
    const object = parseExpr(objectNode);
    const property = propertyNode?.text ?? "";
    return withCst(new _MemberExpression(object, property), node);
  }
};
var SubscriptExpression = class _SubscriptExpression extends AstNodeBase {
  object;
  index;
  static kind = "SubscriptExpression";
  static kindLabel = "a subscript expression";
  __kind = _SubscriptExpression.kind;
  constructor(object, index) {
    super();
    this.object = object;
    this.index = index;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    return `${this.object.__emit(ctx)}[${this.index.__emit(ctx)}]`;
  }
  static parse(node, parseExpr) {
    const children = node.namedChildren;
    const object = parseExpr(children[0]);
    const index = parseExpr(children[1]);
    return withCst(new _SubscriptExpression(object, index), node);
  }
};
var BinaryExpression = class _BinaryExpression extends AstNodeBase {
  left;
  operator;
  right;
  static kind = "BinaryExpression";
  static kindLabel = "a binary expression";
  __kind = _BinaryExpression.kind;
  constructor(left, operator, right) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    return `${this.left.__emit(ctx)} ${this.operator} ${this.right.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const children = node.namedChildren;
    const left = parseExpr(children[0]);
    const right = parseExpr(children[1]);
    const operators = ["+", "-", "*", "/", "and", "or"];
    let operator = "+";
    for (const child of node.children) {
      if (child.isNamed)
        continue;
      const matched = operators.find((op) => op === child.text);
      if (matched) {
        operator = matched;
        break;
      }
    }
    return withCst(new _BinaryExpression(left, operator, right), node);
  }
};
var UnaryExpression = class _UnaryExpression extends AstNodeBase {
  operator;
  operand;
  static kind = "UnaryExpression";
  static kindLabel = "a unary expression";
  __kind = _UnaryExpression.kind;
  constructor(operator, operand) {
    super();
    this.operator = operator;
    this.operand = operand;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    if (this.operator === "not") {
      return `not ${this.operand.__emit(ctx)}`;
    }
    return `${this.operator}${this.operand.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const children = node.namedChildren;
    const operand = parseExpr(children[0]);
    let operator = "not";
    if (node.text.startsWith("not "))
      operator = "not";
    else if (node.text.startsWith("-"))
      operator = "-";
    else if (node.text.startsWith("+"))
      operator = "+";
    return withCst(new _UnaryExpression(operator, operand), node);
  }
};
var ComparisonExpression = class _ComparisonExpression extends AstNodeBase {
  left;
  operator;
  right;
  static kind = "ComparisonExpression";
  static kindLabel = "a comparison";
  __kind = _ComparisonExpression.kind;
  constructor(left, operator, right) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    return `${this.left.__emit(ctx)} ${this.operator} ${this.right.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const operands = node.namedChildren.filter((c) => !c.isError);
    const left = parseExpr(operands[0]);
    const right = operands.length > 1 ? parseExpr(operands[1]) : left;
    const opParts = [];
    for (const child of node.children) {
      if (child === operands[0] || child === operands[1])
        continue;
      if (child.isError) {
        opParts.push(child.text.trim());
      } else if (!child.isNamed) {
        opParts.push(child.text.trim());
      }
    }
    const opText = opParts.filter((p) => p.length > 0).join(" ");
    const operator = opText || "==";
    return withCst(new _ComparisonExpression(left, operator, right), node);
  }
};
var ListLiteral = class _ListLiteral extends AstNodeBase {
  elements;
  static kind = "ListLiteral";
  static kindLabel = "a list";
  __kind = _ListLiteral.kind;
  constructor(elements) {
    super();
    this.elements = elements;
  }
  __describe() {
    return `list ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    const items = this.elements.map((e) => e.__emit(ctx)).join(", ");
    return `[${items}]`;
  }
  static parse(node, parseExpr) {
    const elements = [];
    for (const child of node.namedChildren) {
      elements.push(parseExpr(child));
    }
    return withCst(new _ListLiteral(elements), node);
  }
};
var DictLiteral = class _DictLiteral extends AstNodeBase {
  entries;
  static kind = "DictLiteral";
  static kindLabel = "a dictionary";
  __kind = _DictLiteral.kind;
  constructor(entries) {
    super();
    this.entries = entries;
  }
  __describe() {
    return `dictionary ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    const items = this.entries.map((e) => `${e.key.__emit(ctx)}: ${e.value.__emit(ctx)}`).join(", ");
    return `{${items}}`;
  }
  static parse(node, parseExpr) {
    const entries = [];
    for (const child of node.namedChildren) {
      if (child.type === "dictionary_pair") {
        const rawKeyNode = child.childForFieldName("key");
        const keyNode = rawKeyNode?.type === "key" && rawKeyNode.namedChildren.length > 0 ? rawKeyNode.namedChildren[0] : rawKeyNode;
        const valueNode = child.childForFieldName("value");
        if (keyNode && valueNode) {
          entries.push(withCst({ key: parseExpr(keyNode), value: parseExpr(valueNode) }, child));
        }
      }
    }
    return withCst(new _DictLiteral(entries), node);
  }
};
var CallExpression = class _CallExpression extends AstNodeBase {
  func;
  args;
  static kind = "CallExpression";
  static kindLabel = "a function call";
  __kind = _CallExpression.kind;
  constructor(func, args) {
    super();
    this.func = func;
    this.args = args;
  }
  __describe() {
    return `call ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    const argsStr = this.args.map((a) => a.__emit(ctx)).join(", ");
    return `${this.func.__emit(ctx)}(${argsStr})`;
  }
  static parse(node, parseExpr) {
    const funcNode = node.childForFieldName("function");
    const func = funcNode ? parseExpr(funcNode) : new Identifier("");
    const args = [];
    for (const child of node.childrenForFieldName("argument")) {
      args.push(parseExpr(child));
    }
    return withCst(new _CallExpression(func, args), node);
  }
};
var TernaryExpression = class _TernaryExpression extends AstNodeBase {
  consequence;
  condition;
  alternative;
  static kind = "TernaryExpression";
  static kindLabel = "a ternary expression";
  __kind = _TernaryExpression.kind;
  constructor(consequence, condition, alternative) {
    super();
    this.consequence = consequence;
    this.condition = condition;
    this.alternative = alternative;
  }
  __describe() {
    return `expression ${this.__emit({ indent: 0 })}`;
  }
  __emit(ctx) {
    return `${this.consequence.__emit(ctx)} if ${this.condition.__emit(ctx)} else ${this.alternative.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const consequenceNode = node.childForFieldName("consequence");
    const conditionNode = node.childForFieldName("condition");
    const alternativeNode = node.childForFieldName("alternative");
    const consequence = consequenceNode ? parseExpr(consequenceNode) : new Identifier("");
    const condition = conditionNode ? parseExpr(conditionNode) : new Identifier("");
    const alternative = alternativeNode ? parseExpr(alternativeNode) : new Identifier("");
    return withCst(new _TernaryExpression(consequence, condition, alternative), node);
  }
};
var Ellipsis = class _Ellipsis extends AstNodeBase {
  static kind = "Ellipsis";
  static kindLabel = "an ellipsis (...)";
  __kind = _Ellipsis.kind;
  __describe() {
    return "ellipsis (...)";
  }
  __emit(_ctx) {
    return "...";
  }
  static parse(node) {
    return withCst(new _Ellipsis(), node);
  }
};
function isMemberExpression(expr) {
  return expr instanceof MemberExpression;
}
function isAtIdentifier(expr) {
  return expr instanceof AtIdentifier;
}
function decomposeMemberExpression(expr, knownNamespaces) {
  if (!isMemberExpression(expr))
    return null;
  if (!expr.property)
    return null;
  if (isAtIdentifier(expr.object)) {
    return { namespace: expr.object.name, property: expr.property };
  }
  if (knownNamespaces && expr.object instanceof Identifier && knownNamespaces.has(expr.object.name)) {
    return { namespace: expr.object.name, property: expr.property };
  }
  return null;
}
function decomposeAtMemberExpression(expr) {
  return decomposeMemberExpression(expr);
}
var ALL_EXPRESSION_CLASSES = [
  StringLiteral,
  TemplateExpression,
  NumberLiteral,
  BooleanLiteral,
  NoneLiteral,
  Identifier,
  AtIdentifier,
  MemberExpression,
  SubscriptExpression,
  BinaryExpression,
  UnaryExpression,
  ComparisonExpression,
  TernaryExpression,
  CallExpression,
  ListLiteral,
  DictLiteral,
  Ellipsis
];
var EXPRESSION_KINDS = new Set(ALL_EXPRESSION_CLASSES.map((C) => C.kind));
var KIND_LABELS = new Map(ALL_EXPRESSION_CLASSES.map((C) => [C.kind, C.kindLabel]));
var EXPRESSION_KIND_STRINGS = EXPRESSION_KINDS;
function isExpressionKind(kind) {
  return EXPRESSION_KIND_STRINGS.has(kind);
}
var expressionParsers = {
  string: (node) => StringLiteral.parse(node),
  template: (node, parseExpr) => TemplateExpression.parse(node, parseExpr),
  number: (node) => NumberLiteral.parse(node),
  True: (node) => BooleanLiteral.parse(node),
  False: (node) => BooleanLiteral.parse(node),
  None: (node) => NoneLiteral.parse(node),
  ellipsis: (node) => Ellipsis.parse(node),
  id: (node) => Identifier.parse(node),
  at_id: (node) => AtIdentifier.parse(node),
  member_expression: (node, parseExpr) => MemberExpression.parse(node, parseExpr),
  subscript_expression: (node, parseExpr) => SubscriptExpression.parse(node, parseExpr),
  binary_expression: (node, parseExpr) => BinaryExpression.parse(node, parseExpr),
  unary_expression: (node, parseExpr) => UnaryExpression.parse(node, parseExpr),
  comparison_expression: (node, parseExpr) => ComparisonExpression.parse(node, parseExpr),
  ternary_expression: (node, parseExpr) => TernaryExpression.parse(node, parseExpr),
  call_expression: (node, parseExpr) => CallExpression.parse(node, parseExpr),
  list: (node, parseExpr) => ListLiteral.parse(node, parseExpr),
  dictionary: (node, parseExpr) => DictLiteral.parse(node, parseExpr)
};

// ../language/dist/lint/lint-utils.js
var LINT_SOURCE = "agentscript-lint";
var SUGGESTION_THRESHOLD = 0.4;
function levenshtein(a, b) {
  if (a === b)
    return 0;
  if (a.length === 0)
    return b.length;
  if (b.length === 0)
    return a.length;
  if (a.length > b.length) {
    [a, b] = [b, a];
  }
  const aLen = a.length;
  const bLen = b.length;
  let prev = new Array(aLen + 1);
  let curr = new Array(aLen + 1);
  for (let j = 0; j <= aLen; j++) {
    prev[j] = j;
  }
  for (let i = 1; i <= bLen; i++) {
    curr[0] = i;
    for (let j = 1; j <= aLen; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      curr[j] = Math.min(
        curr[j - 1] + 1,
        // insertion
        prev[j] + 1,
        // deletion
        prev[j - 1] + cost
        // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[aLen];
}
function formatSuggestionHint(message, suggestion, prefix2 = "") {
  if (!suggestion)
    return message;
  return `${message}. Did you mean '${prefix2}${suggestion}'?`;
}
function findSuggestion(name, candidates) {
  if (candidates.length === 0)
    return void 0;
  let bestCandidate;
  let bestDistance = Infinity;
  for (const candidate of candidates) {
    const dist = levenshtein(name.toLowerCase(), candidate.toLowerCase());
    if (dist < bestDistance) {
      bestDistance = dist;
      bestCandidate = candidate;
    }
  }
  if (!bestCandidate)
    return void 0;
  const maxLen = Math.max(name.length, bestCandidate.length);
  if (bestDistance / maxLen > SUGGESTION_THRESHOLD)
    return void 0;
  if (bestDistance === 0) {
    return name === bestCandidate ? void 0 : bestCandidate;
  }
  return bestCandidate;
}
function resolveColinearAction(raBlock) {
  const decomposed = decomposeAtMemberExpression(raBlock.value);
  if (!decomposed || decomposed.namespace !== "actions")
    return null;
  return decomposed.property;
}
function lintDiagnostic(range, message, severity, code, options) {
  return {
    range,
    message,
    severity,
    code,
    source: LINT_SOURCE,
    ...options?.tags ? { tags: options.tags } : {},
    ...options?.suggestion ? { data: { suggestion: options.suggestion } } : {}
  };
}
function extractOutputRef(value) {
  const decomposed = decomposeAtMemberExpression(value);
  if (!decomposed || decomposed.namespace !== "outputs")
    return null;
  const cst = isAstNodeLike(value) ? value.__cst : void 0;
  return { name: decomposed.property, ...cst ? { cst } : {} };
}
function extractVariableRef(expr) {
  const decomposed = decomposeAtMemberExpression(expr);
  if (!decomposed || decomposed.namespace !== "variables")
    return null;
  return decomposed.property;
}

// ../language/dist/core/diagnostics.js
function createDiagnostic(rangeOrNode, message, severity = DiagnosticSeverity.Error, code, data) {
  let range;
  if (hasCstRange(rangeOrNode)) {
    range = rangeOrNode.__cst.range;
  } else if ("startPosition" in rangeOrNode) {
    range = toRange(rangeOrNode);
  } else if ("start" in rangeOrNode && "end" in rangeOrNode) {
    range = rangeOrNode;
  } else {
    throw new Error("createDiagnostic: expected Range, SyntaxNode, or Parsed node with __cst");
  }
  return {
    range,
    message,
    severity,
    code,
    source: "agentscript-schema",
    ...data ? { data } : {}
  };
}
function undefinedReferenceDiagnostic(range, message, referenceName, suggestion, expected) {
  const fullMessage = formatSuggestionHint(message, suggestion);
  return {
    range,
    message: fullMessage,
    severity: DiagnosticSeverity.Error,
    code: "undefined-reference",
    source: "agentscript-lint",
    data: {
      referenceName,
      ...suggestion ? { suggestion } : {},
      ...expected && expected.length > 0 ? { expected } : {}
    }
  };
}
function attachDiagnostic(node, diagnostic) {
  const arr = node.__diagnostics;
  if (Array.isArray(arr)) {
    arr.push(diagnostic);
    return;
  }
  throw new Error(`attachDiagnostic: target node lacks __diagnostics array (kind: ${node.__kind ?? "unknown"}). Ensure the node was created via withCst(), createNode(), or extends AstNodeBase.`);
}
function createParserDiagnostic(rangeOrNode, message, code) {
  const range = "startPosition" in rangeOrNode ? toRange(rangeOrNode) : rangeOrNode;
  return {
    range,
    message,
    severity: DiagnosticSeverity.Error,
    code,
    source: "parser"
  };
}
function typeMismatchDiagnostic(range, message, expectedType, actualType, source = "agentscript-schema") {
  return {
    range,
    message,
    severity: DiagnosticSeverity.Error,
    code: "type-mismatch",
    source,
    data: { expectedType, actualType }
  };
}
var DeprecatedFieldDiagnostic = class {
  range;
  message;
  severity = DiagnosticSeverity.Warning;
  code = "deprecated-field";
  source = "agentscript";
  tags = [DiagnosticTag.Deprecated];
  data;
  constructor(range, message, replacement) {
    this.range = range;
    this.message = message;
    if (replacement) {
      this.data = { replacement };
    }
  }
};
var DiagnosticCollector = class {
  all = [];
  own = [];
  /** Record a diagnostic generated at this parse level. */
  add(diag) {
    this.all.push(diag);
    this.own.push(diag);
  }
  /** Incorporate diagnostics from a child parse result. */
  merge(result) {
    this.all.push(...result.diagnostics);
  }
  /** Incorporate an array of child diagnostics. */
  mergeAll(diags) {
    this.all.push(...diags);
  }
};

// ../language/dist/core/comment-attacher.js
var CommentAttacher = class {
  _pending = [];
  _lastTarget;
  /** Accumulate a parsed comment as a pending leading comment. */
  pushLeading(comment2) {
    this._pending.push(comment2);
  }
  /** Parse a CST comment node and accumulate it as pending leading. */
  pushLeadingNode(node) {
    this._pending.push(parseCommentNode(node, "leading"));
  }
  /**
   * Try to attach a comment node as inline on the last target
   * (same row as the target's CST end). Returns true if attached,
   * false if caller should handle it differently.
   */
  tryAttachInline(node, lastTarget) {
    if (!lastTarget?.__cst)
      return false;
    const { __cst: cst } = lastTarget;
    if (node.startRow === cst.range.end.line) {
      attach(lastTarget, [parseCommentNode(node, "inline")]);
      return true;
    }
    return false;
  }
  /**
   * Consume pending leading comments (plus optional extras) and attach
   * them to a target. Also updates the internal last-target for later flush.
   */
  consumeOnto(target, extraComments) {
    const comments = extraComments ? [...this._pending, ...extraComments] : this._pending;
    if (comments.length > 0) {
      attach(target, comments);
    }
    this._pending = [];
    this._lastTarget = target;
  }
  /**
   * Consume pending comments (plus optional extras) onto the first item
   * in an array of targets. Updates the last-target to the last item.
   */
  consumeOntoFirst(targets, extraComments) {
    if (targets.length === 0)
      return;
    const comments = extraComments ? [...this._pending, ...extraComments] : this._pending;
    if (comments.length > 0) {
      attach(targets[0], comments);
    }
    this._pending = [];
    this._lastTarget = targets[targets.length - 1];
  }
  /** Check if there are pending comments. */
  get hasPending() {
    return this._pending.length > 0;
  }
  /** Discard all pending comments without attaching them anywhere. */
  clearPending() {
    this._pending = [];
  }
  /**
   * Drain pending comments as ErrorBlock children into the given array.
   * Each comment becomes an ErrorBlock with its `# text` content preserved.
   * Used by unknown-field handling to preserve comments that would otherwise
   * be lost when UntypedBlock emits from structure instead of raw text.
   */
  drainAsErrorBlocks(target) {
    for (const comment2 of this._pending) {
      const prefix2 = comment2.range ? "#" : "# ";
      const text = `${prefix2}${comment2.value}`;
      target.push(new ErrorBlock(text, 0));
    }
    this._pending = [];
  }
  /** Replace pending with new comments (e.g., dedented comments for next field).
   *  Callers must pass an owned array (not reused after this call). */
  setPending(comments) {
    this._pending = comments;
  }
  /** Get the last target that received comments. */
  get lastTarget() {
    return this._lastTarget;
  }
  /** Set the last target manually. */
  set lastTarget(target) {
    this._lastTarget = target;
  }
  /**
   * Flush any remaining pending comments as trailing on the last target.
   * Call this at the end of a parse loop.
   */
  flush() {
    if (this._pending.length > 0 && this._lastTarget) {
      const asTrailing = this._pending.map((c) => ({
        ...c,
        attachment: "trailing"
      }));
      attach(this._lastTarget, asTrailing);
      this._pending = [];
    }
  }
};
function attach(node, comments) {
  if (!node || comments.length === 0)
    return;
  node.__comments = [...node.__comments ?? [], ...comments];
}

// ../language/dist/core/statements.js
var Template = class _Template extends AstNodeBase {
  parts;
  __kind = "Template";
  /**
   * When true, the `|` was on its own line with content on following lines.
   * Detected from CST: `|` followed by only whitespace/newline before content.
   */
  barePipeMultiline = false;
  /**
   * When true, emit a space between `|` and the content (e.g. `| Hello`).
   * Detected from CST source text during parse; defaults to false for
   * programmatically constructed templates.
   */
  spaceAfterPipe = false;
  constructor(parts) {
    super();
    this.parts = parts;
  }
  get content() {
    return this.parts.map((p) => p.__emit({ indent: 0 })).join("");
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const rawInner = this.parts.map((p) => p.__emit(ctx)).join("");
    const childIndent = emitIndent({ ...ctx, indent: ctx.indent + 1 });
    const lines = rawInner.split("\n");
    if (this.barePipeMultiline && lines.length > 0) {
      const allReindented = lines.map((line) => {
        if (line.trim().length === 0)
          return "";
        return childIndent + line;
      }).join("\n");
      return `${indent}|
${allReindented}`;
    }
    const continuationIndent = indent + (this.spaceAfterPipe ? "  " : " ");
    const reindented = lines.map((line, i) => {
      if (i === 0)
        return line;
      if (line.trim().length === 0)
        return "";
      return continuationIndent + line;
    }).join("\n");
    const sep = this.spaceAfterPipe ? " " : "";
    const prefix2 = reindented.length > 0 ? `${indent}|${sep}` : `${indent}|`;
    return `${prefix2}${reindented}`;
  }
  static parse(node, parseExpr) {
    const { parts, diagnostics } = parseTemplateParts(node, parseExpr);
    const stmt = withCst(new _Template(parts), node);
    const nodeText = node.text;
    if (nodeText && parts.length > 0) {
      const afterPipe = nodeText.slice(1);
      const firstNonWs = afterPipe.search(/\S/);
      if (firstNonWs > 0 && afterPipe.slice(0, firstNonWs).includes("\n")) {
        stmt.barePipeMultiline = true;
      }
      if (!stmt.barePipeMultiline && afterPipe.length > 0 && afterPipe[0] === " ") {
        stmt.spaceAfterPipe = true;
      }
    }
    stmt.__diagnostics.push(...diagnostics);
    return stmt;
  }
};
var WithClause = class _WithClause extends AstNodeBase {
  param;
  value;
  __kind = "WithClause";
  __paramCstNode;
  constructor(param, value) {
    super();
    this.param = param;
    this.value = value;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    if (this.value instanceof Ellipsis && !this.value.__cst && this.__cst) {
      return `${indent}with ${emitKeyName(this.param)}`;
    }
    const hasSpaces = this.__cst?.node?.text?.includes(" = ") ?? true;
    const eq = hasSpaces ? " = " : "=";
    return `${indent}with ${emitKeyName(this.param)}${eq}${this.value.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const paramNode = node.childForFieldName("param");
    const valueNode = node.childForFieldName("value");
    const param = paramNode ? getKeyText(paramNode) : "";
    const value = valueNode ? parseExpr(valueNode) : new Ellipsis();
    const clause = withCst(new _WithClause(param, value), node);
    if (paramNode)
      clause.__paramCstNode = paramNode;
    return clause;
  }
  /** Desugar comma-separated `with x=a,y=b` into separate WithClause nodes. */
  static parseAll(node, parseExpr) {
    const paramNodes = node.childrenForFieldName("param");
    const valueNodes = node.childrenForFieldName("value");
    if (paramNodes.length <= 1) {
      return [_WithClause.parse(node, parseExpr)];
    }
    const clauses = [];
    for (let i = 0; i < paramNodes.length; i++) {
      const paramNode = paramNodes[i];
      const valueNode = valueNodes[i];
      const param = paramNode ? getKeyText(paramNode) : "";
      const value = valueNode ? parseExpr(valueNode) : new Ellipsis();
      const clause = withCst(new _WithClause(param, value), node);
      clause.__paramCstNode = paramNode;
      if (paramNode && valueNode) {
        clause.__cst.range = {
          start: toRange(paramNode).start,
          end: toRange(valueNode).end
        };
      }
      clauses.push(clause);
    }
    return clauses;
  }
};
var SetClause = class _SetClause extends AstNodeBase {
  target;
  value;
  __kind = "SetClause";
  constructor(target, value) {
    super();
    this.target = target;
    this.value = value;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    if (!this.target || !this.value) {
      const cstText = this.__cst?.node?.text?.trim();
      return cstText ? `${indent}${cstText}` : `${indent}set`;
    }
    const hasSpaces = this.__cst?.node?.text?.includes(" = ") ?? true;
    const eq = hasSpaces ? " = " : "=";
    return `${indent}set ${this.target.__emit(ctx)}${eq}${this.value.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const targetNode = node.childForFieldName("target");
    const valueNode = node.childForFieldName("value");
    const target = targetNode ? parseExpr(targetNode) : null;
    const value = valueNode ? parseExpr(valueNode) : null;
    return withCst(new _SetClause(target, value), node);
  }
};
var ToClause = class _ToClause extends AstNodeBase {
  target;
  __kind = "ToClause";
  constructor(target) {
    super();
    this.target = target;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    return `${indent}to ${this.target.__emit(ctx)}`;
  }
  static parse(node, parseExpr) {
    const targetNode = node.childForFieldName("target");
    const target = targetNode ? parseExpr(targetNode) : null;
    return withCst(new _ToClause(target), node);
  }
};
var AvailableWhen = class _AvailableWhen extends AstNodeBase {
  condition;
  __kind = "AvailableWhen";
  constructor(condition) {
    super();
    this.condition = condition;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const condText = this.condition ? this.condition.__emit(ctx) : this.__cst?.node?.childForFieldName("condition")?.text ?? "";
    return `${indent}available when ${condText}`;
  }
  static parse(node, parseExpr) {
    const conditionNode = node.childForFieldName("condition");
    const condition = conditionNode ? parseExpr(conditionNode) : null;
    return withCst(new _AvailableWhen(condition), node);
  }
};
var RunStatement = class _RunStatement extends AstNodeBase {
  target;
  body;
  __kind = "RunStatement";
  constructor(target, body) {
    super();
    this.target = target;
    this.body = body;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const targetText = this.target ? this.target.__emit(ctx) : this.__cst?.node?.childForFieldName("target")?.text ?? "";
    if (!targetText.trim() && this.__cst?.node) {
      const cstText = this.__cst.node.text?.trim();
      if (cstText) {
        const lines = cstText.split("\n");
        return lines.map((line) => `${indent}${line.trim()}`).join("\n");
      }
    }
    let out = `${indent}run ${targetText}`;
    if (this.body.length > 0) {
      out += "\n";
      const bodyCtx = { ...ctx, indent: ctx.indent + 1 };
      out += this.body.map((s) => wrapWithComments(s.__emit(bodyCtx), s, bodyCtx)).join("\n");
    }
    return out;
  }
  static parse(node, parseExpr, parseStmt) {
    let targetNode = node.childForFieldName("target");
    const bodyNode = node.childForFieldName("block_value");
    const diagnostics = [];
    for (const child of node.children) {
      if (child.type !== "ERROR")
        continue;
      const hasWith = child.children.some((c) => c.type === "with");
      if (!hasWith)
        continue;
      for (const errChild of child.namedChildren) {
        if (errChild.type === "expression" || errChild.type === "member_expression" || errChild.type === "atom") {
          targetNode = errChild;
          break;
        }
      }
      const withNode = child.children.find((c) => c.type === "with");
      const errorIdx = node.children.indexOf(child);
      for (let i = errorIdx + 1; i < node.children.length; i++) {
        const sibling = node.children[i];
        if (sibling.type === "expression") {
          const rangeStart = withNode ? toRange(withNode).start : toRange(child).start;
          diagnostics.push(createDiagnostic({ start: rangeStart, end: toRange(sibling).end }, `Invalid \`with\` clause: \`with ${sibling.text}\`. \`with\` requires named arguments (e.g., \`with name=@variables.name\`).`, DiagnosticSeverity.Error, "syntax-error"));
          break;
        }
      }
      break;
    }
    const target = targetNode ? parseExpr(targetNode) : null;
    const body = [];
    const attacher = new CommentAttacher();
    const outerComments = node.children.filter((child) => child.type === "comment").map((c) => parseCommentNode(c, "leading"));
    if (bodyNode) {
      const preBodyComments = outerComments.filter((comment2) => {
        const line = comment2.range?.start.line;
        return line !== void 0 && line < bodyNode.startRow;
      });
      for (const c of preBodyComments) {
        attacher.pushLeading(c);
      }
      for (const child of bodyNode.children) {
        if (child.type === "comment") {
          if (!attacher.tryAttachInline(child, body[body.length - 1])) {
            attacher.pushLeadingNode(child);
          }
          continue;
        }
        const result = parseStmt(child);
        if (!result)
          continue;
        if (Array.isArray(result)) {
          const normalized = result.filter((stmt) => stmt !== null);
          if (normalized.length === 0)
            continue;
          attacher.consumeOntoFirst(normalized);
          body.push(...normalized);
        } else {
          attacher.consumeOnto(result);
          body.push(result);
        }
      }
      const postBodyComments = outerComments.filter((comment2) => {
        const line = comment2.range?.start.line;
        return line !== void 0 && line > bodyNode.endRow;
      }).map((c) => ({ ...c, attachment: "trailing" }));
      if (postBodyComments.length > 0 && body.length > 0) {
        attach(body[body.length - 1], postBodyComments);
      }
    }
    let pendingErrorText = "";
    let pendingErrorNode = null;
    for (const child of node.children) {
      if (child.isError) {
        const text = child.text?.trim();
        if (text) {
          if (pendingErrorNode && child.startRow === pendingErrorNode.startRow) {
            pendingErrorText += " " + text;
          } else {
            if (pendingErrorText && pendingErrorNode) {
              body.push(withCst(new UnknownStatement(pendingErrorText), pendingErrorNode));
            }
            pendingErrorText = text;
            pendingErrorNode = child;
          }
        }
      } else if (pendingErrorText && pendingErrorNode) {
        body.push(withCst(new UnknownStatement(pendingErrorText), pendingErrorNode));
        pendingErrorText = "";
        pendingErrorNode = null;
      }
    }
    if (pendingErrorText && pendingErrorNode) {
      body.push(withCst(new UnknownStatement(pendingErrorText), pendingErrorNode));
    }
    attacher.flush();
    const parsed = withCst(new _RunStatement(target, body), node);
    if (diagnostics.length > 0) {
      parsed.__diagnostics.push(...diagnostics);
    }
    return parsed;
  }
};
var IfStatement = class _IfStatement extends AstNodeBase {
  condition;
  body;
  orelse;
  __kind = "IfStatement";
  constructor(condition, body, orelse = []) {
    super();
    this.condition = condition;
    this.body = body;
    this.orelse = orelse;
  }
  __emit(ctx) {
    return this.__emitConditional(ctx, "if");
  }
  __emitConditional(ctx, keyword) {
    const indent = emitIndent(ctx);
    if (this.body.length === 0 && this.orelse.length === 0 && this.__cst?.node) {
      const cstText = this.__cst.node.text?.trim();
      if (cstText) {
        const lines = cstText.split("\n");
        return lines.map((line) => `${indent}${line.trim()}`).join("\n");
      }
    }
    let condText = this.condition ? this.condition.__emit(ctx) : this.__cst?.node?.childForFieldName("condition")?.text ?? "";
    if (this.__cst?.node) {
      const firstLine = this.__cst.node.text?.split("\n")[0]?.trim() ?? "";
      const match = firstLine.match(/^(?:if|elif)\s+(.*?):\s*$/);
      if (match && match[1].length > condText.trim().length) {
        condText = match[1];
      }
    }
    let out = `${indent}${keyword} ${condText}:
`;
    const bodyCtx = { ...ctx, indent: ctx.indent + 1 };
    out += this.body.map((s) => wrapWithComments(s.__emit(bodyCtx), s, bodyCtx)).join("\n");
    if (this.orelse.length > 0) {
      if (this.orelse.length === 1 && this.orelse[0] instanceof _IfStatement) {
        out += "\n" + this.orelse[0].__emitConditional(ctx, "elif");
      } else {
        out += `
${indent}else:
`;
        out += this.orelse.map((s) => wrapWithComments(s.__emit(bodyCtx), s, bodyCtx)).join("\n");
      }
    }
    return out;
  }
  static parse(node, parseExpr, parseProcedure) {
    const conditionNode = node.childForFieldName("condition");
    const consequenceNode = node.childForFieldName("consequence");
    const condition = conditionNode ? parseExpr(conditionNode) : null;
    const body = consequenceNode ? parseProcedure(consequenceNode) : [];
    const alternatives = node.childrenForFieldName("alternative");
    let orelse = [];
    for (let i = alternatives.length - 1; i >= 0; i--) {
      const alt = alternatives[i];
      if (alt.type === "else_clause") {
        const elseConsequence = alt.childForFieldName("consequence");
        orelse = elseConsequence ? parseProcedure(elseConsequence) : [];
      } else if (alt.type === "elif_clause") {
        const elifCondition = parseExpr(alt.childForFieldName("condition"));
        const elifConsequence = alt.childForFieldName("consequence");
        const elifBody = elifConsequence ? parseProcedure(elifConsequence) : [];
        orelse = [
          withCst(new _IfStatement(elifCondition, elifBody, orelse), alt)
        ];
      }
    }
    return withCst(new _IfStatement(condition, body, orelse), node);
  }
};
var TransitionStatement = class _TransitionStatement extends AstNodeBase {
  clauses;
  __kind = "TransitionStatement";
  constructor(clauses) {
    super();
    this.clauses = clauses;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const parts = this.clauses.map((c) => c.__emit({ ...ctx, indent: 0 }));
    return `${indent}transition ${parts.join(", ")}`;
  }
  static parse(node, parseExpr) {
    const clauses = [];
    const listNode = node.childForFieldName("with_to_statement_list");
    if (listNode) {
      for (const child of listNode.namedChildren) {
        if (child.type === "to_statement") {
          clauses.push(ToClause.parse(child, parseExpr));
        } else if (child.type === "with_statement") {
          const parsed = WithClause.parseAll(child, parseExpr);
          if (Array.isArray(parsed))
            clauses.push(...parsed);
          else
            clauses.push(parsed);
        }
      }
    }
    return withCst(new _TransitionStatement(clauses), node);
  }
};
var UnknownStatement = class extends AstNodeBase {
  text;
  __kind = "UnknownStatement";
  constructor(text) {
    super();
    this.text = text;
  }
  __emit(ctx) {
    const indent = emitIndent(ctx);
    const lines = this.text.split("\n");
    return lines.map((line) => `${indent}${line}`).join("\n");
  }
};
var statementParsers = {
  template: (node, parseExpr) => Template.parse(node, parseExpr),
  with_statement: (node, parseExpr) => WithClause.parseAll(node, parseExpr),
  set_statement: (node, parseExpr) => SetClause.parse(node, parseExpr),
  to_statement: (node, parseExpr) => ToClause.parse(node, parseExpr),
  available_when_statement: (node, parseExpr) => AvailableWhen.parse(node, parseExpr),
  transition_statement: (node, parseExpr) => TransitionStatement.parse(node, parseExpr),
  run_statement: (node, parseExpr, _parseProcedure, parseStmt) => RunStatement.parse(node, parseExpr, parseStmt),
  if_statement: (node, parseExpr, parseProcedure) => IfStatement.parse(node, parseExpr, parseProcedure)
};

// ../language/dist/core/field-builder.js
function assertFiniteNumber(value, method) {
  if (!Number.isFinite(value)) {
    throw new Error(`${method}() requires a finite number, got ${value}`);
  }
}
function assertNonNegativeInteger(value, method) {
  assertFiniteNumber(value, method);
  if (value < 0 || !Number.isInteger(value)) {
    throw new Error(`${method}() requires a non-negative integer, got ${value}`);
  }
}
function assertPositiveNumber(value, method) {
  assertFiniteNumber(value, method);
  if (value <= 0) {
    throw new Error(`${method}() requires a positive number, got ${value}`);
  }
}
var FieldBuilder = class {
  baseType;
  __fieldKind;
  __metadata = {};
  __constraintCategories;
  emitField;
  constructor(baseType, initialMetadata, constraintCategories) {
    this.baseType = baseType;
    this.__fieldKind = baseType.__fieldKind;
    this.emitField = baseType.emitField;
    if (initialMetadata) {
      Object.assign(this.__metadata, initialMetadata);
    }
    if (constraintCategories) {
      this.__constraintCategories = constraintCategories;
    }
    for (const [key, val] of Object.entries(baseType)) {
      if (!(key in this)) {
        Object.defineProperty(this, key, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
  }
  // FieldType delegation — return types carry V for InferFieldType inference
  parse(node, dialect, extraElements) {
    return this.baseType.parse(node, dialect, extraElements);
  }
  emit(value, ctx) {
    return this.baseType.emit(value, ctx);
  }
  get schema() {
    return this.baseType.schema;
  }
};
function addBuilderMethods(fieldType, constraints) {
  const cats = constraints ?? [];
  function populateMethods(target, meta, base) {
    const withMeta = (updates) => enhance({ ...meta, ...updates }, base);
    const withConstraint = (updates) => enhance({ ...meta, constraints: { ...meta.constraints, ...updates } }, base);
    target.describe = (desc) => withMeta({ description: desc });
    target.example = (ex) => withMeta({ example: ex });
    target.minVersion = (v) => withMeta({ minVersion: v });
    target.deprecated = (msg, opts) => withMeta({ deprecated: { message: msg, ...opts } });
    target.experimental = () => withMeta({ experimental: true });
    target.hidden = () => withMeta({ hidden: true });
    target.required = () => withMeta({ required: true });
    target.omitArrow = () => {
      const noArrowBase = Object.create(base);
      noArrowBase.emitField = (key, value, ctx) => {
        const indent = emitIndent(ctx);
        const childCtx = { ...ctx, indent: ctx.indent + 1 };
        if (isEmittable(value)) {
          return `${indent}${key}:
${value.__emit(childCtx)}`;
        }
        return `${indent}${key}:
`;
      };
      return enhance({ ...meta, omitArrow: true }, noArrowBase);
    };
    target.disallowTemplates = (suggestion) => {
      const noTemplateBase = Object.create(base);
      const originalParse = base.parse.bind(base);
      const errorMessage = "Template statements (|) are not allowed in this procedure block." + (suggestion ? ` ${suggestion}` : "");
      function collectTemplateDiagnostics(statements, diagnostics, fallbackRange) {
        for (const stmt of statements) {
          if (stmt.__kind === "Template") {
            const range = stmt.__cst?.range ?? fallbackRange;
            diagnostics.push(createDiagnostic(range, errorMessage, DiagnosticSeverity.Error, "template-in-deterministic-procedure"));
          }
          if (stmt instanceof IfStatement) {
            collectTemplateDiagnostics(stmt.body, diagnostics, fallbackRange);
            if (stmt.orelse.length > 0) {
              collectTemplateDiagnostics(stmt.orelse, diagnostics, fallbackRange);
            }
          }
          if (stmt instanceof RunStatement) {
            collectTemplateDiagnostics(stmt.body, diagnostics, fallbackRange);
          }
        }
      }
      noTemplateBase.parse = function(node, dialect, extraElements) {
        const result = originalParse(node, dialect, extraElements);
        const diagnostics = [...result.diagnostics];
        if (result.value && "statements" in result.value) {
          const procedureNode = result.value;
          const fallbackRange = procedureNode.__cst?.range ?? node;
          collectTemplateDiagnostics(procedureNode.statements, diagnostics, fallbackRange);
          return { value: result.value, diagnostics };
        }
        return result;
      };
      return enhance({ ...meta, disallowTemplates: true }, noTemplateBase);
    };
    target.accepts = (kinds) => {
      const clone = Object.create(base);
      clone.__accepts = [...kinds];
      return enhance(meta, clone);
    };
    target.allowedNamespaces = (namespaces) => withConstraint({ allowedNamespaces: namespaces });
    target.resolvedType = (type) => withConstraint({ resolvedType: type });
    target.crossBlockReferenceable = () => withMeta({ crossBlockReferenceable: true });
    target.pick = (keys) => {
      if ("pick" in base && typeof base.pick === "function") {
        return enhance(meta, base.pick(keys));
      }
      throw new Error("Base type does not support pick()");
    };
    const baseAny = base;
    for (const method of [
      "extend",
      "omit",
      "withProperties",
      "extendProperties",
      "withKeyPattern"
    ]) {
      const orig = baseAny[method];
      if (typeof orig === "function") {
        target[method] = (...args) => {
          const applied = orig.apply(base, args);
          return enhance(meta, applied);
        };
      } else {
        target[method] = () => {
          throw new Error(`Base type does not support ${method}()`);
        };
      }
    }
    target.clone = () => enhance({ ...meta }, base);
    if (cats.includes("number")) {
      target.min = (v) => {
        assertFiniteNumber(v, "min");
        return withConstraint({ minimum: v });
      };
      target.max = (v) => {
        assertFiniteNumber(v, "max");
        return withConstraint({ maximum: v });
      };
      target.exclusiveMin = (v) => {
        assertFiniteNumber(v, "exclusiveMin");
        return withConstraint({ exclusiveMinimum: v });
      };
      target.exclusiveMax = (v) => {
        assertFiniteNumber(v, "exclusiveMax");
        return withConstraint({ exclusiveMaximum: v });
      };
      target.multipleOf = (v) => {
        assertPositiveNumber(v, "multipleOf");
        return withConstraint({ multipleOf: v });
      };
    }
    if (cats.includes("string")) {
      target.minLength = (v) => {
        assertNonNegativeInteger(v, "minLength");
        return withConstraint({ minLength: v });
      };
      target.maxLength = (v) => {
        assertNonNegativeInteger(v, "maxLength");
        return withConstraint({ maxLength: v });
      };
      target.pattern = (regex) => withConstraint({
        pattern: regex instanceof RegExp ? regex.source : regex
      });
    }
    if (cats.includes("generic")) {
      target.enum = (values) => withConstraint({ enum: values });
      target.const = (value) => withConstraint({ const: value });
    }
    if (cats.includes("sequence")) {
      target.minItems = (v) => {
        assertNonNegativeInteger(v, "minItems");
        return withConstraint({ minItems: v });
      };
      target.maxItems = (v) => {
        assertNonNegativeInteger(v, "maxItems");
        return withConstraint({ maxItems: v });
      };
    }
  }
  function enhance(meta, base = fieldType) {
    const builder = new FieldBuilder(base, meta, cats.length > 0 ? cats : void 0);
    populateMethods(builder, meta, base);
    return builder;
  }
  populateMethods(fieldType, {}, fieldType);
  return fieldType;
}

// ../language/dist/core/primitives-constants.js
var AGENTSCRIPT_PRIMITIVE_TYPES = [
  {
    keyword: "string",
    description: "A text value, such as a name, message, or ID."
  },
  {
    keyword: "number",
    description: "A numeric value that can include decimals (e.g., 3.14)."
  },
  { keyword: "boolean", description: "A True or False value." },
  {
    keyword: "object",
    description: "A collection of named values (key-value pairs)."
  },
  { keyword: "currency", description: "A monetary amount." },
  {
    keyword: "date",
    description: "A calendar date without a time (e.g., 2025-03-15)."
  },
  {
    keyword: "datetime",
    description: "A date and time with timezone (e.g., 2025-03-15T10:30:00Z)."
  },
  {
    keyword: "time",
    description: "A time of day without a date (e.g., 14:30)."
  },
  {
    keyword: "timestamp",
    description: "A point in time represented as a Unix epoch value."
  },
  { keyword: "id", description: "A unique record identifier." },
  {
    keyword: "integer",
    description: "A whole number with no decimal part (e.g., 42)."
  },
  {
    keyword: "long",
    description: "A large whole number for values that may exceed normal integer range."
  }
];
var VARIABLE_MODIFIERS = [
  {
    keyword: "mutable",
    description: "A variable that can be changed during the conversation. Use `set` to update its value."
  },
  {
    keyword: "linked",
    description: "A variable whose value comes from an external system (e.g., a CRM record). Cannot be changed directly."
  }
];
var ALLOWED_STRING_VALUE_KINDS = /* @__PURE__ */ new Set([
  "StringLiteral",
  "TemplateExpression"
]);
var STRING_VALUE_DEFAULT = Array.from(ALLOWED_STRING_VALUE_KINDS);

// ../language/dist/core/primitives.js
function withCstGuard(expr, node) {
  if (expr.__cst) {
    return expr;
  }
  return withCst(expr, node);
}
function validateExpression(node, dialect, accepts) {
  if (node.type === "template" && accepts.includes("TemplateExpression")) {
    return {
      expr: TemplateExpression.parse(node, (n) => dialect.parseExpression(n)),
      diagnostics: []
    };
  }
  const expr = dialect.parseExpression(node);
  const acceptsSet = new Set(accepts);
  if (!acceptsSet.has(expr.__kind)) {
    const expected = accepts.map((k) => KIND_LABELS.get(k) ?? k).join(" or ");
    return {
      expr: withCstGuard(expr, node),
      diagnostics: [
        typeMismatchDiagnostic(toRange(node), `Expected ${expected}, got ${expr.__describe()}`, accepts.join(" | "), expr.__kind)
      ]
    };
  }
  return { expr: withCstGuard(expr, node), diagnostics: [] };
}
var _stringValueFieldType = {
  __fieldKind: "Primitive",
  __accepts: [...STRING_VALUE_DEFAULT],
  parse(node, dialect) {
    const acceptsArr = this.__accepts ?? STRING_VALUE_DEFAULT;
    const allowedSet = ALLOWED_STRING_VALUE_KINDS;
    const accepted = acceptsArr.filter((el) => allowedSet.has(el));
    const { expr, diagnostics } = validateExpression(node, dialect, accepted);
    if (diagnostics.length > 0) {
      return parseResult(withCst(new StringLiteral(""), node), diagnostics);
    }
    return parseResult(expr, []);
  },
  emit: (value, ctx) => value.__emit(ctx)
};
var StringValue = addBuilderMethods(_stringValueFieldType, [
  "string",
  "generic"
]);
var NumberValueNode = class _NumberValueNode extends AstNodeBase {
  value;
  static __fieldKind = "Primitive";
  static __accepts = ["NumberLiteral"];
  __kind = "NumberValue";
  constructor(value) {
    super();
    this.value = value;
  }
  __emit(_ctx) {
    return String(this.value);
  }
  static parse(node, dialect) {
    const { expr, diagnostics } = validateExpression(node, dialect, [
      "NumberLiteral"
    ]);
    if (diagnostics.length > 0) {
      return parseResult(withCst(new _NumberValueNode(0), node), diagnostics);
    }
    const numValue = expr instanceof NumberLiteral ? expr.value : 0;
    return parseResult(withCst(new _NumberValueNode(numValue), node), []);
  }
  static emit(value, ctx) {
    return value.__emit(ctx);
  }
};
var NumberValue = addBuilderMethods(NumberValueNode, [
  "number",
  "generic"
]);
var BooleanValueNode = class _BooleanValueNode extends AstNodeBase {
  value;
  static __fieldKind = "Primitive";
  static __accepts = ["BooleanLiteral"];
  __kind = "BooleanValue";
  constructor(value) {
    super();
    this.value = value;
  }
  __emit(_ctx) {
    return this.value ? "True" : "False";
  }
  static parse(node, dialect) {
    const { expr, diagnostics } = validateExpression(node, dialect, [
      "BooleanLiteral"
    ]);
    if (diagnostics.length > 0) {
      if (expr instanceof StringLiteral) {
        const upper = expr.value.toUpperCase();
        if (upper === "TRUE" || upper === "FALSE") {
          return parseResult(withCst(new _BooleanValueNode(upper === "TRUE"), node), []);
        }
      }
      return parseResult(withCst(new _BooleanValueNode(false), node), diagnostics);
    }
    const boolValue = expr instanceof BooleanLiteral ? expr.value : false;
    return parseResult(withCst(new _BooleanValueNode(boolValue), node), []);
  }
  static emit(value, ctx) {
    return value.__emit(ctx);
  }
};
var BooleanValue = addBuilderMethods(BooleanValueNode, ["generic"]);
var ProcedureValueNode = class _ProcedureValueNode extends AstNodeBase {
  statements;
  static __fieldKind = "Primitive";
  __kind = "ProcedureValue";
  constructor(statements) {
    super();
    this.statements = statements;
  }
  __emit(ctx) {
    return this.statements.map((statement) => wrapWithComments(statement.__emit(ctx), statement, ctx)).join("\n");
  }
  static parse(node, dialect) {
    const validTypes = /* @__PURE__ */ new Set(["procedure", "mapping", "template"]);
    const dc = new DiagnosticCollector();
    if (!validTypes.has(node.type)) {
      dc.add(createDiagnostic(node, `Expected procedure (->) or template (|) syntax, got '${node.text}'`, DiagnosticSeverity.Error, "invalid-procedure-value"));
    }
    const statements = dialect.parseProcedure(node);
    return parseResult(withCst(new _ProcedureValueNode(statements), node), dc.all);
  }
  static emit(value, ctx) {
    return value.__emit(ctx);
  }
  static emitField(key, value, ctx) {
    const indent = emitIndent(ctx);
    if (value.statements.length === 1 && value.statements[0].__kind === "Template") {
      const cstType = value.__cst?.node?.type;
      if (cstType === "template") {
        const raw = value.statements[0].__emit({ ...ctx, indent: 0 });
        const lines = raw.split("\n");
        const childIndent = emitIndent({ ...ctx, indent: ctx.indent + 1 });
        const reindented = lines.map((line, i) => {
          if (i === 0)
            return line;
          if (line.trim().length === 0)
            return "";
          return `${childIndent}${line}`;
        }).join("\n");
        return `${indent}${key}: ${reindented}`;
      }
      if (cstType === "mapping") {
        const childCtx2 = { ...ctx, indent: ctx.indent + 1 };
        return `${indent}${key}:
${value.statements[0].__emit(childCtx2)}`;
      }
    }
    const childCtx = { ...ctx, indent: ctx.indent + 1 };
    const body = value.__emit(childCtx);
    if (!body)
      return `${indent}${key}: ->`;
    return `${indent}${key}: ->
${body}`;
  }
};
var ProcedureValue = addBuilderMethods(ProcedureValueNode);
var ExpressionValue = addBuilderMethods({
  __fieldKind: "Primitive",
  parse: (node, dialect) => {
    const expr = dialect.parseExpression(node);
    const parsed = expr.__cst ? expr : withCst(expr, node);
    return parseResult(parsed, []);
  },
  emit: (value, ctx) => {
    if (value == null)
      return "";
    return value.__emit(ctx);
  }
});
var ReferenceValue = addBuilderMethods({
  __fieldKind: "Primitive",
  __accepts: ["MemberExpression"],
  parse: (node, dialect) => {
    const { expr, diagnostics } = validateExpression(node, dialect, [
      "MemberExpression"
    ]);
    if (diagnostics.length > 0) {
      return parseResult(withCst(new MemberExpression(new AtIdentifier(""), ""), node), diagnostics);
    }
    if (expr instanceof MemberExpression && expr.__cst) {
      return parseResult(expr, []);
    }
    return parseResult(withCst(new MemberExpression(new AtIdentifier(""), ""), node), []);
  },
  emit: (value, ctx) => value.__emit(ctx)
});
function union(...types) {
  const expressionKindSet = EXPRESSION_KINDS;
  const allAccepts = [...new Set(types.flatMap((t) => t.__accepts ?? []))];
  const accepts = allAccepts.filter((k) => expressionKindSet.has(k));
  return {
    __fieldKind: "Primitive",
    __accepts: accepts,
    parse: (node, dialect) => {
      const { expr, diagnostics } = validateExpression(node, dialect, accepts);
      return parseResult(expr, diagnostics);
    },
    emit: (value, ctx) => value.__emit(ctx)
  };
}

// ../language/dist/core/sequence.js
var SequenceNode = class extends AstNodeBase {
  __kind = "Sequence";
  __children = [];
  get items() {
    const result = [];
    for (const c of this.__children) {
      if (c instanceof SequenceItemChild) {
        result.push(c.value);
      }
    }
    return result;
  }
  set items(newItems) {
    this.__children = newItems.map((item) => new SequenceItemChild(item));
  }
  constructor(items) {
    super();
    if (items) {
      this.__children = items.map((item) => new SequenceItemChild(item));
    }
  }
  __emit(ctx) {
    return emitChildren(this.__children, ctx);
  }
};
function collectMappingElements(child) {
  const elements = [];
  const colinearME = child.childForFieldName("colinear_mapping_element");
  if (colinearME)
    elements.push(colinearME);
  const blockValue = child.childForFieldName("block_value");
  if (blockValue) {
    for (const bvChild of blockValue.namedChildren) {
      if (bvChild.type === "mapping_element")
        elements.push(bvChild);
    }
  }
  return elements;
}
function hasMappingContent(child) {
  return !!(child.childForFieldName("colinear_mapping_element") || child.childForFieldName("block_value"));
}
function createSequenceFieldType(blockType) {
  const fieldType = {
    __fieldKind: "Sequence",
    schema: blockType?.schema,
    parse(node, dialect) {
      const items = [];
      const dc = new DiagnosticCollector();
      for (const child of node.namedChildren) {
        if (child.type !== "sequence_element")
          continue;
        if (hasMappingContent(child)) {
          if (blockType) {
            const allElements = collectMappingElements(child);
            const result = dialect.parseMappingElements(allElements, blockType.schema, child);
            const { fields, children } = extractChildren(result.value);
            const blockResult = blockType.fromParsedFields(
              // SAFETY: fields parsed against blockType.schema, structurally matches InferFields<T>
              fields,
              child,
              result.diagnostics,
              children
            );
            items.push(blockResult.value);
            dc.merge(result);
          } else {
            dc.add(createDiagnostic(child, 'Mapping elements are not supported in expression-only sequences. Use simple values (e.g., - "value").', DiagnosticSeverity.Error, "invalid-sequence-element"));
            const cv = child.childForFieldName("colinear_value");
            if (cv) {
              items.push(dialect.parseExpression(cv));
            }
          }
          continue;
        }
        const colinearValue = child.childForFieldName("colinear_value");
        if (colinearValue) {
          items.push(dialect.parseExpression(colinearValue));
        }
      }
      return parseResult(withCst(new SequenceNode(items), node), dc.all);
    },
    emit(value, ctx) {
      return value.__emit(ctx);
    },
    emitField(key, value, ctx) {
      const indent = emitIndent(ctx);
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      return `${indent}${key}:
${value.__emit(childCtx)}`;
    }
  };
  return addBuilderMethods(fieldType, ["sequence"]);
}
function Sequence(blockType) {
  return createSequenceFieldType(blockType);
}
function ExpressionSequence() {
  return createSequenceFieldType();
}

// ../language/dist/core/named-map.js
var BlockBase = class {
  __symbol;
  /** @internal See {@link BlockCore.__children}. */
  __children = [];
  __diagnostics = [];
  __cst;
  __comments;
};
function collectionLabel(key) {
  return `${key}Collection`;
}
var NamedMap = class _NamedMap {
  /** @internal Brand for `isNamedMap` type guard. */
  [NAMED_MAP_BRAND] = true;
  __kind;
  __symbol;
  __children = [];
  __diagnostics = [];
  __cst;
  __comments;
  /** @internal Lazily-derived O(1) lookup index — keys → MapEntryChild. */
  _mapIndex = new MapIndex();
  /** Create a NamedMap with the canonical collection label for the given key. */
  static forCollection(key, options) {
    return new _NamedMap(collectionLabel(key), options);
  }
  constructor(kind, options) {
    this.__kind = kind;
    this.__symbol = options?.symbol;
    if (options?.entries) {
      for (const [key, value] of options.entries) {
        this.set(key, value);
      }
    }
  }
  get size() {
    return this._mapIndex.ensure(this.__children).size;
  }
  get(key) {
    return this._mapIndex.ensure(this.__children).get(key)?.value;
  }
  has(key) {
    return this._mapIndex.ensure(this.__children).has(key);
  }
  set(key, value) {
    const index = this._mapIndex.ensure(this.__children);
    const existing = index.get(key);
    if (existing) {
      existing.value = value;
    } else {
      const child = new MapEntryChild(key, value);
      this.__children.push(child);
    }
    return this;
  }
  delete(key) {
    const index = this._mapIndex.ensure(this.__children);
    const entry = index.get(key);
    if (!entry)
      return false;
    const idx2 = this.__children.indexOf(entry);
    if (idx2 !== -1)
      this.__children.splice(idx2, 1);
    return true;
  }
  clear() {
    this.__children = [];
  }
  // __children is the authoritative ordered list — iteration always follows
  // CST insertion order, not the _index Map. The _index is only for O(1) lookups.
  *_entries() {
    for (const child of this.__children) {
      if (child instanceof MapEntryChild) {
        yield child;
      }
    }
  }
  *entries() {
    for (const entry of this._entries()) {
      yield [entry.name, entry.value];
    }
  }
  *keys() {
    for (const entry of this._entries()) {
      yield entry.name;
    }
  }
  *values() {
    for (const entry of this._entries()) {
      yield entry.value;
    }
  }
  forEach(callbackfn) {
    for (const entry of this._entries()) {
      callbackfn(entry.value, entry.name, this);
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  toJSON() {
    const obj = {};
    for (const [k, v] of this) {
      obj[k] = v;
    }
    return obj;
  }
  __emit(ctx) {
    return emitChildren(this.__children, ctx);
  }
};

// ../language/dist/core/typed-declarations.js
var TypedDeclarationBase = class extends AstNodeBase {
  type;
  defaultValue;
  properties;
  __children = [];
  constructor(data) {
    super();
    this.type = data.type;
    this.defaultValue = data.defaultValue;
    this.properties = data.properties;
  }
};
var VariableDeclarationNode = class extends TypedDeclarationBase {
  __kind = "VariableDeclaration";
  __symbol = {
    kind: SymbolKind.Variable,
    noRecurse: true
  };
  modifier;
  constructor(data) {
    super(data);
    this.modifier = data.modifier;
  }
};
var ParameterDeclarationNode = class extends TypedDeclarationBase {
  __kind = "ParameterDeclaration";
  __symbol = { kind: SymbolKind.Field, noRecurse: true };
  constructor(data) {
    super(data);
  }
};

// ../language/dist/core/factory-utils.js
function overrideFactoryBuilderMethods(factory) {
  const f = factory;
  const applyMeta = (updates) => {
    f.__metadata = {
      ...f.__metadata,
      ...updates
    };
    return f;
  };
  f.describe = (desc) => applyMeta({ description: desc });
  f.example = (ex) => applyMeta({ example: ex });
  f.required = () => applyMeta({ required: true });
  f.minVersion = (v) => applyMeta({ minVersion: v });
  f.deprecated = (msg, opts) => applyMeta({ deprecated: { message: msg, ...opts } });
  f.experimental = () => applyMeta({ experimental: true });
  f.crossBlockReferenceable = () => applyMeta({ crossBlockReferenceable: true });
  f.singular = () => applyMeta({ singular: true });
  f.clone = () => {
    const cloneFn = f.__clone;
    if (typeof cloneFn !== "function") {
      throw new Error("Factory does not support clone()");
    }
    const result = cloneFn();
    if (f.__metadata) {
      result.__metadata = { ...f.__metadata };
    }
    return result;
  };
  for (const method of [
    "extend",
    "omit",
    "pick",
    "withProperties",
    "extendProperties",
    "withKeyPattern"
  ]) {
    const orig = f[method];
    if (typeof orig !== "function")
      continue;
    f[method] = (...args) => {
      const result = orig.apply(f, args);
      if (result != null && f.__metadata) {
        const r = result;
        r.__metadata = {
          ...f.__metadata,
          ...r.__metadata
        };
      }
      return result;
    };
  }
}
function stripDiscriminantIfMissing(newSchema, opts) {
  if (opts?.discriminant && !(opts.discriminant in newSchema)) {
    const { discriminant: _discriminant, variants: _variants, ...rest } = opts;
    return rest;
  }
  return opts;
}
function normalizeSchema(schema) {
  const result = {};
  for (const [key, value] of Object.entries(schema)) {
    result[key] = Array.isArray(value) ? union(...value) : value;
  }
  return result;
}
function validateSchemaFields(schema) {
  for (const key of Object.keys(schema)) {
    if (key.startsWith("__")) {
      throw new Error(`Field name '${key}' is invalid - field names cannot start with '__' (reserved for internal properties)`);
    }
  }
}

// ../language/dist/core/block-factory.js
function Block(kind, inputSchema, options) {
  const rawSchema = inputSchema ?? {};
  const normalizedSchema = normalizeSchema(rawSchema);
  if (options?.wildcardPrefixes?.length) {
    attachWildcardPrefixes(normalizedSchema, options.wildcardPrefixes);
  }
  const schema = Object.freeze(normalizedSchema);
  validateSchemaFields(schema);
  const discriminantField = options?.discriminant;
  const rawVariantsBlock = options?.variants;
  let discriminantConfig;
  let blockVariants;
  if (discriminantField) {
    if (!schema[discriminantField]) {
      throw new Error(`Block '${kind}': discriminant field '${discriminantField}' not found in base schema`);
    }
    if (rawVariantsBlock && Object.keys(rawVariantsBlock).length > 0) {
      blockVariants = Object.fromEntries(Object.entries(rawVariantsBlock).map(([name, variantSchema]) => {
        const merged = Object.freeze({
          ...schema,
          ...normalizeSchema(variantSchema)
        });
        validateSchemaFields(merged);
        return [name, merged];
      }));
      discriminantConfig = {
        field: discriminantField,
        variants: blockVariants,
        validValues: Object.keys(blockVariants)
      };
    }
  }
  const symbol = options?.symbol ?? { kind: SymbolKind.Object };
  class BlockNode extends BlockBase {
    static __fieldKind = "Block";
    __kind = kind;
    __symbol = symbol;
    static kind = kind;
    static schema = schema;
    static isNamed = false;
    static capabilities = options?.capabilities;
    constructor(fields, parseChildren) {
      super();
      this.__children = initChildren(this, parseChildren, fields, schema);
    }
    static fromParsedFields(fields, cstNode, diagnostics, children, ownDiagnostics) {
      const instance = new BlockNode(fields, children);
      const parsed = withCst(instance, cstNode);
      parsed.__diagnostics = ownDiagnostics ?? diagnostics;
      return parseResult(parsed, diagnostics);
    }
    static parse(node, dialect, extraElements) {
      const result = dialect.parseMapping(node, schema, extraElements, {
        discriminant: discriminantConfig
      });
      const ownDiags = result.value.__diagnostics;
      const { fields, children } = extractChildren(result.value);
      return BlockNode.fromParsedFields(fields, node, result.diagnostics, children, ownDiags);
    }
    static emit(value, ctx) {
      return value.__emit(ctx);
    }
    static emitField(key, value, ctx) {
      const indent = emitIndent(ctx);
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body = value.__emit(childCtx);
      return body ? `${indent}${key}:
${body}` : `${indent}${key}:`;
    }
    __emit(ctx) {
      return emitChildren(this.__children, ctx);
    }
  }
  const base = addBuilderMethods(BlockNode);
  if (options?.description) {
    Object.defineProperty(base, "__metadata", {
      value: { description: options.description },
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  Object.defineProperty(base, "extend", {
    value: (additionalFields, overrideOptions) => {
      const mergedOpts = overrideOptions ? { ...options, ...overrideOptions } : options;
      return Block(kind, { ...schema, ...additionalFields }, mergedOpts);
    },
    writable: true,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(base, "omit", {
    value: (...keys) => {
      const remaining = { ...schema };
      for (const k of keys)
        delete remaining[k];
      return Block(kind, remaining, stripDiscriminantIfMissing(remaining, options));
    },
    writable: true,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(base, "pick", {
    value: (keys) => {
      const picked = {};
      const nested = /* @__PURE__ */ new Map();
      for (const key of keys) {
        const dotIdx = key.indexOf(".");
        if (dotIdx === -1) {
          if (key in schema)
            picked[key] = schema[key];
        } else {
          const first = key.slice(0, dotIdx);
          const rest = key.slice(dotIdx + 1);
          if (!nested.has(first))
            nested.set(first, []);
          nested.get(first).push(rest);
        }
      }
      for (const [first, restKeys] of nested) {
        const field = schema[first];
        if (field && "pick" in field && typeof field.pick === "function") {
          picked[first] = field.pick(restKeys);
        }
      }
      return Block(kind, picked, stripDiscriminantIfMissing(picked, options));
    },
    writable: true,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(base, "__clone", {
    value: () => Block(kind, { ...schema }, options),
    writable: true,
    configurable: true,
    enumerable: true
  });
  const dp = (key, value) => Object.defineProperty(base, key, {
    value,
    writable: true,
    configurable: true,
    enumerable: true
  });
  dp("discriminantField", discriminantField);
  dp("resolveSchemaForDiscriminant", (value) => blockVariants?.[value] ?? schema);
  dp("discriminant", (fieldName) => {
    return Block(kind, inputSchema ?? {}, {
      ...options,
      discriminant: fieldName
    });
  });
  dp("variant", (name, variantSchema) => {
    const currentVariants = options?.variants ?? {};
    const newVariants = { ...currentVariants, [name]: variantSchema };
    return Block(kind, inputSchema ?? {}, {
      ...options,
      variants: newVariants
    });
  });
  overrideFactoryBuilderMethods(base);
  return base;
}

// ../language/dist/core/named-block-factory.js
function NamedBlock(kind, inputSchema, opts) {
  const rawSchema = inputSchema ?? {};
  const schema = Object.freeze(normalizeSchema(rawSchema));
  validateSchemaFields(schema);
  const colinear = opts?.colinear;
  const body = opts?.body;
  const symbol = opts?.symbol ?? { kind: SymbolKind.Class };
  const scopeLevel = opts?.scopeAlias;
  const rawVariants = opts?.variants;
  const variants = rawVariants ? Object.fromEntries(Object.entries(rawVariants).map(([name, variantSchema]) => {
    const merged = Object.freeze({
      ...schema,
      ...normalizeSchema(variantSchema)
    });
    validateSchemaFields(merged);
    return [name, merged];
  })) : void 0;
  const validVariantNames = variants ? Object.keys(variants) : void 0;
  const discriminantField = opts?.discriminant;
  let namedDiscriminantConfig;
  if (discriminantField) {
    if (!schema[discriminantField]) {
      throw new Error(`NamedBlock '${kind}': discriminant field '${discriminantField}' not found in base schema`);
    }
    if (variants && Object.keys(variants).length > 0) {
      namedDiscriminantConfig = {
        field: discriminantField,
        variants,
        validValues: validVariantNames
      };
    }
  }
  function resolveVariant(name, cstNode) {
    if (namedDiscriminantConfig) {
      return {
        effectiveSchema: schema,
        discriminantConfig: namedDiscriminantConfig,
        earlyDiagnostics: []
      };
    }
    if (!variants) {
      return {
        effectiveSchema: schema,
        discriminantConfig: void 0,
        earlyDiagnostics: []
      };
    }
    const variantSchema = variants[name];
    if (variantSchema) {
      return {
        effectiveSchema: variantSchema,
        discriminantConfig: void 0,
        earlyDiagnostics: []
      };
    }
    return {
      effectiveSchema: schema,
      discriminantConfig: void 0,
      earlyDiagnostics: [
        createDiagnostic(cstNode, `Unknown variant '${name}'. Valid variants: ${validVariantNames.join(", ")}`, DiagnosticSeverity.Error, "unknown-variant")
      ]
    };
  }
  class NamedBlockNode extends BlockBase {
    __kind = kind;
    __symbol = symbol;
    __name;
    __scope = scopeLevel;
    /** @internal Direct reference to the ValueChild, avoiding linear scan. Non-enumerable. */
    _valueChild;
    /** Colinear expression (e.g., `@actions.send_email`). Backed by __children. */
    get value() {
      return this._valueChild?.value;
    }
    set value(val) {
      if (this._valueChild) {
        this._valueChild.value = val;
      } else {
        const vc = new ValueChild(val);
        this._valueChild = vc;
        this.__children.unshift(vc);
      }
    }
    /** Procedure statements (with/set/to clauses, body). Backed by __children. */
    get statements() {
      const stmts = [];
      for (const c of this.__children) {
        if (c instanceof StatementChild) {
          stmts.push(c.value);
        }
      }
      return stmts.length > 0 ? stmts : void 0;
    }
    set statements(stmts) {
      this.__children = this.__children.filter((c) => c.__type !== "statement");
      if (stmts) {
        for (const s of stmts) {
          this.__children.push(new StatementChild(s));
        }
      }
    }
    static kind = kind;
    static schema = schema;
    static isNamed = true;
    static allowAnonymous = opts?.allowAnonymous ?? false;
    static scopeAlias = scopeLevel;
    static colinearType = colinear;
    static hasColinear = !!colinear;
    static hasBody = !!body;
    static capabilities = opts?.capabilities;
    constructor(name, fields, parseChildren) {
      super();
      Object.defineProperty(this, "_valueChild", {
        value: void 0,
        writable: true,
        enumerable: false,
        configurable: true
      });
      this.__name = name;
      this.__children = initChildren(this, parseChildren, fields, schema);
    }
    static fromParsedFields(name, fields, cstNode, diagnostics, children, ownDiagnostics) {
      const instance = new NamedBlockNode(name, fields, children);
      const parsed = withCst(instance, cstNode);
      parsed.__diagnostics = ownDiagnostics ?? diagnostics;
      return parseResult(parsed, diagnostics);
    }
    static parse(node, name, dialect, adoptedSiblings) {
      if (colinear || body) {
        return NamedBlockNode.parseColinear(node, name, dialect, adoptedSiblings);
      }
      return NamedBlockNode.parseMapping(node, name, dialect, adoptedSiblings);
    }
    static parseMapping(node, name, dialect, adoptedSiblings) {
      const { effectiveSchema, discriminantConfig, earlyDiagnostics } = resolveVariant(name, node);
      if (earlyDiagnostics.length > 0) {
        return NamedBlockNode.fromParsedFields(name, {}, node, earlyDiagnostics);
      }
      const result = dialect.parseMapping(node, effectiveSchema, adoptedSiblings, discriminantConfig ? { discriminant: discriminantConfig } : void 0);
      const ownDiags = result.value.__diagnostics;
      const { fields, children } = extractChildren(result.value);
      return NamedBlockNode.fromParsedFields(name, fields, node, result.diagnostics, children, ownDiags);
    }
    static parseColinear(node, name, dialect, adoptedSiblings) {
      const { effectiveSchema, discriminantConfig, earlyDiagnostics } = resolveVariant(name, node);
      if (earlyDiagnostics.length > 0) {
        return NamedBlockNode.fromParsedFields(name, {}, node, earlyDiagnostics);
      }
      const parentNode = node.parent;
      const colinearNode = parentNode?.childForFieldName("colinear_value") ?? parentNode?.childForFieldName("expression");
      const bodyNode = parentNode?.childForFieldName("block_value") ?? parentNode?.childForFieldName("procedure");
      const dc = new DiagnosticCollector();
      let colinearValue;
      if (colinear && colinearNode) {
        const exprNode = colinearNode.childForFieldName("expression") ?? colinearNode;
        const colinearResult = colinear.parse(exprNode, dialect);
        colinearValue = colinearResult.value;
        dc.merge(colinearResult);
      }
      let statements;
      let mappingFields = {};
      let bodyChildren;
      let bodyOwnDiags = [];
      const discOpt = discriminantConfig ? { discriminant: discriminantConfig } : void 0;
      if (bodyNode) {
        const content = dialect.parseBlockContent(bodyNode, effectiveSchema, discOpt);
        const extracted = extractChildren(content.fields);
        mappingFields = extracted.fields;
        bodyChildren = extracted.children;
        if (content.statements.length > 0)
          statements = content.statements;
        dc.mergeAll(content.diagnostics);
        bodyOwnDiags = content.fields.__diagnostics ?? [];
      } else if (adoptedSiblings && adoptedSiblings.length > 0) {
        const adoptedResult = dialect.parseMappingElements(adoptedSiblings, effectiveSchema, node, discriminantConfig);
        const extracted = extractChildren(adoptedResult.value);
        mappingFields = extracted.fields;
        bodyChildren = extracted.children;
        dc.merge(adoptedResult);
        bodyOwnDiags = adoptedResult.value.__diagnostics ?? [];
        const adoptedStatements = dialect.parseStatementNodes(adoptedSiblings);
        if (adoptedStatements.length > 0) {
          statements = [...statements ?? [], ...adoptedStatements];
        }
      }
      const extraNodes = [
        ...colinearNode?.childForFieldName("with_to_statement_list")?.namedChildren ?? [],
        ...parentNode?.children.filter((c) => c.type === "ERROR").flatMap((c) => c.namedChildren) ?? []
      ];
      if (extraNodes.length > 0) {
        const posKey = (n) => `${n.startRow}:${n.startCol}-${n.endRow}:${n.endCol}`;
        const bodyPositions = new Set((statements ?? []).filter((s) => s.__cst?.node).map((s) => posKey(s.__cst.node)));
        const extraStatements = dialect.parseStatementNodes(extraNodes).filter((s) => {
          if (!s.__cst?.node)
            return true;
          return !bodyPositions.has(posKey(s.__cst.node));
        });
        if (extraStatements.length > 0) {
          statements = [...statements ?? [], ...extraStatements];
        }
      }
      const instance = new NamedBlockNode(name, mappingFields, bodyChildren);
      if (colinearValue !== void 0)
        instance.value = colinearValue;
      if (statements)
        instance.statements = statements;
      const parsed = withCst(instance, node);
      parsed.__diagnostics = bodyOwnDiags;
      return parseResult(parsed, dc.all);
    }
    __emit(ctx) {
      if (colinear && this.value != null) {
        return this.emitColinear(ctx);
      }
      return this.emitAsEntry(ctx);
    }
    /** Emit as a top-level entry with schema key prefix (e.g., `topic main:`). */
    emitWithKey(schemaKey, ctx) {
      const indent = emitIndent(ctx);
      const header = `${indent}${schemaKey} ${emitKeyName(this.__name)}:`;
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body2 = emitChildren(this.__children, childCtx);
      return body2 ? `${header}
${body2}` : header;
    }
    /** Emit as a nested entry with just the name (e.g., `fetch_data:` inside `actions:`). */
    emitAsEntry(ctx) {
      const indent = emitIndent(ctx);
      const header = `${indent}${emitKeyName(this.__name)}:`;
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body2 = emitChildren(this.__children, childCtx);
      return body2 ? `${header}
${body2}` : header;
    }
    static emit(value, ctx) {
      return value.__emit(ctx);
    }
    static emitField(key, value, ctx) {
      if (!value.__children || value.__children.length === 0) {
        if (value.__cst) {
          return `${emitIndent(ctx)}${key}:`;
        }
        return "";
      }
      const indent = emitIndent(ctx);
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body2 = emitChildren(value.__children, childCtx);
      if (!body2)
        return "";
      return `${indent}${key}:
${body2}`;
    }
    emitColinear(ctx) {
      const indent = emitIndent(ctx);
      let out = `${indent}${emitKeyName(this.__name)}: ${colinear.emit(this.value, ctx)}`;
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const bodyParts = [];
      for (const child of this.__children) {
        if (child.__type === "value") {
          continue;
        }
        if (child instanceof StatementChild) {
          const stmt = child.value;
          if (stmt.__kind === "ToClause") {
            const val = this.value;
            const colinearRow = val instanceof AstNodeBase ? val.__cst?.node?.endPosition?.row : void 0;
            const toRow = stmt.__cst?.node?.startPosition?.row;
            if (colinearRow != null && toRow != null && toRow > colinearRow) {
              bodyParts.push(stmt.__emit(childCtx));
            } else {
              out += " " + stmt.__emit({ indent: 0 });
            }
          } else {
            bodyParts.push(stmt.__emit(childCtx));
          }
          continue;
        }
        const emitted = child.__emit(childCtx);
        if (emitted)
          bodyParts.push(emitted);
      }
      if (bodyParts.length > 0) {
        out += "\n" + bodyParts.join("\n");
      }
      return out;
    }
  }
  const base = addBuilderMethods(NamedBlockNode);
  const dp = (key, value) => Object.defineProperty(base, key, {
    value,
    writable: true,
    configurable: true,
    enumerable: true
  });
  if (opts?.description) {
    dp("__metadata", { description: opts.description });
  }
  dp("resolveSchemaForName", (name) => variants?.[name] ?? schema);
  if (variants) {
    dp("__variantNames", Object.keys(variants));
  }
  dp("extend", (additionalFields, overrideOpts) => {
    const mergedOpts = overrideOpts ? { ...opts, ...overrideOpts } : opts;
    return NamedBlock(kind, { ...schema, ...additionalFields }, mergedOpts);
  });
  dp("omit", (...keys) => {
    const remaining = { ...schema };
    for (const k of keys)
      delete remaining[k];
    return NamedBlock(kind, remaining, stripDiscriminantIfMissing(remaining, opts));
  });
  dp("pick", (keys) => {
    const picked = {};
    const nested = /* @__PURE__ */ new Map();
    for (const key of keys) {
      const dotIdx = key.indexOf(".");
      if (dotIdx === -1) {
        if (key in schema)
          picked[key] = schema[key];
      } else {
        const first = key.slice(0, dotIdx);
        const rest = key.slice(dotIdx + 1);
        if (!nested.has(first))
          nested.set(first, []);
        nested.get(first).push(rest);
      }
    }
    for (const [first, restKeys] of nested) {
      const field = schema[first];
      if (field && "pick" in field && typeof field.pick === "function") {
        picked[first] = field.pick(restKeys);
      }
    }
    return NamedBlock(kind, picked, stripDiscriminantIfMissing(picked, opts));
  });
  dp("variant", (name, variantSchema) => {
    const currentVariants = opts?.variants ?? {};
    const newVariants = { ...currentVariants, [name]: variantSchema };
    return NamedBlock(kind, inputSchema ?? {}, {
      ...opts,
      variants: newVariants
    });
  });
  dp("discriminant", (fieldName) => {
    return NamedBlock(kind, inputSchema ?? {}, {
      ...opts,
      discriminant: fieldName
    });
  });
  dp("discriminantField", discriminantField);
  dp("resolveSchemaForDiscriminant", (value) => variants?.[value] ?? schema);
  dp("__clone", () => NamedBlock(kind, { ...schema }, opts));
  overrideFactoryBuilderMethods(base);
  return base;
}

// ../language/dist/core/error-recovery.js
function detectSameRowSplit(elements, currentIndex, colinearNode, rawDeclType) {
  if (currentIndex + 1 >= elements.length)
    return void 0;
  const nextEl = elements[currentIndex + 1];
  const nextKeyNode = nextEl.childForFieldName("key");
  const nextKeyChildren = nextKeyNode?.namedChildren.filter(isKeyNode) ?? [];
  if (nextKeyChildren.length < 1 || nextKeyChildren[0].startRow !== colinearNode.startRow) {
    return void 0;
  }
  const errorPrefix = rawDeclType instanceof Identifier ? rawDeclType.name : colinearNode.text;
  const declType = withCst(new Identifier(getKeyText(nextKeyChildren[0])), nextKeyChildren[0]);
  return {
    errorPrefix,
    declType,
    mergedElement: nextEl,
    mergedKeyRemainder: nextKeyChildren.length >= 2 ? getKeyText(nextKeyChildren[1]) : void 0
  };
}
function captureErrorPrefix(element, colinearNode) {
  const errorParts = [];
  let firstErrorNode;
  const colinearRow = colinearNode.startRow;
  const colinearCol = colinearNode.startCol;
  for (const child of element.namedChildren) {
    if (child.type === "ERROR" && (child.startRow < colinearRow || child.startRow === colinearRow && child.startCol < colinearCol)) {
      errorParts.push(child.text);
      if (!firstErrorNode) {
        firstErrorNode = child;
      }
    }
  }
  return errorParts.length > 0 ? { text: errorParts.join(" "), errorNode: firstErrorNode } : void 0;
}
function detectInlineErrorSuffix(element, colinearNode, rawDeclType) {
  const colinearRow = colinearNode.startRow;
  const colinearCol = colinearNode.startCol;
  for (const child of element.namedChildren) {
    if (child.type === "ERROR" && child.startRow === colinearRow && child.startCol > colinearCol) {
      const firstId = child.namedChildren.find((c) => c.type === "id");
      const typeText = firstId ? firstId.text : child.text?.trim();
      if (!typeText)
        continue;
      const errorPrefix = rawDeclType instanceof Identifier ? rawDeclType.name : colinearNode.text;
      const typeNode = firstId ?? child;
      const declType = withCst(new Identifier(typeText), typeNode);
      return { errorPrefix, declType, errorNode: child };
    }
  }
  return void 0;
}
function errorBlockFromNode(node) {
  const text = node.text?.trim();
  if (!text)
    return void 0;
  return new ErrorBlock(node.text, node.startCol);
}
function mergeProperties(parsed, element, mergedElement, mergedKeyRemainder, propertiesBlock, dialect, dc) {
  let blockNode = element.childForFieldName("block_value");
  if (!blockNode) {
    blockNode = element.namedChildren.find((c) => c.type === "mapping") ?? null;
  }
  const mergedBlock = mergedElement.childForFieldName("block_value") ?? mergedElement.namedChildren.find((c) => c.type === "mapping") ?? null;
  const propBlockNode = blockNode ?? mergedBlock;
  if (propBlockNode) {
    if (!isSingularFieldType(propertiesBlock))
      return;
    const propResult = propertiesBlock.parse(propBlockNode, dialect);
    if (propResult.value && typeof propResult.value === "object") {
      parsed.properties = propResult.value;
      parsed.__children.push(new FieldChild("properties", propResult.value, propertiesBlock));
    }
    dc.merge(propResult);
  }
  if (mergedKeyRemainder && parsed.properties) {
    const mergedColinear = mergedElement.childForFieldName("colinear_value") ?? mergedElement.childForFieldName("expression");
    if (mergedColinear) {
      const exprNode = mergedColinear.childForFieldName("expression") ?? mergedColinear;
      const propValue = dialect.parseExpression(exprNode);
      const props = parsed.properties;
      const propSchema = propertiesBlock.schema;
      const rawFieldType = propSchema ? propSchema[mergedKeyRemainder] : void 0;
      const fieldType = (Array.isArray(rawFieldType) ? rawFieldType[0] : rawFieldType) ?? ExpressionValue;
      const children = props.__children;
      if (children) {
        const fc = new FieldChild(mergedKeyRemainder, propValue, fieldType);
        children.unshift(fc);
        defineFieldAccessors(props, [fc]);
      }
    }
  }
}

// ../language/dist/core/collection-block-factory.js
function CollectionBlock(entryBlock, opts) {
  const kind = `Collection<${entryBlock.kind}>`;
  class CollectionBlockNode extends NamedMap {
    static __fieldKind = "Collection";
    static kind = kind;
    static isNamed = false;
    static entryBlock = entryBlock;
    constructor(entries) {
      super(kind, { entries });
    }
    // -- Parsing --
    static parse(node, dialect) {
      const instance = new CollectionBlockNode();
      const dc = new DiagnosticCollector();
      let lastEntryValue;
      for (const child of node.children) {
        if (child.type === "comment")
          continue;
        if (child.type === "ERROR") {
          const errBlock = errorBlockFromNode(child);
          if (errBlock && lastEntryValue) {
            (lastEntryValue.__children ??= []).push(errBlock);
          }
          continue;
        }
        if (child.type !== "mapping_element")
          continue;
        const [typeId, nameId] = dialect.getKeyIds(child);
        const entryName = typeId;
        if (!entryName)
          continue;
        if (nameId !== void 0) {
          const keyNode = child.childForFieldName("key");
          dc.add(createDiagnostic(keyNode ?? child, `Composite key '${keyNode?.text ?? `${typeId} ${nameId}`}' is not allowed; expected a single name`, DiagnosticSeverity.Error, "composite-key"));
        }
        const { blockValue, colinearValue, procedure } = getValueNodes(child);
        const valueNode = blockValue ?? colinearValue ?? procedure ?? child;
        const result = entryBlock.parse(valueNode, entryName, dialect);
        if (instance.has(entryName)) {
          const keyNode = child.childForFieldName("key");
          const dupDiag = createDiagnostic(keyNode ?? child, `Duplicate key '${keyNode?.text ?? entryName}'`, DiagnosticSeverity.Warning, "duplicate-key");
          dc.add(dupDiag);
        }
        instance.set(entryName, result.value);
        lastEntryValue = result.value;
        dc.merge(result);
        const hasErrorChildren = child.children.some((c) => c.isError);
        if (hasErrorChildren) {
          const lastChild = instance.__children[instance.__children.length - 1];
          if (lastChild instanceof MapEntryChild) {
            attachElementText(lastChild, child);
          }
        }
      }
      instance.__diagnostics = dc.own;
      const parsed = withCst(instance, node);
      return parseResult(parsed, dc.all);
    }
    // -- Emission --
    static emit(value, ctx) {
      return value.__emit(ctx);
    }
    static emitField(key, value, ctx) {
      if (!value.__children || value.__children.length === 0) {
        if (value.__cst) {
          return `${emitIndent(ctx)}${key}:`;
        }
        return "";
      }
      const indent = emitIndent(ctx);
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body = emitChildren(value.__children, childCtx);
      if (!body)
        return "";
      return `${indent}${key}:
${body}`;
    }
  }
  const base = addBuilderMethods(CollectionBlockNode);
  const dp = (key, value) => Object.defineProperty(base, key, {
    value,
    writable: true,
    configurable: true,
    enumerable: true
  });
  const entryMeta = entryBlock.__metadata;
  const collectionMeta = {};
  if (entryMeta?.example)
    collectionMeta.example = entryMeta.example;
  if (entryMeta?.description)
    collectionMeta.description = entryMeta.description;
  if (opts?.description)
    collectionMeta.description = opts.description;
  if (Object.keys(collectionMeta).length > 0) {
    dp("__metadata", collectionMeta);
  }
  dp("schema", entryBlock.schema);
  dp("scopeAlias", entryBlock.scopeAlias);
  dp("capabilities", entryBlock.capabilities);
  dp("colinearType", entryBlock.colinearType);
  dp("__isCollection", true);
  dp("__clone", () => CollectionBlock(entryBlock, opts));
  overrideFactoryBuilderMethods(base);
  return base;
}
function NamedCollectionBlock(entryBlock, opts) {
  const base = CollectionBlock(entryBlock, opts);
  const dp = (key, value) => Object.defineProperty(base, key, {
    value,
    writable: true,
    configurable: true,
    enumerable: true
  });
  dp("__isNamedCollection", true);
  dp("__clone", () => NamedCollectionBlock(entryBlock, opts));
  overrideFactoryBuilderMethods(base);
  return base;
}

// ../language/dist/core/typed-map-factory.js
function TypedMap(kind, propertiesBlock, options = {}) {
  const modifiers = options.modifiers ?? [];
  const primitiveTypes = options.primitiveTypes ?? [];
  const hasModifier = modifiers.length > 0;
  const blockLabel = kind.replace(/Block$/, "").toLowerCase();
  const symbol = options.symbol ?? { kind: SymbolKind.Namespace };
  class TypedMapNode extends NamedMap {
    static __fieldKind = "TypedMap";
    static kind = kind;
    static isNamed = false;
    static __isTypedMap = true;
    static propertiesSchema = propertiesBlock.schema;
    static __modifiers = modifiers;
    static __primitiveTypes = primitiveTypes;
    static propertiesBlock = propertiesBlock;
    constructor(entries) {
      super(kind, { symbol, entries });
    }
    static emit(value, ctx) {
      return value.__emit(ctx);
    }
    static emitField(key, value, ctx) {
      const indent = emitIndent(ctx);
      const childCtx = { ...ctx, indent: ctx.indent + 1 };
      const body = value.__emit(childCtx);
      return body ? `${indent}${key}:
${body}` : `${indent}${key}:`;
    }
    static withProperties(newPropsBlock) {
      return TypedMap(kind, newPropsBlock, options);
    }
    static extendProperties(additionalFields) {
      if ("extend" in propertiesBlock && typeof propertiesBlock.extend === "function") {
        return TypedMap(kind, propertiesBlock.extend(additionalFields), options);
      }
      throw new Error(`Properties block for '${kind}' does not support extend(). Use withProperties() instead.`);
    }
    static withKeyPattern(pattern) {
      return TypedMap(kind, propertiesBlock, {
        ...options,
        keyPattern: pattern
      });
    }
    static parse(node, dialect) {
      const instance = new TypedMapNode();
      const dc = new DiagnosticCollector();
      let pendingComments = [];
      let lastParsed;
      const elements = [];
      for (const child of node.namedChildren) {
        if (child.type === "comment") {
          pendingComments.push(parseCommentNode(child, "leading"));
          continue;
        }
        if (child.type === "mapping_element") {
          elements.push({
            node: child,
            leadingComments: pendingComments
          });
          pendingComments = [];
          continue;
        }
        pendingComments = [];
      }
      const elementNodes = elements.map((entry) => entry.node);
      const skipIndices = /* @__PURE__ */ new Set();
      for (let i = 0; i < elements.length; i++) {
        if (skipIndices.has(i))
          continue;
        const elementEntry = elements[i];
        const element = elementEntry.node;
        const leadingComments2 = elementEntry.leadingComments;
        const keyNode = element.childForFieldName("key");
        const keyChildren = keyNode?.namedChildren.filter(isKeyNode) ?? [];
        const name = keyChildren[0] ? getKeyText(keyChildren[0]) : "";
        const inlineComments2 = element.namedChildren.filter((c) => c.type === "comment").map((c) => parseCommentNode(c, "inline"));
        if (keyChildren.length > 1) {
          const keyRange = keyNode ?? element;
          dc.add(createDiagnostic(keyRange, `Composite key '${keyRange.text?.replace(/:$/, "") ?? name}' is not allowed; expected a single name`, DiagnosticSeverity.Error, "composite-key"));
        }
        if (!name && keyChildren.length > 0) {
          const keyRange = keyNode ?? element;
          const emptyDiag = createDiagnostic(keyRange, "Empty field name is not allowed", DiagnosticSeverity.Error, "empty-field-name");
          dc.add(emptyDiag);
        }
        if (name && options.keyPattern) {
          try {
            const pattern = new RegExp(options.keyPattern);
            if (!pattern.test(name)) {
              const keyRange = keyChildren[0] ?? keyNode ?? element;
              dc.add(createDiagnostic(keyRange, `'${name}' does not match required pattern /${options.keyPattern}/`, DiagnosticSeverity.Error, "invalid-key-pattern"));
            }
          } catch {
          }
        }
        const colinearNode = element.childForFieldName("colinear_value") ?? element.childForFieldName("expression");
        if (colinearNode) {
          const rawDecl = dialect.parseVariableDeclaration(colinearNode);
          const reservedNames = [
            ...keywordNames(primitiveTypes),
            ...keywordNames(modifiers),
            "list"
          ];
          const isQuotedKey = keyChildren[0]?.type === "string";
          if (name && !isQuotedKey && reservedNames.includes(name)) {
            const reservedDiag = createDiagnostic(keyChildren[0], `'${name}' is a reserved keyword and cannot be used as a variable name. Reserved: ${reservedNames.join(", ")}`, DiagnosticSeverity.Error, "reserved-name", {
              found: name,
              expected: reservedNames
            });
            dc.add(reservedDiag);
          }
          let declType = rawDecl.type;
          let errorPrefix;
          let errorPrefixNode;
          let mergedElement;
          let mergedKeyRemainder;
          const captured = captureErrorPrefix(element, colinearNode);
          let innerErrorPrefix;
          if (colinearNode.type === "variable_declaration") {
            const innerParts = [];
            for (const child of colinearNode.children) {
              if (child.type === "ERROR") {
                const text = child.text?.trim();
                if (text)
                  innerParts.push(text);
              }
            }
            if (innerParts.length > 0) {
              innerErrorPrefix = innerParts.join(" ");
            }
          }
          const split = detectSameRowSplit(elementNodes, i, colinearNode, rawDecl.type);
          if (split) {
            errorPrefix = captured ? `${captured.text}${split.errorPrefix}` : split.errorPrefix;
            if (captured)
              errorPrefixNode = captured.errorNode;
            declType = split.declType;
            mergedElement = split.mergedElement;
            mergedKeyRemainder = split.mergedKeyRemainder;
            skipIndices.add(i + 1);
          } else {
            const suffix = detectInlineErrorSuffix(element, colinearNode, rawDecl.type);
            if (suffix) {
              errorPrefix = captured ? `${captured.text}${suffix.errorPrefix}` : suffix.errorPrefix;
              errorPrefixNode = suffix.errorNode;
              declType = suffix.declType;
            } else if (captured) {
              errorPrefix = captured.text;
              errorPrefixNode = captured.errorNode;
            }
          }
          if (innerErrorPrefix) {
            errorPrefix = errorPrefix ? `${errorPrefix} ${innerErrorPrefix}` : innerErrorPrefix;
          }
          if (hasModifier && rawDecl.modifier) {
            const modifierText = rawDecl.modifier.name;
            const modifierNames = keywordNames(modifiers);
            if (!modifierNames.includes(modifierText)) {
              const suggestion = findSuggestion(modifierText, modifierNames);
              const hint = suggestion ? `Did you mean '${suggestion}'?` : `Valid modifiers: ${modifierNames.join(", ")}`;
              const modDiag = createDiagnostic(colinearNode, `Unknown modifier '${modifierText}' for ${blockLabel} ${name}. ${hint}`, DiagnosticSeverity.Error, "invalid-modifier", {
                found: modifierText,
                expected: modifierNames
              });
              dc.add(modDiag);
            }
          }
          if (primitiveTypes.length > 0 && declType instanceof Identifier) {
            const typeName = declType.name;
            const typeNames = keywordNames(primitiveTypes);
            if (!typeNames.includes(typeName)) {
              const suggestion = findSuggestion(typeName, typeNames);
              const hint = suggestion ? `Did you mean '${suggestion}'?` : `Valid types: ${typeNames.join(", ")}`;
              const typeDiag = createDiagnostic(declType.__cst ? declType.__cst.range : colinearNode, `Unknown type '${typeName}' for ${blockLabel} ${name}. ${hint}`, DiagnosticSeverity.Error, "unknown-type", {
                found: typeName,
                expected: typeNames
              });
              dc.add(typeDiag);
            }
          } else if (primitiveTypes.length > 0 && declType instanceof SubscriptExpression) {
            const obj = declType.object;
            const idx2 = declType.index;
            if (!(obj instanceof Identifier) || obj.name !== "list") {
              const typeName = obj instanceof Identifier ? obj.name : obj.__emit({ indent: 0 });
              const paramDiag = createDiagnostic(obj, `'${typeName}' does not support type parameters. Only 'list' supports type parameters (e.g., list[string]).`, DiagnosticSeverity.Error, "invalid-type-parameter", { found: typeName });
              dc.add(paramDiag);
            } else if (idx2 instanceof SubscriptExpression) {
              const nestedDiag = createDiagnostic(idx2, `Nested list types are not supported (e.g., list[list[string]]). Use a flat list type like list[string].`, DiagnosticSeverity.Error, "nested-list-type");
              dc.add(nestedDiag);
            } else if (idx2 instanceof Identifier) {
              const elemType = idx2.name;
              const elemTypeNames = keywordNames(primitiveTypes);
              if (!elemTypeNames.includes(elemType)) {
                const suggestion = findSuggestion(elemType, elemTypeNames);
                const hint = suggestion ? `Did you mean '${suggestion}'?` : `Valid element types: ${elemTypeNames.join(", ")}`;
                const elemDiag = createDiagnostic(idx2, `Unknown list element type '${elemType}' for ${blockLabel} ${name}. ${hint}`, DiagnosticSeverity.Error, "unknown-type", {
                  found: elemType,
                  expected: elemTypeNames
                });
                dc.add(elemDiag);
              }
            }
          }
          const decl = hasModifier && rawDecl.modifier ? new VariableDeclarationNode({
            type: declType,
            defaultValue: rawDecl.defaultValue,
            modifier: rawDecl.modifier
          }) : new ParameterDeclarationNode({
            type: declType,
            defaultValue: rawDecl.defaultValue
          });
          const parsed2 = withCst(decl, element);
          const declComments = [
            ...leadingComments2.map((c) => ({
              ...c,
              attachment: "leading"
            })),
            ...inlineComments2.map((c) => ({
              ...c,
              attachment: "inline"
            }))
          ];
          if (declComments.length > 0) {
            parsed2.__comments = declComments;
          }
          if (mergedElement) {
            mergeProperties(parsed2, element, mergedElement, mergedKeyRemainder, propertiesBlock, dialect, dc);
          } else {
            let blockNode = element.childForFieldName("block_value");
            if (!blockNode) {
              blockNode = element.namedChildren.find((c) => c.type === "mapping") ?? null;
            }
            if (blockNode && isSingularFieldType(propertiesBlock)) {
              const propResult = propertiesBlock.parse(blockNode, dialect);
              if (propResult.value && typeof propResult.value === "object") {
                parsed2.properties = propResult.value;
                parsed2.__children.push(new FieldChild("properties", propResult.value, propertiesBlock));
              }
              dc.merge(propResult);
            }
          }
          if (errorPrefix) {
            const errorBlock = new ErrorBlock(errorPrefix, colinearNode.startCol);
            parsed2.__children.unshift(errorBlock);
            if (hasModifier) {
              const modNames = keywordNames(modifiers);
              const suggestion = findSuggestion(errorPrefix, modNames);
              const hint = suggestion ? `Did you mean '${suggestion}'?` : `Valid modifiers: ${modNames.join(", ")}`;
              const errModDiag = createDiagnostic(errorPrefixNode ?? colinearNode, `Unknown modifier '${errorPrefix}' for ${blockLabel} ${name}. ${hint}`, DiagnosticSeverity.Error, "invalid-modifier", {
                found: errorPrefix,
                expected: modNames
              });
              dc.add(errModDiag);
            }
          }
          instance.set(name, parsed2);
          lastParsed = parsed2;
        } else if (name && element.children.some((c) => c.type === "ERROR")) {
          const rawElementText = element.text;
          const colonIdx = rawElementText.indexOf(":");
          const rawValueText = colonIdx >= 0 ? rawElementText.substring(colonIdx + 1).trimStart() : "";
          if (rawValueText) {
            const errorType = withCst(new ErrorValue(rawValueText), element);
            const decl = hasModifier ? new VariableDeclarationNode({ type: errorType }) : new ParameterDeclarationNode({ type: errorType });
            const parsed2 = withCst(decl, element);
            const declComments = [
              ...leadingComments2.map((c) => ({
                ...c,
                attachment: "leading"
              })),
              ...inlineComments2.map((c) => ({
                ...c,
                attachment: "inline"
              }))
            ];
            if (declComments.length > 0) {
              parsed2.__comments = declComments;
            }
            instance.set(name, parsed2);
            lastParsed = parsed2;
          }
        } else if (name) {
          const typeNames = keywordNames(primitiveTypes);
          const hint = typeNames.length > 0 ? `Expected a type after ':' (${typeNames.slice(0, 5).join(", ")}, ...)` : `Expected a type after ':'`;
          dc.add(createDiagnostic(element, `Missing type for ${blockLabel} '${name}'. ${hint}`, DiagnosticSeverity.Error, "missing-type", { expected: typeNames }));
        }
      }
      if (pendingComments.length > 0 && lastParsed) {
        const asTrailing = pendingComments.map((c) => ({
          ...c,
          attachment: "trailing"
        }));
        lastParsed.__comments = [
          ...lastParsed.__comments ?? [],
          ...asTrailing
        ];
      }
      instance.__diagnostics = dc.own;
      const parsed = withCst(instance, node);
      return parseResult(parsed, dc.all);
    }
    __emit(ctx) {
      const indent = emitIndent(ctx);
      const lines = [];
      const reservedEntryNames = /* @__PURE__ */ new Set([
        ...keywordNames(primitiveTypes),
        ...keywordNames(modifiers),
        "list"
      ]);
      for (const [name, decl] of this.entries()) {
        if (!decl)
          continue;
        const allComments = decl.__comments ?? [];
        const leading = allComments.filter((c) => c.attachment === "leading");
        const inline = allComments.filter((c) => c.attachment === "inline");
        const trailing = allComments.filter((c) => c.attachment === "trailing");
        const leadingOutput = emitCommentList(leading, ctx);
        if (leadingOutput) {
          lines.push(leadingOutput);
        }
        const keyChild = decl.__cst?.node?.childForFieldName("key")?.namedChildren.find(isKeyNode);
        const wasQuoted = keyChild ? keyChild.type === "string" : reservedEntryNames.has(name);
        const emittedKey = wasQuoted ? quoteKeyName(name) : emitKeyName(name);
        let line = `${indent}${emittedKey}: `;
        if (hasModifier && "modifier" in decl && decl.modifier instanceof Identifier) {
          line += `${decl.modifier.__emit(ctx)} `;
        }
        for (const dc of decl.__children) {
          if (dc instanceof ErrorBlock) {
            line += `${dc.rawText} `;
            break;
          }
        }
        line += decl.type.__emit(ctx);
        if (decl.defaultValue) {
          line += ` = ${decl.defaultValue.__emit(ctx)}`;
        } else if (decl.__cst?.node?.text?.trimEnd().endsWith("=")) {
          line += " =";
        }
        if (inline.length > 0) {
          const inlineText = inline.map((c) => {
            if (c.value.trim().length === 0)
              return "#";
            const prefix2 = c.range ? "#" : "# ";
            return `${prefix2}${c.value}`;
          }).join(" ");
          line += ` ${inlineText}`;
        }
        lines.push(line);
        const trailingOutput = emitCommentList(trailing, {
          ...ctx,
          indent: ctx.indent + 1
        });
        if (trailingOutput) {
          lines.push(trailingOutput);
        }
        if (isEmittable(decl.properties)) {
          const propsOutput = decl.properties.__emit({
            ...ctx,
            indent: ctx.indent + 1
          });
          if (propsOutput) {
            lines.push(propsOutput);
          }
        }
      }
      return lines.join("\n");
    }
  }
  const base = addBuilderMethods(TypedMapNode);
  if (options.description) {
    Object.defineProperty(base, "__metadata", {
      value: { description: options.description },
      writable: true,
      configurable: true,
      enumerable: true
    });
  }
  Object.defineProperty(base, "__clone", {
    value: () => TypedMap(kind, propertiesBlock, options),
    writable: true,
    configurable: true,
    enumerable: true
  });
  overrideFactoryBuilderMethods(base);
  return base;
}

// ../language/dist/core/dialect.js
function hasRange(c) {
  return c.range !== void 0;
}
function prescanDiscriminantValue(elements, fieldName) {
  for (const element of elements) {
    if (element.type !== "mapping_element")
      continue;
    const keyNode = element.childForFieldName("key");
    if (!keyNode)
      continue;
    if (getKeyText(keyNode) !== fieldName)
      continue;
    const { colinearValue } = getValueNodes(element);
    if (!colinearValue)
      continue;
    const exprNode = colinearValue.childForFieldName("expression") ?? colinearValue;
    const text = exprNode.text?.trim();
    if (!text)
      continue;
    if (text.startsWith('"') && text.endsWith('"') || text.startsWith("'") && text.endsWith("'")) {
      return { value: text.slice(1, -1), cstNode: exprNode };
    }
    return { value: text, cstNode: exprNode };
  }
  return void 0;
}
function collectAdoptedSiblings(elements, startIndex, parentColumn) {
  let lookahead = startIndex + 1;
  while (lookahead < elements.length) {
    const next = elements[lookahead];
    if (next.startCol <= parentColumn)
      break;
    lookahead++;
  }
  if (lookahead > startIndex + 1) {
    return {
      adopted: elements.slice(startIndex + 1, lookahead),
      newIndex: lookahead - 1
    };
  }
  return void 0;
}
function hasProcedureStatements(value) {
  return value != null && typeof value === "object" && "statements" in value && Array.isArray(value.statements);
}
function getElementKeyRange(element) {
  const keyNode = element.childForFieldName("key");
  const keyChild = keyNode?.namedChildren.find(isKeyNode);
  if (keyChild)
    return toRange(keyChild);
  if (keyNode)
    return toRange(keyNode);
  return void 0;
}
function collectAllCstDiagnostics(root) {
  const diagnostics = [];
  collectCstDiagnosticsInner(root, diagnostics);
  return diagnostics;
}
function missingNodeRange(node) {
  const range = toRange(node);
  const prev = node.previousSibling;
  if (prev && range.start.line === range.end.line && range.start.character === range.end.character && prev.endPosition.row < node.startPosition.row) {
    const end = prev.endPosition;
    return {
      start: { line: end.row, character: end.column },
      end: { line: end.row, character: end.column }
    };
  }
  return range;
}
function collectCstDiagnosticsInner(node, diagnostics) {
  for (const child of node.children) {
    if (child.isMissing) {
      diagnostics.push(createParserDiagnostic(missingNodeRange(child), `Missing ${child.type}`, "missing-token"));
    } else if (child.isError) {
      if (node.type !== "run_statement") {
        const text = child.text?.trim();
        diagnostics.push(createParserDiagnostic(child, text ? `Syntax error: unexpected \`${text.length > 40 ? text.slice(0, 40) + "\u2026" : text}\`` : "Syntax error", "syntax-error"));
      }
      collectCstDiagnosticsInner(child, diagnostics);
    } else {
      collectCstDiagnosticsInner(child, diagnostics);
    }
  }
}
var Dialect = class {
  parse(node, schema) {
    const docComments = [];
    let mappingNode = null;
    for (const child of node.namedChildren) {
      if (child.type === "comment") {
        const attachment = mappingNode ? "trailing" : "leading";
        docComments.push(this.parseComment(child, attachment));
      } else if (child.type === "mapping") {
        mappingNode = child;
      } else if (child.namedChildren.some((c) => c.type === "mapping_element")) {
        mappingNode = child;
      }
    }
    if (!mappingNode && node.namedChildren.some((c) => c.type === "mapping_element")) {
      mappingNode = node;
    }
    const effectiveNode = mappingNode ?? node;
    let elements = effectiveNode.namedChildren;
    if (mappingNode && mappingNode !== node) {
      const extra = [];
      for (const child of node.namedChildren) {
        if (child === mappingNode || child.type === "comment")
          continue;
        extra.push(child);
      }
      if (extra.length > 0) {
        elements = [...elements, ...extra];
      }
    }
    const result = this.parseMappingElements(elements, schema, effectiveNode);
    const resultChildren = result.value.__children;
    const childArr = Array.isArray(resultChildren) ? resultChildren : [];
    const hasSchemaContent = Object.keys(schema).some((k) => result.value[k] !== void 0);
    const allErrorBlocks = childArr.length > 0 && childArr.every((c) => c instanceof ErrorBlock);
    if (!hasSchemaContent && (node.isError || childArr.length === 0 || allErrorBlocks)) {
      const hasNonCommentContent = node.namedChildren.some((c) => c.type !== "comment");
      if (hasNonCommentContent) {
        const text = node.text?.trim();
        if (text) {
          result.value.__children = [
            new ErrorBlock(node.text, node.startCol)
          ];
        }
      }
    }
    const cstDiagnostics = collectAllCstDiagnostics(node);
    if (cstDiagnostics.length > 0) {
      result.value.__diagnostics.push(...cstDiagnostics);
      result.diagnostics.push(...cstDiagnostics);
    }
    if (docComments.length > 0) {
      const finalChildren = result.value.__children;
      const finalAllErrors = Array.isArray(finalChildren) && finalChildren.length > 0 && finalChildren.every((c) => c instanceof ErrorBlock);
      if (!finalAllErrors) {
        attach(result.value, docComments);
      }
    }
    return result;
  }
  parseComment(node, attachment = "leading") {
    return parseCommentNode(node, attachment);
  }
  /** Build the schema path by walking up the CST to the document root. */
  buildContextPath(node) {
    const path = [];
    let current = node;
    while (current && current.type !== "document") {
      if (current.type === "mapping_element") {
        const keyNode = current.childForFieldName("key");
        const keyChildren = keyNode?.namedChildren.filter(isKeyNode);
        const ids = keyChildren?.map((n) => getKeyText(n)) ?? [];
        if (ids.length > 0) {
          path.unshift(...ids);
        }
      }
      current = current.parent;
    }
    return path;
  }
  /**
   * Build a human-readable location string for diagnostics in statement context.
   * e.g. `" in topic 'test' before_reasoning"` from path [topic, test, before_reasoning].
   */
  formatStatementContext(node) {
    const ctx = this.buildContextPath(node.parent ?? node);
    if (ctx.length === 0)
      return "";
    if (ctx.length >= 3) {
      const fieldName = ctx[ctx.length - 1];
      const blockKind = ctx[0];
      const blockName = ctx.slice(1, ctx.length - 1).join(" ");
      return ` in ${blockKind} '${blockName}' ${fieldName}`;
    }
    if (ctx.length === 2) {
      return ` in ${ctx[0]} '${ctx[1]}'`;
    }
    return ` in ${ctx[0]}`;
  }
  /**
   * Parse a mapping block using the given schema.
   * Infers cardinality from key structure (1 id = singular, 2 ids = map).
   */
  parseMapping(node, schema, extraElements, options) {
    const elements = extraElements ? [...node.namedChildren, ...extraElements] : node.namedChildren;
    const result = this.parseMappingElements(elements, schema, node, options?.discriminant);
    if (options?.preserveOrphanedStatements !== false) {
      const childArr = result.value.__children;
      if (Array.isArray(childArr)) {
        for (const element of elements) {
          if (element.type in statementParsers) {
            const errBlock = errorBlockFromNode(element);
            if (errBlock)
              childArr.push(errBlock);
          }
        }
      }
    }
    return result;
  }
  /**
   * Core parsing engine used by parseMapping() and Sequence.
   * Accepts an explicit list of elements so callers can merge elements
   * from different CST locations.
   */
  parseMappingElements(elements, schema, cstNode, discriminant) {
    let effectiveSchema = schema;
    const discriminantDiags = [];
    if (discriminant) {
      const scan = prescanDiscriminantValue(elements, discriminant.field);
      if (scan) {
        const variantSchema = discriminant.variants[scan.value];
        if (variantSchema) {
          effectiveSchema = variantSchema;
        } else {
          discriminantDiags.push(createDiagnostic(scan.cstNode, `Unknown variant '${scan.value}' for discriminant '${discriminant.field}'. Valid values: ${discriminant.validValues.join(", ")}`, DiagnosticSeverity.Error, "unknown-variant"));
        }
      }
    }
    schema = effectiveSchema;
    const fields = {};
    const collections = {};
    const dc = new DiagnosticCollector();
    for (const d of discriminantDiags)
      dc.add(d);
    const children = [];
    const anonymousCounts = {};
    const attacher = new CommentAttacher();
    function resolveEntryInfo(ft, _tid) {
      if (!ft)
        return void 0;
      if (isNamedCollectionFieldType(ft)) {
        return {
          entryBlock: ft.entryBlock,
          parentFieldType: ft,
          createContainer: () => new ft()
        };
      }
      return void 0;
    }
    const insideError = cstNode.type === "ERROR";
    for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
      const element = elements[elementIndex];
      if (element.type === "comment") {
        attacher.pushLeadingNode(element);
        continue;
      }
      if (element.isMissing) {
        continue;
      }
      if (element.type === "ERROR") {
        const errorResult = this.parseMapping(element, schema);
        for (const key of Object.keys(schema)) {
          if (key in errorResult.value)
            fields[key] = errorResult.value[key];
        }
        const errorRecord = errorResult.value;
        const errorChildren = Array.isArray(errorRecord.__children) ? errorRecord.__children : [];
        const recoveredSchemaFields = Object.keys(schema).some((k) => k in errorResult.value && errorResult.value[k] !== void 0);
        if (errorChildren.length > 0 && recoveredSchemaFields) {
          children.push(...errorChildren);
        } else {
          const errBlock = errorBlockFromNode(element);
          if (errBlock)
            children.push(errBlock);
        }
        if (!insideError) {
          const recoveredSchemaContent = Object.keys(schema).some((k) => k in errorResult.value && errorResult.value[k] !== void 0);
          if (!recoveredSchemaContent) {
            const text = element.text?.trim();
            if (text) {
              dc.add(createParserDiagnostic(element, `Unrecognized syntax: ${text.length > 40 ? text.slice(0, 40) + "\u2026" : text}`, "syntax-error"));
            }
          }
        }
        dc.merge(errorResult);
        continue;
      }
      if (element.type !== "mapping_element") {
        if (element.type in statementParsers || element.type === "comment" || element.type === "key" || element.type === "expression_with_to" || element.type === "expression" || element.type === "variable_declaration" || element.type === "procedure") {
          continue;
        }
        const errBlock = errorBlockFromNode(element);
        if (errBlock)
          children.push(errBlock);
        continue;
      }
      const dedentedCommentsForNextField = [];
      const [typeId, nameId] = this.getKeyIds(element);
      const rawFieldType = schema[typeId];
      let fieldType = Array.isArray(rawFieldType) ? rawFieldType[0] : rawFieldType;
      if (!fieldType) {
        fieldType = resolveWildcardField(schema, typeId);
      }
      const inlineComments2 = this.parseInlineComments(element);
      const elementComments = this.parseElementComments(element);
      if (!fieldType) {
        if (!insideError) {
          const keyNode = element.childForFieldName("key");
          const keyChildren = keyNode?.namedChildren.filter(isKeyNode);
          const keyRange = keyChildren?.[0] ? toRange(keyChildren[0]) : toRange(element);
          const parentPath = this.buildContextPath(element.parent ?? element);
          const isRootLevel = parentPath.length === 0;
          const schemaKeys = Object.keys(schema);
          const suggestion = findSuggestion(typeId, schemaKeys);
          const baseMessage = isRootLevel ? `Unknown block: ${typeId}` : `Unknown field \`${typeId}\` in ${parentPath.join(" ")}`;
          const message = formatSuggestionHint(baseMessage, suggestion);
          const code = isRootLevel ? "unknown-block" : "unknown-field";
          const ownDiag = createDiagnostic(keyRange, message, DiagnosticSeverity.Warning, code, {
            ...suggestion ? { suggestion } : {},
            expected: schemaKeys
          });
          dc.add(ownDiag);
        }
        const { blockValue: blockValue2, colinearValue: colinearValue2, procedure: procedure2 } = getValueNodes(element);
        const mappingNode = blockValue2?.type === "mapping" ? blockValue2 : null;
        if (colinearValue2) {
          const expr = this.parseExpression(colinearValue2);
          const ft = untypedFieldType(element.text, element.startCol);
          const fc = new FieldChild(typeId, expr, ft);
          attachElementText(fc, element);
          if (attacher.hasPending) {
            attacher.drainAsErrorBlocks(children);
          }
          children.push(fc);
        } else {
          const untypedBlock = new UntypedBlock(typeId, nameId, element.text, element.startCol);
          untypedBlock.__cst = { node: element, range: toRange(element) };
          attacher.consumeOnto(untypedBlock);
          if (mappingNode) {
            const keyRow = element.startPosition.row;
            const preBlockComments = [];
            const postBlockComments = [];
            let seenMapping = false;
            for (const child of element.namedChildren) {
              if (child === mappingNode) {
                seenMapping = true;
                continue;
              }
              if (child.type === "comment" && child.startPosition.row !== keyRow) {
                const target = seenMapping ? postBlockComments : preBlockComments;
                target.push(new ErrorBlock(`# ${parseCommentNode(child, "leading").value}`, 0));
              }
            }
            const innerResult = this.parseMappingElements(mappingNode.namedChildren, {}, mappingNode);
            const innerRecord = innerResult.value;
            const innerChildren = Array.isArray(innerRecord.__children) ? innerRecord.__children : [];
            untypedBlock.__children = [
              ...preBlockComments,
              ...innerChildren,
              ...postBlockComments
            ];
            untypedBlock.__diagnostics.push(...innerResult.diagnostics);
          } else if (procedure2 && procedure2.type === "procedure") {
            const statements = this.parseProcedure(procedure2);
            for (const stmt of statements) {
              untypedBlock.__children.push(new StatementChild(stmt));
            }
          }
          defineFieldAccessors(untypedBlock, untypedBlock.__children);
          children.push(untypedBlock);
        }
        continue;
      }
      if (fieldType.__metadata?.deprecated) {
        const keyNode = element.childForFieldName("key");
        const keyIds = keyNode?.namedChildren.filter((n) => n.type === "id");
        const keyRange = keyIds?.[0] ? toRange(keyIds[0]) : toRange(element);
        const dep = fieldType.__metadata.deprecated;
        const msg = dep.message ? `'${typeId}' is deprecated: ${dep.message}` : `'${typeId}' is deprecated`;
        const depDiag = new DeprecatedFieldDiagnostic(keyRange, msg, dep.replacement);
        dc.add(depDiag);
      }
      const { blockValue, colinearValue, procedure } = getValueNodes(element);
      const valueNode = blockValue ?? colinearValue ?? procedure;
      const entryInfo = resolveEntryInfo(fieldType, typeId);
      if (nameId && entryInfo) {
        const hasBody = !!(blockValue || colinearValue || procedure);
        let adoptedSiblings;
        if (!hasBody) {
          const result = collectAdoptedSiblings(elements, elementIndex, element.startCol);
          if (result) {
            adoptedSiblings = result.adopted;
            elementIndex = result.newIndex;
          }
        }
        const { entryBlock, parentFieldType, createContainer } = entryInfo;
        collections[typeId] ??= createContainer();
        const { value: parsedValue, extraComments, diagnostics: entryDiagnostics } = this.parseNamedEntry(entryBlock, element, nameId, inlineComments2, adoptedSiblings);
        attacher.consumeOnto(parsedValue, extraComments);
        collections[typeId].set(nameId, parsedValue);
        const namedFc = new FieldChild(typeId, parsedValue, parentFieldType, nameId, getElementKeyRange(element));
        children.push(namedFc);
        dc.mergeAll(entryDiagnostics);
      } else if (nameId && isSingularFieldType(fieldType)) {
        const keyNode = element.childForFieldName("key");
        const keyChildren = keyNode?.namedChildren.filter(isKeyNode);
        const nameKeyNode = keyChildren?.[1];
        const nameRange = nameKeyNode ? toRange(nameKeyNode) : getElementKeyRange(element);
        if (nameRange) {
          dc.add(createDiagnostic(nameRange, `Unexpected name \`${nameId}\` on \`${typeId}\` \u2014 this field does not take a name`, DiagnosticSeverity.Error, "unexpected-block-name"));
        }
        const singularField = fieldType;
        if (valueNode) {
          const result = singularField.parse(valueNode, this);
          attacher.consumeOnto(result.value, inlineComments2);
          fields[typeId] = result.value;
          const singularFc = new FieldChild(typeId, result.value, fieldType, void 0, getElementKeyRange(element));
          children.push(singularFc);
          dc.merge(result);
        }
      } else if (entryInfo && entryInfo.entryBlock.allowAnonymous) {
        if (valueNode) {
          const keyNode = element.childForFieldName("key");
          const keyChildren = keyNode?.namedChildren.filter(isKeyNode);
          const keyRange = keyChildren?.[0] ? toRange(keyChildren[0]) : toRange(element);
          const anonDiag = createDiagnostic(keyRange, `Anonymous ${typeId} name is not allowed`, DiagnosticSeverity.Warning, "anonymous-named-block");
          dc.add(anonDiag);
          const idx2 = anonymousCounts[typeId] = (anonymousCounts[typeId] ?? 0) + 1;
          const syntheticName = `ILLEGAL_anonymous_${typeId}_${idx2}`;
          const { entryBlock: anonEntryBlock, parentFieldType: anonParentFt, createContainer } = entryInfo;
          collections[typeId] ??= createContainer();
          const { value: parsedValue, extraComments, diagnostics: entryDiagnostics } = this.parseNamedEntry(anonEntryBlock, element, syntheticName, inlineComments2);
          attacher.consumeOnto(parsedValue, extraComments);
          collections[typeId].set(syntheticName, parsedValue);
          const anonFc = new FieldChild(typeId, parsedValue, anonParentFt, syntheticName, getElementKeyRange(element));
          children.push(anonFc);
          dc.mergeAll(entryDiagnostics);
        }
      } else if (isSingularFieldType(fieldType)) {
        let adoptedElements;
        if (fieldType.__fieldKind === "Block" && valueNode) {
          const result2 = collectAdoptedSiblings(elements, elementIndex, element.startCol);
          if (result2) {
            const bodyColumn = valueNode.startCol;
            const adopted = result2.adopted.filter((c) => c.startCol >= bodyColumn);
            if (adopted.length > 0) {
              adoptedElements = adopted;
              elementIndex = result2.newIndex;
            }
          }
        }
        const result = this.parseSingularField(fieldType, typeId, element, valueNode, inlineComments2, elementComments, attacher, adoptedElements);
        if (result) {
          fields[typeId] = result.value;
          const singularFc = new FieldChild(typeId, result.value, fieldType, void 0, getElementKeyRange(element));
          children.push(singularFc);
          dc.mergeAll(result.diagnostics);
          dedentedCommentsForNextField.push(...result.dedentedComments);
          for (const child of element.children) {
            if (child.isError) {
              const errBlock = errorBlockFromNode(child);
              if (errBlock)
                children.push(errBlock);
            }
          }
        } else {
          const errBlock = errorBlockFromNode(element);
          if (errBlock)
            children.push(errBlock);
          if (!valueNode) {
            dc.add(createDiagnostic(element, `Missing value for '${typeId}'`, DiagnosticSeverity.Error, "missing-value"));
          }
        }
      }
      attacher.setPending(dedentedCommentsForNextField);
    }
    attacher.flush();
    for (const map of Object.values(collections)) {
      if (!map.__cst) {
        map.__cst = { node: cstNode, range: toRange(cstNode) };
      }
    }
    const value = {
      ...fields,
      ...collections,
      __children: children
    };
    const parsed = withCst(value, cstNode);
    parsed.__diagnostics = dc.own;
    return parseResult(parsed, dc.all);
  }
  /**
   * Parse a singular field value (Block, TypedMap, or Primitive).
   * Handles comment splitting (before/after body), dedented comment detection,
   * and key-only fallbacks for empty blocks and typed maps.
   */
  parseSingularField(singularField, typeId, element, valueNode, inlineComments2, elementComments, attacher, extraElements) {
    const dedentedComments = [];
    if (valueNode) {
      const result = singularField.parse(valueNode, this, extraElements);
      const containerOnlyComments = elementComments.filter((c) => c.range?.start.line !== element.startRow);
      const { beforeBody, afterBody } = this.splitContainerComments(containerOnlyComments, valueNode);
      if (singularField.__fieldKind === "TypedMap" || singularField.__fieldKind === "Collection") {
        this.attachToFirstTypedMapEntry(result.value, beforeBody);
      } else if (singularField.__fieldKind === "Primitive") {
        this.attachToFirstProcedureStatement(result.value, beforeBody);
      } else if (singularField.__fieldKind === "Block" && beforeBody.length > 0) {
        const blockObj = result.value;
        const firstChildKey = Object.keys(blockObj).find((k) => !k.startsWith("__") && blockObj[k] && typeof blockObj[k] === "object");
        if (firstChildKey) {
          attach(blockObj[firstChildKey], beforeBody);
        }
      }
      let remainingAfterBody = afterBody;
      if (singularField.__fieldKind === "Primitive") {
        const nestedAfterBody = afterBody.filter((c) => c.range.start.character > element.startCol);
        const dedentedAfterBody = afterBody.filter((c) => c.range.start.character <= element.startCol);
        const attachedToLastStmt = this.attachToLastProcedureStatement(result.value, nestedAfterBody);
        remainingAfterBody = attachedToLastStmt ? [] : nestedAfterBody;
        if (dedentedAfterBody.length > 0) {
          dedentedComments.push(...dedentedAfterBody);
        }
      }
      attacher.consumeOnto(result.value, [
        ...inlineComments2,
        ...remainingAfterBody
      ]);
      if (singularField.__fieldKind === "Primitive" && result.diagnostics.length > 0) {
        const parsed = result.value;
        if (parsed.__diagnostics) {
          parsed.__diagnostics.push(...result.diagnostics);
        }
      }
      return {
        value: result.value,
        dedentedComments,
        diagnostics: result.diagnostics
      };
    }
    if (singularField.__fieldKind === "Block") {
      const blockType = singularField;
      const result = blockType.fromParsedFields({}, element, []);
      attacher.consumeOnto(result.value);
      return { value: result.value, dedentedComments, diagnostics: [] };
    }
    if (singularField.__fieldKind === "TypedMap") {
      const entries = NamedMap.forCollection(typeId);
      entries.__cst = { node: element, range: toRange(element) };
      attacher.consumeOnto(entries);
      return { value: entries, dedentedComments, diagnostics: [] };
    }
    if (singularField.__fieldKind === "Collection") {
      const result = singularField.parse(element, this);
      attacher.consumeOnto(result.value);
      return { value: result.value, dedentedComments, diagnostics: [] };
    }
    return null;
  }
  /** Extract comments on the same line as an element (inline comments). */
  parseInlineComments(element) {
    return element.children.filter((c) => c.type === "comment" && c.startRow === element.startRow).map((c) => this.parseComment(c, "inline"));
  }
  /** Extract all comment children from an element. */
  parseElementComments(element) {
    return element.children.filter((c) => c.type === "comment").map((c) => this.parseComment(c));
  }
  /**
   * Split comments into those before and after a value node's range.
   *
   * Comments without source range info (programmatic comments) are always
   * placed in `beforeBody`. The `afterBody` array is guaranteed to contain
   * only comments with range info, since only comments whose source line
   * falls after the value node can land there.
   */
  splitContainerComments(comments, valueNode) {
    if (!valueNode) {
      return { beforeBody: comments, afterBody: [] };
    }
    const beforeBody = [];
    const afterBody = [];
    for (const c of comments) {
      const line = c.range?.start.line;
      if (line === void 0) {
        beforeBody.push(c);
        continue;
      }
      if (line < valueNode.startRow) {
        beforeBody.push(c);
        continue;
      }
      if (line > valueNode.endRow) {
        const trailing = { ...c, attachment: "trailing" };
        if (hasRange(trailing)) {
          afterBody.push(trailing);
        }
        continue;
      }
      beforeBody.push(c);
    }
    return { beforeBody, afterBody };
  }
  /** Attach comments to the first entry of a TypedMap-like value. */
  attachToFirstTypedMapEntry(value, comments) {
    if (comments.length === 0)
      return;
    if (!isNamedMap(value))
      return;
    const iterator = value.entries();
    const first = iterator.next();
    if (first.done)
      return;
    attach(first.value[1], comments);
  }
  /** Attach comments to the first statement in a procedure-like value. */
  attachToFirstProcedureStatement(value, comments) {
    if (comments.length === 0)
      return;
    if (!hasProcedureStatements(value))
      return;
    attach(value.statements[0], comments);
  }
  /** Attach comments as trailing to the last statement in a procedure-like value. */
  attachToLastProcedureStatement(value, comments) {
    if (comments.length === 0)
      return false;
    if (!hasProcedureStatements(value))
      return false;
    const lastStmt = value.statements[value.statements.length - 1];
    const tagged = comments.map((c) => ({
      ...c,
      attachment: "trailing"
    }));
    attach(lastStmt, tagged);
    return true;
  }
  parseNamedEntry(FieldType, element, nameId, inlineComments2, adoptedSiblings) {
    const { blockValue, colinearValue, procedure } = getValueNodes(element);
    const valueNode = blockValue ?? colinearValue ?? procedure;
    const dc = new DiagnosticCollector();
    const nonInlineElementComments = element.children.filter((c) => c.type === "comment").filter((c) => c.startRow !== element.startRow).map((c) => this.parseComment(c, "trailing"));
    let parsedValue;
    if (valueNode) {
      const result = FieldType.parse(valueNode, nameId, this);
      parsedValue = result.value;
      dc.merge(result);
    } else {
      const result = FieldType.parse(element, nameId, this, adoptedSiblings);
      parsedValue = result.value;
      dc.merge(result);
    }
    return {
      value: parsedValue,
      extraComments: [...inlineComments2, ...nonInlineElementComments],
      diagnostics: dc.all
    };
  }
  /** Returns [typeId, nameId?] where nameId is present for 2-id keys. */
  getKeyIds(element) {
    const keyNode = element.childForFieldName("key");
    if (!keyNode)
      return ["", void 0];
    const keyChildren = keyNode.namedChildren.filter(isKeyNode);
    if (keyChildren.length === 2) {
      return [getKeyText(keyChildren[0]), getKeyText(keyChildren[1])];
    }
    return [keyChildren[0] ? getKeyText(keyChildren[0]) : "", void 0];
  }
  /** Parse an expression from CST, dispatching by node type. */
  parseExpression(node) {
    if (!node) {
      return new Identifier("");
    }
    if (node.isMissing) {
      const expr = withCst(new ErrorValue(""), node);
      expr.__diagnostics.push(createParserDiagnostic(missingNodeRange(node), `Missing ${node.type}`, "missing-token"));
      return expr;
    }
    if (node.isError) {
      const text = node.text?.trim();
      const expr = withCst(new Identifier(text || ""), node);
      expr.__diagnostics.push(createParserDiagnostic(node, text ? `Syntax error: unexpected \`${text.length > 40 ? text.slice(0, 40) + "\u2026" : text}\`` : "Syntax error", "syntax-error"));
      return expr;
    }
    if (node.type === "atom" || node.type === "expression") {
      return this.unwrapExpression(node);
    }
    if (node.type === "expression_with_to") {
      const exprNode = node.childForFieldName("expression");
      if (exprNode)
        return this.parseExpression(exprNode);
    }
    if (node.type === "parenthesized_expression") {
      if (node.namedChildren.length > 0) {
        return this.parseExpression(node.namedChildren[0]);
      }
    }
    const expressionParserMap = expressionParsers;
    const parser = expressionParserMap[node.type];
    if (parser) {
      const result = parser(node, (n) => this.parseExpression(n));
      return result;
    }
    const fallback = withCst(new Identifier(node.text), node);
    return fallback;
  }
  /** Unwrap atom/expression wrapper nodes that delegate to children. */
  unwrapExpression(node) {
    if (node.namedChildren.length > 0) {
      return this.parseExpression(node.namedChildren[0]);
    }
    const text = node.text;
    if (text === "True" || text === "False") {
      return withCst(new BooleanLiteral(text === "True"), node);
    }
    if (text === "None") {
      return withCst(new NoneLiteral(), node);
    }
    if (text === "...") {
      return withCst(new Ellipsis(), node);
    }
    return this.parseExpression(node.children[0]);
  }
  parseProcedure(node) {
    const children = node.type === "procedure" || node.type === "mapping" ? node.namedChildren : [node];
    return this.parseStatementNodes(children, true);
  }
  /**
   * Parse both mapping fields and statements from a block body node.
   * Works uniformly for procedure, mapping, or mixed block bodies.
   */
  parseBlockContent(node, blockSchema, options) {
    const mappingResult = this.parseMapping(node, blockSchema, void 0, {
      preserveOrphanedStatements: false,
      discriminant: options?.discriminant
    });
    const statements = this.parseStatementNodes(node.namedChildren);
    return {
      fields: mappingResult.value,
      statements,
      diagnostics: mappingResult.diagnostics
    };
  }
  /**
   * Parse an array of CST nodes as statements.
   * @param procedureContext When true, mapping_element nodes are flagged as
   *   invalid (procedures should only contain statements). When false
   *   (default), mapping_element and comment nodes are silently skipped
   *   because they are handled by parseMapping in parseBlockContent.
   */
  parseStatementNodes(nodes, procedureContext = false) {
    const statements = [];
    const attacher = new CommentAttacher();
    for (const node of nodes) {
      if (node.type === "comment") {
        if (!attacher.tryAttachInline(node, statements[statements.length - 1])) {
          attacher.pushLeadingNode(node);
        }
        continue;
      }
      if (node.isMissing) {
        const missing = withCst(new UnknownStatement(""), node);
        missing.__diagnostics.push(createParserDiagnostic(missingNodeRange(node), `Missing ${node.type}`, "missing-token"));
        statements.push(missing);
        continue;
      }
      if (node.type === "ERROR") {
        const text = node.text.trim();
        if (text) {
          const unknown = withCst(new UnknownStatement(text), node);
          unknown.__diagnostics.push(createParserDiagnostic(node, `Unrecognized syntax${this.formatStatementContext(node)}: ${text.length > 40 ? text.slice(0, 40) + "\u2026" : text}`, "syntax-error"));
          statements.push(unknown);
        }
        continue;
      }
      const result = this.parseStatement(node, procedureContext);
      if (!result)
        continue;
      if (Array.isArray(result)) {
        attacher.consumeOntoFirst(result);
        statements.push(...result);
      } else {
        attacher.consumeOnto(result);
        statements.push(result);
      }
    }
    attacher.flush();
    return statements;
  }
  /**
   * Parse a single statement from CST.
   * May return an array for desugared nodes (e.g. comma-separated with clauses).
   * Returns an UnknownStatement with a diagnostic for unrecognized node types
   * in procedure context, so content is never silently dropped.
   */
  parseStatement(node, procedureContext = false) {
    const parser = statementParsers[node.type];
    if (!parser) {
      if (node.type === "comment") {
        return null;
      }
      if (!procedureContext && node.type === "mapping_element") {
        return null;
      }
      const text = node.text.trim();
      if (!text)
        return null;
      const unknown = withCst(new UnknownStatement(text), node);
      unknown.__diagnostics.push(createParserDiagnostic(node, `Unrecognized syntax${this.formatStatementContext(node)}: ${text}`, "syntax-error"));
      return unknown;
    }
    const parsed = parser(node, (n) => this.parseExpression(n), (n) => this.parseProcedure(n), (n) => this.parseStatement(n));
    const inlineComments2 = node.namedChildren.filter((c) => c.type === "comment" && c.startRow === node.startRow).map((c) => this.parseComment(c, "inline"));
    if (inlineComments2.length > 0) {
      if (Array.isArray(parsed)) {
        if (parsed.length > 0) {
          attach(parsed[parsed.length - 1], inlineComments2);
        }
      } else {
        attach(parsed, inlineComments2);
      }
    }
    return parsed;
  }
  parseVariableDeclaration(node) {
    let modifier;
    let typeExpr;
    let defaultValue;
    if (node.type === "variable_declaration") {
      const modifierNode = node.children.find((c) => c.type === "mutable" || c.type === "linked");
      if (modifierNode) {
        modifier = withCst(new Identifier(modifierNode.text), modifierNode);
      }
      const typeNode = node.childForFieldName("type");
      const defaultNode = node.childForFieldName("default");
      typeExpr = typeNode ? this.parseExpression(typeNode) : withCst(new Identifier("unknown"), node);
      defaultValue = defaultNode ? this.parseExpression(defaultNode) : void 0;
    } else if (node.type === "assignment_expression") {
      const leftNode = node.childForFieldName("left");
      const rightNode = node.childForFieldName("right");
      typeExpr = leftNode ? this.parseExpression(leftNode) : withCst(new Identifier("unknown"), node);
      defaultValue = rightNode ? this.parseExpression(rightNode) : void 0;
    } else {
      typeExpr = this.parseExpression(node);
    }
    return withCst(new VariableDeclarationNode({
      type: typeExpr,
      defaultValue,
      modifier
    }), node);
  }
  emit(value, indent = 0) {
    const ctx = { indent };
    if (isEmittable(value)) {
      return value.__emit(ctx);
    }
    if (typeof value === "string") {
      const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r");
      return `"${escaped}"`;
    }
    if (typeof value === "number") {
      return String(value);
    }
    if (typeof value === "boolean") {
      return value ? "True" : "False";
    }
    return String(value);
  }
};

// ../language/dist/blocks.js
var VariablePropertiesBlock = Block("VariablePropertiesBlock", {
  description: StringValue.describe("Human-readable description."),
  label: StringValue.describe("Display label shown in the UI."),
  is_required: BooleanValue.describe("Whether this variable is required.")
}, { symbol: { kind: SymbolKind.Object, noRecurse: true } }).describe("Properties for a variable declaration.");
var InputPropertiesBlock = Block("InputPropertiesBlock", {
  label: StringValue.describe("Display label shown in the UI."),
  description: StringValue.describe("Human-readable description."),
  is_required: BooleanValue.describe("Whether this input is required.")
}, { symbol: { kind: SymbolKind.Object, noRecurse: true } }).describe("Properties for an action input parameter.");
var OutputPropertiesBlock = Block("OutputPropertiesBlock", {
  label: StringValue.describe("Display label shown in the UI."),
  description: StringValue.describe("Human-readable description.")
}, { symbol: { kind: SymbolKind.Object, noRecurse: true } }).describe("Properties for an action output parameter.");
var VariablesBlock = TypedMap("VariablesBlock", VariablePropertiesBlock, {
  modifiers: VARIABLE_MODIFIERS,
  primitiveTypes: AGENTSCRIPT_PRIMITIVE_TYPES
}).describe("Global variable declarations with modifiers, types, and defaults.").example(`variables:
    # Mutable types with defaults
    user_name: mutable string = ""
        description: "The customer's name"
    request_count: mutable number = 0
        description: "Number of requests in this session"
    verified: mutable boolean = False
        description: "Whether identity has been verified"
    user_data: mutable object = {}
        description: "Arbitrary user profile data"
    order_items: mutable list[object] = []
        description: "List of items in the current order"
    join_date: mutable date
        description: "When the customer joined"

    # Mutable without default value
    order_id: mutable string
        description: "Current order ID"

    # Variable with display label
    loyalty_tier: mutable string = "basic"
        label: "Loyalty Tier"
        description: "The customer's loyalty program tier"

    # Linked variables (sourced from external context, read-only)
    EndUserId: linked string
        source: @MessagingSession.MessagingEndUserId
        description: "The messaging end user ID"
    ContactId: linked string
        source: @MessagingEndUser.ContactId
        description: "The contact ID from messaging"`);
var InputsBlock = TypedMap("InputsBlock", InputPropertiesBlock, {
  modifiers: VARIABLE_MODIFIERS,
  primitiveTypes: AGENTSCRIPT_PRIMITIVE_TYPES
}).describe("Action input parameter declarations.");
var OutputsBlock = TypedMap("OutputsBlock", OutputPropertiesBlock, {
  modifiers: VARIABLE_MODIFIERS,
  primitiveTypes: AGENTSCRIPT_PRIMITIVE_TYPES
}).describe("Action output parameter declarations.").crossBlockReferenceable();
var ActionBlock = NamedBlock("ActionBlock", {
  description: StringValue.describe("Description of what the action does."),
  label: StringValue.describe("Display label shown in the UI."),
  inputs: InputsBlock,
  outputs: OutputsBlock,
  target: StringValue.describe('External implementation target URI (e.g., "flow://Action_Name").'),
  source: StringValue.describe("Global namespace function name or legacy action identifier.")
}, {
  symbol: { kind: SymbolKind.Method },
  scopeAlias: "action",
  capabilities: ["invocationTarget"]
}).describe("Action definition representing an external tool or flow.").example(`    actions:
        Lookup_Order:
            description: "Retrieve order details by order number"
            inputs:
                order_number: string
                    description: "The order number to look up"
                    is_required: True
            outputs:
                status: string
                    description: "Order status"
            target: "flow://Lookup_Order"`);
var ActionsBlock = CollectionBlock(ActionBlock).describe("Collection of action definitions.");
var ReasoningActionBlock = NamedBlock("ReasoningActionBlock", {
  description: StringValue.describe("Description of the tool provided to the LLM. Overrides the action description."),
  label: StringValue.describe("Human-readable label for the tool. Not provided to the LLM.")
}, {
  colinear: ExpressionValue,
  body: ProcedureValue,
  symbol: { kind: SymbolKind.Method },
  scopeAlias: "action"
}).describe("Action made available to the agent to choose during reasoning.").example(`        actions:
            lookup: @actions.Lookup_Order
                with order_number=@variables.order_number
                set @variables.status = @outputs.status`);
var ReasoningActionsBlock = CollectionBlock(ReasoningActionBlock).describe("Collection of reasoning action bindings.");

// ../language/dist/core/analysis/scope.js
function createSchemaContext(info) {
  const scopedNamespaces = buildScopedNamespaces(info);
  const scopeNavigation = buildScopeNavigation(info);
  const namespaceMetadata = buildNamespaceMetadata(info, scopedNamespaces);
  const schemaNamespaces = new Set(Object.keys(info.schema));
  const reservedNamespaces = /* @__PURE__ */ new Set([
    ...schemaNamespaces,
    ...scopedNamespaces.keys(),
    ...Object.keys(info.aliases),
    ...Object.values(info.aliases)
  ]);
  const globalScopes = /* @__PURE__ */ new Map();
  if (info.globalScopes) {
    for (const [ns, scope] of Object.entries(info.globalScopes)) {
      if (reservedNamespaces.has(ns)) {
        throw new Error(`Global scope namespace '${ns}' collides with an existing namespace. Global scopes must use unique namespaces that don't overlap with schema keys, scoped namespaces, or aliases. This is a configuration error in the dialect's SchemaInfo.`);
      }
      globalScopes.set(ns, scope);
      if (!namespaceMetadata.has(ns)) {
        namespaceMetadata.set(ns, { kind: SymbolKind.Namespace });
      }
    }
  }
  const referenceableFields = collectReferenceableFields(info.schema);
  const colinearResolvedScopes = new Set([...scopedNamespaces.keys()].filter((ns) => referenceableFields.has(ns)));
  const capabilityNamespaces = buildCapabilityNamespaces(info);
  return {
    info,
    scopedNamespaces,
    scopeNavigation,
    namespaceMetadata,
    schemaNamespaces,
    globalScopes,
    colinearResolvedScopes,
    invocationTargetNamespaces: capabilityNamespaces.invocationTarget,
    transitionTargetNamespaces: capabilityNamespaces.transitionTarget
  };
}
function resolveNamespaceKeys(namespace, ctx) {
  const { aliases, extraNamespaceKeys } = ctx.info;
  let root = namespace;
  while (aliases[root]) {
    root = aliases[root];
  }
  const keys = /* @__PURE__ */ new Set([namespace, root]);
  for (const [alias, canonical] of Object.entries(aliases)) {
    if (canonical === root) {
      keys.add(alias);
    }
  }
  if (extraNamespaceKeys?.[namespace]) {
    for (const extra of extraNamespaceKeys[namespace]) {
      keys.add(extra);
    }
  }
  return [...keys];
}
function getScopedNamespaces(ctx) {
  return ctx.scopedNamespaces;
}
function activeScopeForNamespace(scopesRequired, scope) {
  if (!scopesRequired || !scope)
    return void 0;
  for (const s of scopesRequired) {
    if (scope[s])
      return s;
  }
  return void 0;
}
function getScopeNavigation(ctx) {
  return ctx.scopeNavigation;
}
function getNamespaceMetadata(ctx) {
  return ctx.namespaceMetadata;
}
function getSchemaNamespaces(ctx) {
  return ctx.schemaNamespaces;
}
function isTypedMapField(ft) {
  return ft.__fieldKind === "TypedMap";
}
function isCollectionField(ft) {
  return ft.__isCollection === true;
}
function resolveFieldType(ft) {
  return Array.isArray(ft) ? ft[0] : ft;
}
function buildScopedNamespaces(schemaInfo) {
  const result = /* @__PURE__ */ new Map();
  for (const [, rawFt] of Object.entries(schemaInfo.schema)) {
    const fieldType = resolveFieldType(rawFt);
    const scopeAlias = fieldType.scopeAlias;
    const schema = fieldType.schema;
    if ((fieldType.isNamed || isCollectionField(fieldType)) && scopeAlias && schema) {
      collectScopedFields(schema, scopeAlias, result);
    }
  }
  return result;
}
function addScopedField(result, fieldName, scope) {
  let scopes = result.get(fieldName);
  if (!scopes) {
    scopes = /* @__PURE__ */ new Set();
    result.set(fieldName, scopes);
  }
  scopes.add(scope);
}
function collectScopedFields(schema, parentScope, result) {
  for (const [fieldName, rawFt] of Object.entries(schema)) {
    const fieldType = resolveFieldType(rawFt);
    if (fieldType.isNamed) {
      addScopedField(result, fieldName, parentScope);
      if (fieldType.scopeAlias && fieldType.schema) {
        collectScopedFields(fieldType.schema, fieldType.scopeAlias, result);
      }
    } else if (isCollectionField(fieldType)) {
      addScopedField(result, fieldName, parentScope);
      if (fieldType.scopeAlias && fieldType.schema) {
        collectScopedFields(fieldType.schema, fieldType.scopeAlias, result);
      }
    } else if (isTypedMapField(fieldType)) {
      addScopedField(result, fieldName, parentScope);
    } else if (fieldType.schema && !fieldType.isNamed) {
      collectScopedFields(fieldType.schema, parentScope, result);
    }
  }
}
function collectReferenceableFields(schema) {
  const result = /* @__PURE__ */ new Set();
  walkForReferenceable(schema, result);
  return result;
}
function walkForReferenceable(schema, result) {
  for (const [fieldName, fieldType] of Object.entries(schema)) {
    if (fieldType.__metadata?.crossBlockReferenceable) {
      result.add(fieldName);
    }
    if (fieldType.schema) {
      walkForReferenceable(fieldType.schema, result);
    }
  }
}
function buildCapabilityNamespaces(schemaInfo) {
  const result = {
    invocationTarget: /* @__PURE__ */ new Set(),
    transitionTarget: /* @__PURE__ */ new Set()
  };
  for (const [key, rawFt] of Object.entries(schemaInfo.schema)) {
    const fieldType = resolveFieldType(rawFt);
    collectCapabilities(key, fieldType, result);
    if (fieldType.schema) {
      walkForCapabilities(fieldType.schema, result);
    }
  }
  return result;
}
function collectCapabilities(name, fieldType, result) {
  if (!fieldType.capabilities)
    return;
  for (const cap of fieldType.capabilities) {
    if (cap === "invocationTarget")
      result.invocationTarget.add(name);
    else if (cap === "transitionTarget")
      result.transitionTarget.add(name);
  }
}
function walkForCapabilities(schema, result) {
  for (const [fieldName, rawFt] of Object.entries(schema)) {
    const fieldType = resolveFieldType(rawFt);
    collectCapabilities(fieldName, fieldType, result);
    if (fieldType.schema) {
      walkForCapabilities(fieldType.schema, result);
    }
  }
}
function buildScopeNavigation(schemaInfo) {
  const registry = /* @__PURE__ */ new Map();
  for (const [key, rawFt] of Object.entries(schemaInfo.schema)) {
    const fieldType = resolveFieldType(rawFt);
    if (!(fieldType.isNamed || isCollectionField(fieldType)) || !fieldType.scopeAlias)
      continue;
    const existing = registry.get(fieldType.scopeAlias);
    if (existing) {
      if (!existing.rootKeys.includes(key))
        existing.rootKeys.push(key);
    } else {
      registry.set(fieldType.scopeAlias, { rootKeys: [key] });
    }
    if (fieldType.schema) {
      walkSchemaForNavigation(fieldType.schema, fieldType.scopeAlias, registry);
    }
  }
  return registry;
}
function walkSchemaForNavigation(schema, parentScope, registry) {
  for (const [, rawFt] of Object.entries(schema)) {
    const fieldType = resolveFieldType(rawFt);
    if ((fieldType.isNamed || isCollectionField(fieldType)) && fieldType.scopeAlias) {
      if (!registry.has(fieldType.scopeAlias)) {
        registry.set(fieldType.scopeAlias, {
          rootKeys: [],
          parentScope
        });
      }
      if (fieldType.schema) {
        walkSchemaForNavigation(fieldType.schema, fieldType.scopeAlias, registry);
      }
    } else if (fieldType.schema && !fieldType.isNamed) {
      walkSchemaForNavigation(fieldType.schema, parentScope, registry);
    }
  }
}
function buildNamespaceMetadata(schemaInfo, scopedNamespaces) {
  const { schema, aliases } = schemaInfo;
  const result = /* @__PURE__ */ new Map();
  for (const key of Object.keys(schema)) {
    if (aliases[key])
      continue;
    result.set(key, { kind: SymbolKind.Namespace });
  }
  for (const [ns, scopesRequired] of scopedNamespaces) {
    result.set(ns, {
      kind: SymbolKind.Namespace,
      scopesRequired
    });
  }
  return result;
}
function updateScopeContext(obj, ctx) {
  if (obj.__scope && typeof obj.__name === "string") {
    return { ...ctx, [obj.__scope]: obj.__name };
  }
  return ctx;
}
function findScopeBlock(ast, targetScope, scope, ctx) {
  const info = getScopeNavigation(ctx).get(targetScope);
  if (!info)
    return null;
  const targetName = scope[targetScope];
  if (!targetName)
    return null;
  if (!info.parentScope) {
    for (const rootKey of info.rootKeys) {
      for (const key of resolveNamespaceKeys(rootKey, ctx)) {
        const map = ast[key];
        if (isNamedMap(map)) {
          const block = map.get(targetName);
          if (isAstNodeLike(block))
            return block;
        }
      }
    }
    return null;
  }
  const parentBlock = findScopeBlock(ast, info.parentScope, scope, ctx);
  if (!parentBlock)
    return null;
  return findNamedBlockInDescendants(parentBlock, targetName);
}
function findNamedBlockInDescendants(container, name) {
  let deferred;
  for (const [key, val] of Object.entries(container)) {
    if (key.startsWith("__") || !val || typeof val !== "object")
      continue;
    if (isNamedMap(val)) {
      const entry = val.get(name);
      if (isAstNodeLike(entry))
        return entry;
    } else if (isAstNodeLike(val)) {
      if (val.__kind && !val.__scope) {
        (deferred ??= []).push(val);
      }
    }
  }
  if (deferred) {
    for (const child of deferred) {
      const found = findNamedBlockInDescendants(child, name);
      if (found)
        return found;
    }
  }
  return null;
}
function collectNamespaceMaps(container, namespace, result = []) {
  const direct = container[namespace];
  if (isNamedMap(direct))
    result.push(direct);
  for (const [key, val] of Object.entries(container)) {
    if (key.startsWith("__") || !val || typeof val !== "object")
      continue;
    if (isNamedMap(val))
      continue;
    if (isAstNodeLike(val) && val.__kind && !val.__scope) {
      collectNamespaceMaps(val, namespace, result);
    }
  }
  return result;
}

// ../language/dist/core/analysis/ast-utils.js
function isPositionInRange(line, character, range) {
  if (line < range.start.line || line > range.end.line)
    return false;
  if (line === range.start.line && character < range.start.character)
    return false;
  if (line === range.end.line && character >= range.end.character)
    return false;
  return true;
}
var MAX_LINE_LENGTH = 1e6;
function rangeSize(range) {
  const lines = range.end.line - range.start.line;
  if (lines === 0)
    return range.end.character - range.start.character;
  return lines * MAX_LINE_LENGTH + (range.end.character - range.start.character);
}
function computeDetail(obj, kind, cst) {
  if (kind === "VariableDeclaration" || kind === "ParameterDeclaration") {
    const parts = [];
    const modifier = obj.modifier;
    if (isAstNodeLike(modifier) && modifier.__cst) {
      const text = modifier.__cst.node.text?.trim();
      if (text)
        parts.push(text);
    }
    const typeVal = obj.type;
    if (isAstNodeLike(typeVal) && typeVal.__cst) {
      const text = typeVal.__cst.node.text?.trim();
      if (text)
        parts.push(text);
    }
    const defaultValue = obj.defaultValue;
    if (isAstNodeLike(defaultValue) && defaultValue.__cst) {
      const text = defaultValue.__cst.node.text?.trim();
      if (text)
        parts.push("= " + text);
    }
    return parts.length > 0 ? parts.join(" ") : void 0;
  }
  if (kind === "StringLiteral") {
    const value = obj.value;
    if (typeof value === "string") {
      return value.length > 60 ? value.slice(0, 60) + "..." : value;
    }
    return void 0;
  }
  if (kind === "TemplateExpression") {
    return getValueText(cst);
  }
  if (kind === "BooleanValue") {
    const value = obj.value;
    return value === true ? "True" : value === false ? "False" : void 0;
  }
  if (kind === "NumberValue") {
    const value = obj.value;
    return value != null ? String(value) : void 0;
  }
  if (kind === "ProcedureValue") {
    return "->";
  }
  const label = obj.label;
  if (label instanceof StringLiteral) {
    return label.value;
  }
  return void 0;
}
function getValueText(cst) {
  const node = cst.node;
  if (node.type === "mapping_element") {
    const valueNode = node.childForFieldName("value");
    return valueNode?.text?.trim();
  }
  const text = node.text?.trim();
  if (text && text.length > 80)
    return text.slice(0, 80) + "...";
  return text || void 0;
}
function findMappingElement(node) {
  let current = node;
  while (current) {
    if (current.type === "mapping_element")
      return current;
    current = current.parent;
  }
  return null;
}

// ../language/dist/core/analysis/symbols.js
var SymbolTag;
(function(SymbolTag2) {
  SymbolTag2[SymbolTag2["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
function getDocumentSymbols(ast) {
  const symbols = [];
  for (const [key, value] of Object.entries(ast)) {
    if (key.startsWith("__"))
      continue;
    if (value == null || typeof value !== "object")
      continue;
    if (isNamedMap(value)) {
      const mapSymbols = processMap(key, value, true);
      for (const sym of mapSymbols)
        symbols.push(sym);
      continue;
    }
    const symbol = extractSymbol(key, value);
    if (symbol)
      symbols.push(symbol);
  }
  const blockChildren = ast.__children;
  if (Array.isArray(blockChildren)) {
    for (const child of blockChildren) {
      if (isBlockChild(child) && child.__type === "untyped") {
        const sym = extractUntypedSymbol(child);
        if (sym)
          symbols.push(sym);
      }
    }
  }
  return symbols;
}
function processMap(key, map, isRoot) {
  const sym = map.__symbol;
  const cst = map.__cst;
  if (sym && cst) {
    const symbolKind = sym.kind;
    const { range, selectionRange } = computeRanges(cst);
    const detail = computeDetail(map, map.__kind, cst);
    if (sym.noRecurse) {
      return [
        {
          name: key,
          kind: symbolKind,
          range,
          selectionRange,
          ...detail ? { detail } : {}
        }
      ];
    }
    const children = [];
    for (const [entryName, entry] of map) {
      const entrySym = extractSymbol(entryName, entry);
      if (entrySym)
        children.push(entrySym);
    }
    return [
      {
        name: key,
        kind: symbolKind,
        range,
        selectionRange,
        ...detail ? { detail } : {},
        ...children.length > 0 ? { children } : {}
      }
    ];
  }
  if (isRoot) {
    const symbols = [];
    for (const [entryName, entry] of map) {
      const entrySym = extractSymbol(`${key} ${entryName}`, entry);
      if (entrySym)
        symbols.push(entrySym);
    }
    return symbols;
  }
  const containerSymbol = createMapContainerSymbol(key, map);
  return containerSymbol ? [containerSymbol] : [];
}
function extractSymbol(name, value) {
  if (!isAstNodeLike(value))
    return null;
  const obj = value;
  const sym = obj.__symbol;
  const cst = obj.__cst;
  if (!cst)
    return null;
  const symbolKind = sym?.kind ?? SymbolKind.Property;
  const { range, selectionRange } = computeRanges(cst);
  const detail = computeDetail(obj, obj.__kind, cst);
  if (!sym || sym.noRecurse) {
    return {
      name,
      kind: symbolKind,
      range,
      selectionRange,
      ...detail ? { detail } : {}
    };
  }
  const children = extractChildren2(obj);
  return {
    name,
    kind: symbolKind,
    range,
    selectionRange,
    ...detail ? { detail } : {},
    ...children.length > 0 ? { children } : {}
  };
}
function extractChildren2(obj) {
  const children = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("__"))
      continue;
    if (value == null || typeof value !== "object")
      continue;
    if (isNamedMap(value)) {
      const mapSymbols = processMap(key, value, false);
      for (const sym of mapSymbols)
        children.push(sym);
      continue;
    }
    const symbol = extractSymbol(key, value);
    if (symbol)
      children.push(symbol);
  }
  const blockChildren = obj.__children;
  if (Array.isArray(blockChildren)) {
    for (const child of blockChildren) {
      if (isBlockChild(child) && child.__type === "untyped") {
        const sym = extractUntypedSymbol(child);
        if (sym)
          children.push(sym);
      }
    }
  }
  return children;
}
function extractUntypedSymbol(block) {
  const cst = block.__cst;
  if (!cst)
    return null;
  const { range, selectionRange } = computeRanges(cst);
  const name = block.__blockName ? `${block.key} ${block.__blockName}` : block.key;
  const childSymbols = [];
  for (const child of block.__children) {
    if (isBlockChild(child)) {
      if (child.__type === "untyped") {
        const sym = extractUntypedSymbol(child);
        if (sym)
          childSymbols.push(sym);
      } else if (child.__type === "field") {
        const fc = child;
        const val = fc.value;
        const valCst = val && typeof val === "object" && "__cst" in val ? val.__cst : void 0;
        if (valCst) {
          const { range: r, selectionRange: sr } = computeRanges(valCst);
          childSymbols.push({
            name: fc.key,
            kind: SymbolKind.Property,
            range: r,
            selectionRange: sr
          });
        }
      }
    }
  }
  return {
    name,
    kind: SymbolKind.Property,
    range,
    selectionRange,
    ...childSymbols.length > 0 ? { children: childSymbols } : {}
  };
}
function createMapContainerSymbol(name, map) {
  const cst = map.__cst;
  const entryChildren = [];
  for (const [entryName, entry] of map) {
    const sym = extractSymbol(entryName, entry);
    if (sym)
      entryChildren.push(sym);
  }
  if (entryChildren.length === 0)
    return null;
  let range;
  let selectionRange;
  if (cst) {
    const ranges = computeRanges(cst);
    range = ranges.range;
    selectionRange = ranges.selectionRange;
  } else {
    range = {
      start: entryChildren[0].range.start,
      end: entryChildren[entryChildren.length - 1].range.end
    };
    selectionRange = range;
  }
  return {
    name,
    kind: SymbolKind.Namespace,
    range,
    selectionRange,
    children: entryChildren
  };
}
function computeRanges(cst) {
  const node = cst.node;
  if (node.type === "mapping_element") {
    const keyRange = getKeyRange(node);
    return {
      range: toRange(node),
      selectionRange: keyRange ?? toRange(node)
    };
  }
  const parent = node.parent;
  if (parent?.type === "mapping_element") {
    const keyRange = getKeyRange(parent);
    return {
      range: toRange(parent),
      selectionRange: keyRange ?? toRange(parent)
    };
  }
  return {
    range: cst.range,
    selectionRange: cst.range
  };
}
function getKeyRange(mappingElement) {
  const keyNode = mappingElement.childForFieldName("key");
  if (keyNode) {
    return toRange(keyNode);
  }
  return null;
}
function findNamespaceSymbol(children, namespace) {
  const direct = children.find((c) => c.name === namespace);
  if (direct)
    return direct;
  for (const child of children) {
    if (!child.children || child.kind !== SymbolKind.Namespace)
      continue;
    const found = findNamespaceSymbol(child.children, namespace);
    if (found)
      return found;
  }
  return void 0;
}
function resolveNamespace(symbols, namespace, ctx, scope) {
  if (scope) {
    const scopeChain = getScopeChain(scope, ctx);
    if (scopeChain.length > 0) {
      let currentChildren = symbols;
      for (const { level, info } of scopeChain) {
        const levelName = scope[level];
        let levelSym;
        if (!info.parentScope) {
          const keys = info.rootKeys.flatMap((k) => resolveNamespaceKeys(k, ctx));
          levelSym = currentChildren.find((s) => keys.some((k) => s.name === `${k} ${levelName}`));
        } else {
          for (const sym of currentChildren) {
            if (!sym.children)
              continue;
            const found = sym.children.find((c) => c.name === levelName);
            if (found) {
              levelSym = found;
              break;
            }
          }
        }
        if (!levelSym?.children)
          break;
        const nsSym = findNamespaceSymbol(levelSym.children, namespace);
        if (nsSym) {
          return (nsSym.children ?? []).map((c) => ({ name: c.name, symbol: c }));
        }
        currentChildren = levelSym.children;
      }
    }
  }
  const directSym = symbols.find((s) => s.name === namespace);
  if (directSym) {
    return (directSym.children ?? []).map((c) => ({ name: c.name, symbol: c }));
  }
  const prefixes = resolveNamespaceKeys(namespace, ctx).map((k) => k + " ");
  const promoted = [];
  for (const sym of symbols) {
    for (const prefix2 of prefixes) {
      if (sym.name.startsWith(prefix2)) {
        promoted.push({ name: sym.name.slice(prefix2.length), symbol: sym });
      }
    }
  }
  if (promoted.length > 0)
    return promoted;
  return null;
}
function getSymbolMembers(symbols, namespace, ctx, scope, position) {
  const entries = position ? resolveNamespaceBottomUp(symbols, namespace, position.line, position.character) : resolveNamespace(symbols, namespace, ctx, scope);
  return entries ? entries.map((e) => e.name) : null;
}
function getScopeChain(scope, ctx) {
  const nav = getScopeNavigation(ctx);
  const active = [];
  for (const [level, info] of nav) {
    if (!scope[level])
      continue;
    let depth = 0;
    let current = level;
    while (current) {
      const cur = nav.get(current);
      if (!cur?.parentScope)
        break;
      current = cur.parentScope;
      depth++;
    }
    active.push({ level, info, depth });
  }
  active.sort((a, b) => a.depth - b.depth);
  return active;
}
function getSymbolNamespaceEntries(symbols, namespace, ctx, scope, position) {
  if (position) {
    return resolveNamespaceBottomUp(symbols, namespace, position.line, position.character);
  }
  return resolveNamespace(symbols, namespace, ctx, scope);
}
function findSymbolEntry(symbols, namespace, name, ctx, scope, position) {
  const entries = getSymbolNamespaceEntries(symbols, namespace, ctx, scope, position);
  if (!entries)
    return null;
  return entries.find((e) => e.name === name)?.symbol ?? null;
}
function findContainingPath(symbols, line, character) {
  const path = [];
  let currentLevel = symbols;
  for (; ; ) {
    const containing = currentLevel.find((s) => isPositionInRange(line, character, s.range));
    if (!containing)
      break;
    path.push({ symbol: containing, siblings: currentLevel });
    if (!containing.children)
      break;
    currentLevel = containing.children;
  }
  return path;
}
function findNamespaceInLevel(siblings, namespace) {
  const nsSym = siblings.find((s) => s.name === namespace);
  if (nsSym) {
    return (nsSym.children ?? []).map((c) => ({ name: c.name, symbol: c }));
  }
  const prefix2 = namespace + " ";
  const promoted = [];
  for (const s of siblings) {
    if (s.name.startsWith(prefix2)) {
      promoted.push({ name: s.name.slice(prefix2.length), symbol: s });
    }
  }
  return promoted.length > 0 ? promoted : null;
}
function resolveNamespaceBottomUp(symbols, namespace, line, character) {
  const path = findContainingPath(symbols, line, character);
  for (let i = path.length - 1; i >= 0; i--) {
    const result = findNamespaceInLevel(path[i].siblings, namespace);
    if (result)
      return result;
  }
  if (path.length === 0) {
    return findNamespaceInLevel(symbols, namespace);
  }
  return null;
}

// ../language/dist/core/analysis/ast-walkers.js
function recurseAstChildren(value, recurse) {
  if (isNamedMap(value)) {
    for (const [k, v] of value) {
      recurse(k, v, value);
    }
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      recurse("", item, value);
    }
    return;
  }
  if (!isAstNodeLike(value))
    return;
  const children = value.__children;
  if (Array.isArray(children)) {
    const yieldedKeys = /* @__PURE__ */ new Set();
    for (const item of children) {
      if (!isBlockChild(item))
        continue;
      const child = item;
      switch (child.__type) {
        case "field":
          if (child.entryName) {
            if (!yieldedKeys.has(child.key)) {
              yieldedKeys.add(child.key);
              const map = value[child.key];
              if (map !== void 0)
                recurse(child.key, map, value);
            }
          } else {
            recurse(child.key, child.value, value);
          }
          break;
        case "map_entry":
          recurse(child.name, child.value, value);
          break;
        case "sequence_item":
          recurse("", child.value, value);
          break;
        case "value":
          recurse("value", child.value, value);
          break;
        case "statement":
          recurse("", child.value, value);
          break;
        case "untyped":
          recurse(child.key, child, value);
          break;
        case "error":
          break;
        default: {
          const _exhaustive = child;
          void _exhaustive;
        }
      }
    }
    return;
  }
  for (const [k, val] of Object.entries(value)) {
    if (k.startsWith("__"))
      continue;
    recurse(k, val, value);
  }
}
function forEachExpressionChild(obj, callback) {
  const kind = obj.__kind;
  switch (kind) {
    case "MemberExpression":
      callback(obj.object, "object", obj);
      break;
    case "SubscriptExpression":
      callback(obj.object, "object", obj);
      callback(obj.index, "index", obj);
      break;
    case "BinaryExpression":
    case "ComparisonExpression":
      callback(obj.left, "left", obj);
      callback(obj.right, "right", obj);
      break;
    case "UnaryExpression":
      callback(obj.operand, "operand", obj);
      break;
    case "ListLiteral": {
      const elements = obj.elements;
      if (Array.isArray(elements)) {
        for (const el of elements) {
          callback(el, "", obj);
        }
      }
      break;
    }
    case "DictLiteral": {
      const entries = obj.entries;
      if (Array.isArray(entries)) {
        for (const entry of entries) {
          if (isAstNodeLike(entry)) {
            callback(entry.key, "key", entry);
            callback(entry.value, "value", entry);
          }
        }
      }
      break;
    }
    case "TernaryExpression":
      callback(obj.consequence, "consequence", obj);
      callback(obj.condition, "condition", obj);
      callback(obj.alternative, "alternative", obj);
      break;
    case "CallExpression":
      callback(obj.func, "func", obj);
      if (Array.isArray(obj.args)) {
        for (const arg of obj.args) {
          callback(arg, "", obj);
        }
      }
      break;
    case "TemplateExpression": {
      const parts = obj.parts;
      if (Array.isArray(parts)) {
        for (const part of parts) {
          if (isAstNodeLike(part) && part.__kind === "TemplateInterpolation") {
            callback(part.expression, "expression", part);
          }
        }
      }
      break;
    }
  }
}
function dispatchAstChildren(value, ctx, onExpression, recurse) {
  if (Array.isArray(value)) {
    for (const item of value) {
      recurse(item, ctx, "", value);
    }
    return ctx;
  }
  if (!isAstNodeLike(value))
    return ctx;
  const newCtx = updateScopeContext(value, ctx);
  if (value.__kind && isExpressionKind(value.__kind)) {
    onExpression?.(value, newCtx);
    forEachExpressionChild(value, (child, childKey, childParent) => {
      recurse(child, newCtx, childKey, childParent);
    });
  } else {
    recurseAstChildren(value, (k, v, p) => {
      recurse(v, newCtx, k, p);
    });
  }
  return newCtx;
}
function walkAstExpressions(value, callback, ctx = {}, visited = /* @__PURE__ */ new Set()) {
  if (!value || typeof value !== "object")
    return;
  if (visited.has(value))
    return;
  visited.add(value);
  dispatchAstChildren(value, ctx, callback, (child, newCtx) => {
    walkAstExpressions(child, callback, newCtx, visited);
  });
}
function collectDiagnostics(value) {
  const diagnostics = [];
  collectDiagnosticsInner(value, diagnostics, /* @__PURE__ */ new Set());
  return diagnostics;
}
function collectDiagnosticsInner(value, diagnostics, visited) {
  if (!value || typeof value !== "object")
    return;
  if (visited.has(value))
    return;
  visited.add(value);
  if (isAstNodeLike(value)) {
    const nodeDiags = value.__diagnostics;
    if (Array.isArray(nodeDiags)) {
      for (const diag of nodeDiags) {
        diagnostics.push(diag);
      }
    }
  }
  recurseAstChildren(value, (_key, child) => {
    collectDiagnosticsInner(child, diagnostics, visited);
  });
}

// ../language/dist/core/analysis/lint.js
function storeKey(name) {
  return name;
}
var PassStore = class {
  data = /* @__PURE__ */ new Map();
  set(key, value) {
    if (this.data.has(key)) {
      throw new Error(`PassStore key '${key}' already set \u2014 cannot overwrite`);
    }
    this.data.set(key, value);
  }
  get(key) {
    return this.data.get(key);
  }
  has(key) {
    return this.data.has(key);
  }
  update(key, fn) {
    const current = this.get(key);
    if (current === void 0) {
      throw new Error(`PassStore key '${key}' not set \u2014 cannot update`);
    }
    this.data.set(key, fn(current));
  }
};
function each(key, selector) {
  return { __each: true, key, ...selector ? { selector } : {} };
}
function isEachDep(dep) {
  return typeof dep === "object" && dep !== null && "__each" in dep;
}
function defineRule(config2) {
  const requires = [];
  let eachName;
  let eachStoreKey;
  let eachSelector;
  for (const [name, dep] of Object.entries(config2.deps)) {
    if (isEachDep(dep)) {
      if (eachName !== void 0) {
        throw new Error(`defineRule('${config2.id}'): only one each() dep allowed, found '${eachName}' and '${name}'`);
      }
      eachName = name;
      eachStoreKey = dep.key;
      eachSelector = dep.selector;
      requires.push(dep.key);
    } else {
      requires.push(dep);
    }
  }
  return {
    id: storeKey(config2.id),
    description: config2.description,
    requires,
    run(store, _root) {
      const resolved = {};
      for (const [name, dep] of Object.entries(config2.deps)) {
        if (!isEachDep(dep)) {
          resolved[name] = store.get(dep);
        }
      }
      if (eachName && eachStoreKey) {
        const raw = store.get(eachStoreKey);
        if (raw == null)
          return;
        const items = eachSelector ? eachSelector(raw) : Array.isArray(raw) ? raw : [];
        for (const item of items) {
          config2.run({ ...resolved, [eachName]: item });
        }
      } else {
        config2.run(resolved);
      }
    }
  };
}
var DependencyResolutionError = class extends Error {
  missingDependencies;
  cyclicDependencies;
  constructor(message, missingDependencies, cyclicDependencies) {
    super(message);
    this.missingDependencies = missingDependencies;
    this.cyclicDependencies = cyclicDependencies;
    this.name = "DependencyResolutionError";
  }
};
function partitionPasses(passes) {
  return {
    visitVariables: passes.filter((p) => p.visitVariables),
    visitExpression: passes.filter((p) => p.visitExpression),
    enterNode: passes.filter((p) => p.enterNode),
    exitNode: passes.filter((p) => p.exitNode)
  };
}
var schemaContextKey = storeKey("schema-context");
var LintEngine = class {
  passes = /* @__PURE__ */ new Map();
  disabled = /* @__PURE__ */ new Set();
  source;
  constructor(options) {
    this.source = options?.source ?? "lint";
    for (const p of options?.passes ?? [])
      this.addPass(p);
  }
  /** Register a pass. Throws on duplicate id. */
  addPass(pass) {
    if (this.passes.has(pass.id)) {
      throw new Error(`Duplicate lint id: '${pass.id}'`);
    }
    this.passes.set(pass.id, pass);
    return this;
  }
  /** Disable a pass by id. */
  disable(id) {
    if (!this.passes.has(id)) {
      throw new Error(`Cannot disable unknown lint id: '${id}'`);
    }
    this.disabled.add(id);
    return this;
  }
  /** Re-enable a previously disabled pass. */
  enable(id) {
    if (!this.passes.has(id)) {
      throw new Error(`Cannot enable unknown lint id: '${id}'`);
    }
    this.disabled.delete(id);
    return this;
  }
  /**
   * Run all enabled passes against the AST.
   *
   * Mutates the AST by clearing diagnostics with this engine's source tag
   * during the walk phase, ensuring re-runs produce fresh results.
   */
  run(root, ctx) {
    const store = new PassStore();
    store.set(schemaContextKey, ctx);
    const systemDiagnostics = [];
    const failed = /* @__PURE__ */ new Set();
    const enabled = [...this.passes.values()].filter((p) => !this.disabled.has(p.id));
    for (const pass of enabled) {
      if (pass.init) {
        try {
          pass.init();
        } catch (error) {
          failed.add(pass.id);
          systemDiagnostics.push(this.systemDiagnostic(`Pass '${pass.id}' init failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
        }
      }
    }
    const active = enabled.filter((p) => !failed.has(p.id));
    const sets = partitionPasses(active);
    this.dispatchTargetedHooks(root, sets, failed, systemDiagnostics);
    this.walkNode(root, sets, {}, "", void 0, /* @__PURE__ */ new Set(), failed, systemDiagnostics);
    const finalizePasses = active.filter((p) => p.finalize);
    const finalizeOrder = this.sortFinalize(finalizePasses, failed);
    for (const pass of finalizeOrder) {
      if (failed.has(pass.id))
        continue;
      const missingDep = pass.finalizeAfter?.find((dep) => !store.has(dep));
      if (missingDep) {
        failed.add(pass.id);
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${pass.id}' skipped: required data '${missingDep}' not available`, "lint-pass-skipped"));
        continue;
      }
      try {
        pass.finalize(store, root);
      } catch (error) {
        failed.add(pass.id);
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${pass.id}' finalize failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
      }
    }
    const runPasses = active.filter((p) => p.run);
    for (const pass of runPasses) {
      if (failed.has(pass.id))
        continue;
      const missingKey = pass.requires?.find((key) => !store.has(key));
      if (missingKey) {
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${pass.id}' skipped: required data '${missingKey}' not available`, "lint-pass-skipped"));
        continue;
      }
      try {
        pass.run(store, root);
      } catch (error) {
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${pass.id}' run failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
      }
    }
    const nodeDiagnostics = collectDiagnostics(root);
    return {
      diagnostics: [...nodeDiagnostics, ...systemDiagnostics],
      store
    };
  }
  /**
   * Dispatch targeted hooks (visitVariables) at root level.
   * Gives passes access to specific AST regions without enterNode/exitNode.
   */
  dispatchTargetedHooks(root, sets, failed, systemDiagnostics) {
    if (sets.visitVariables.length > 0) {
      const varsMap = root.variables;
      if (isNamedMap(varsMap)) {
        for (const p of sets.visitVariables) {
          if (failed.has(p.id))
            continue;
          try {
            p.visitVariables(varsMap);
          } catch (error) {
            failed.add(p.id);
            systemDiagnostics.push(this.systemDiagnostic(`Pass '${p.id}' visitVariables failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
          }
        }
      }
    }
  }
  /**
   * Recursive walk dispatching to all pass visitors.
   * Also clears lint diagnostics from previous runs.
   */
  walkNode(value, sets, ctx, key, parent, visited, failed, systemDiagnostics) {
    if (!value || typeof value !== "object")
      return;
    if (visited.has(value))
      return;
    visited.add(value);
    if (Array.isArray(value)) {
      for (const item of value) {
        this.walkNode(item, sets, ctx, "", value, visited, failed, systemDiagnostics);
      }
      return;
    }
    if (!isAstNodeLike(value))
      return;
    const diags = value.__diagnostics;
    if (Array.isArray(diags)) {
      value.__diagnostics = diags.filter((d) => d.source !== this.source);
    }
    for (const p of sets.enterNode) {
      if (failed.has(p.id))
        continue;
      try {
        p.enterNode(key, value, parent);
      } catch (error) {
        failed.add(p.id);
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${p.id}' enterNode failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
      }
    }
    dispatchAstChildren(value, ctx, (exprObj, exprCtx) => {
      for (const p of sets.visitExpression) {
        if (failed.has(p.id))
          continue;
        try {
          p.visitExpression(exprObj, exprCtx);
        } catch (error) {
          failed.add(p.id);
          systemDiagnostics.push(this.systemDiagnostic(`Pass '${p.id}' visitExpression failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
        }
      }
    }, (child, childCtx, childKey, childParent) => {
      this.walkNode(child, sets, childCtx, childKey, childParent, visited, failed, systemDiagnostics);
    });
    for (const p of sets.exitNode) {
      if (failed.has(p.id))
        continue;
      try {
        p.exitNode(key, value, parent);
      } catch (error) {
        failed.add(p.id);
        systemDiagnostics.push(this.systemDiagnostic(`Pass '${p.id}' exitNode failed: ${error instanceof Error ? error.message : String(error)}`, "lint-pass-error"));
      }
    }
  }
  /** Topologically sort passes for finalize() ordering using Kahn's algorithm. */
  sortFinalize(passes, failed) {
    const active = passes.filter((p) => !failed.has(p.id));
    if (active.length === 0)
      return [];
    const byId = /* @__PURE__ */ new Map();
    for (const p of active)
      byId.set(p.id, p);
    const inDegree = /* @__PURE__ */ new Map();
    const adjacency = /* @__PURE__ */ new Map();
    for (const p of active) {
      inDegree.set(p.id, 0);
      adjacency.set(p.id, /* @__PURE__ */ new Set());
    }
    for (const p of active) {
      for (const depKey of p.finalizeAfter ?? []) {
        if (byId.has(depKey)) {
          adjacency.get(depKey).add(p.id);
          inDegree.set(p.id, (inDegree.get(p.id) ?? 0) + 1);
        }
      }
    }
    const queue = [];
    for (const [id, degree] of inDegree) {
      if (degree === 0)
        queue.push(id);
    }
    const sorted = [];
    let head = 0;
    while (head < queue.length) {
      const id = queue[head++];
      sorted.push(byId.get(id));
      for (const dependent of adjacency.get(id) ?? []) {
        const newDegree = (inDegree.get(dependent) ?? 1) - 1;
        inDegree.set(dependent, newDegree);
        if (newDegree === 0)
          queue.push(dependent);
      }
    }
    if (sorted.length !== active.length) {
      const unsorted = active.filter((p) => !sorted.some((s) => s.id === p.id)).map((p) => p.id);
      throw new DependencyResolutionError(`Cyclic finalize dependencies among: ${unsorted.join(", ")}`, void 0, unsorted);
    }
    return sorted;
  }
  systemDiagnostic(message, code) {
    return {
      range: {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      },
      message,
      severity: DiagnosticSeverity.Information,
      code,
      source: this.source
    };
  }
};

// ../language/dist/core/analysis/position-index.js
var positionIndexKey = storeKey("position-index");
function queryDefinitionAtPosition(index, line, character) {
  let best = null;
  let bestSize = Infinity;
  for (const entry of index.definitions) {
    if (!isPositionInRange(line, character, entry.keyRange))
      continue;
    const size = rangeSize(entry.keyRange);
    if (size < bestSize) {
      best = entry;
      bestSize = size;
    }
  }
  return best;
}
function queryScopeAtPosition(index, line, character) {
  let best = null;
  let bestSize = Infinity;
  for (const entry of index.scopes) {
    if (!isPositionInRange(line, character, entry.range))
      continue;
    const size = rangeSize(entry.range);
    if (size < bestSize) {
      best = entry;
      bestSize = size;
    }
  }
  return best?.scope ?? {};
}

// ../language/dist/core/analysis/references.js
function findDefinitionAtPosition(ast, line, character, ctx, symbols, index) {
  const ref = findRefExpressionAtPosition(ast, line, character, index);
  if (ref) {
    return resolveWithReason(ast, ref, ctx, symbols);
  }
  const def = findDefinitionKeyAtPosition(ast, line, character, index);
  if (def) {
    return resolveWithReason(ast, def, ctx, symbols);
  }
  return {
    definition: null,
    reason: "Cursor is not on a reference or definition key"
  };
}
function resolveWithReason(ast, ref, ctx, symbols) {
  const scopesRequired = getScopedNamespaces(ctx).get(ref.namespace);
  if (scopesRequired && !activeScopeForNamespace(scopesRequired, ref.scope)) {
    const list = [...scopesRequired].join(" or ");
    return {
      definition: null,
      reason: `'@${ref.namespace}.${ref.name}' requires ${list} scope (cursor is outside a ${list} block)`
    };
  }
  const definition = resolveReference(ast, ref.namespace, ref.name, ctx, ref.scope, symbols);
  if (!definition) {
    return {
      definition: null,
      reason: `'${ref.name}' is not defined in namespace '${ref.namespace}'`
    };
  }
  return { definition };
}
function findReferencesAtPosition(ast, line, character, includeDeclaration, ctx, symbols, index) {
  const ref = findRefExpressionAtPosition(ast, line, character, index);
  const def = ref ? null : findDefinitionKeyAtPosition(ast, line, character, index);
  const target = ref ?? def;
  if (!target)
    return [];
  return findAllReferences(ast, target.namespace, target.name, ctx, target.scope, includeDeclaration, symbols);
}
function resolveReference(ast, namespace, name, ctx, scope, symbols) {
  if (symbols) {
    const entry = findSymbolEntry(symbols, namespace, name, ctx, scope);
    if (entry) {
      return {
        namespace,
        name,
        symbolKind: entry.kind,
        definitionRange: entry.selectionRange,
        fullRange: entry.range
      };
    }
  }
  const scopesRequired = getScopedNamespaces(ctx).get(namespace);
  const activeScope = activeScopeForNamespace(scopesRequired, scope);
  if (activeScope && scope) {
    return resolveFromScopedChild(ast, namespace, name, activeScope, scope, ctx);
  }
  return resolveFromRoot(ast, namespace, name, ctx);
}
function findAllReferences(ast, namespace, name, ctx, scope, includeDeclaration = true, symbols) {
  const occurrences = [];
  const scopesRequired = getScopedNamespaces(ctx).get(namespace);
  const activeScope = activeScopeForNamespace(scopesRequired, scope);
  walkAstExpressions(ast, (expr, walkCtx) => {
    const decomposed = decomposeExpression(expr, walkCtx);
    if (!decomposed)
      return;
    if (decomposed.namespace !== namespace || decomposed.name !== name)
      return;
    if (activeScope && scope) {
      if (walkCtx[activeScope] !== scope[activeScope])
        return;
    }
    occurrences.push({
      range: decomposed.range,
      nameRange: decomposed.nameRange,
      isDefinition: false
    });
  });
  if (includeDeclaration) {
    const def = resolveReference(ast, namespace, name, ctx, scope, symbols);
    if (def) {
      occurrences.push({
        range: def.definitionRange,
        nameRange: def.definitionRange,
        isDefinition: true
      });
    }
  }
  return occurrences;
}
function findRefExpressionAtPosition(ast, line, character, index) {
  if (index) {
    let best2 = null;
    let bestSize2 = Infinity;
    for (const entry of index.expressions) {
      if (!isPositionInRange(line, character, entry.range))
        continue;
      const decomposed = decomposeExpression(entry.expr, entry.scope);
      if (!decomposed)
        continue;
      const size = rangeSize(entry.range);
      if (size < bestSize2) {
        best2 = decomposed;
        bestSize2 = size;
      }
    }
    return best2;
  }
  let best = null;
  let bestSize = Infinity;
  walkAstExpressions(ast, (expr, ctx) => {
    const cst = expr.__cst;
    if (!cst)
      return;
    if (!isPositionInRange(line, character, cst.range))
      return;
    const decomposed = decomposeExpression(expr, ctx);
    if (!decomposed)
      return;
    const size = rangeSize(cst.range);
    if (size < bestSize) {
      best = decomposed;
      bestSize = size;
    }
  });
  return best;
}
function findDefinitionKeyAtPosition(ast, line, character, index) {
  if (index) {
    const entry = queryDefinitionAtPosition(index, line, character);
    if (!entry)
      return null;
    return {
      namespace: entry.namespace,
      name: entry.name,
      range: entry.fullRange,
      nameRange: entry.keyRange,
      scope: entry.scope
    };
  }
  let best = null;
  let bestSize = Infinity;
  walkDefinitionKeys(ast, (namespace, name, keyRange, fullRange, ctx) => {
    if (!isPositionInRange(line, character, keyRange))
      return;
    const size = rangeSize(keyRange);
    if (size < bestSize) {
      best = {
        namespace,
        name,
        range: fullRange,
        nameRange: keyRange,
        scope: ctx
      };
      bestSize = size;
    }
  });
  return best;
}
function walkDefinitionKeys(ast, callback) {
  walkDefinitionKeysInner(ast, callback, {}, void 0, /* @__PURE__ */ new Set());
}
function walkDefinitionKeysInner(value, callback, ctx, parentNamespace, visited) {
  if (!value || typeof value !== "object")
    return;
  if (visited.has(value))
    return;
  visited.add(value);
  if (isNamedMap(value)) {
    for (const [entryName, entry] of value) {
      if (!isAstNodeLike(entry))
        continue;
      const entryCst = entry.__cst;
      if (!entryCst)
        continue;
      const entryCtx = updateScopeContext(entry, ctx);
      const ns = parentNamespace ?? "";
      if (ns) {
        const { range, selectionRange } = computeRanges(entryCst);
        callback(ns, entryName, selectionRange, range, entryCtx);
      }
      walkDefinitionKeysInner(entry, callback, entryCtx, void 0, visited);
    }
    return;
  }
  if (!isAstNodeLike(value))
    return;
  const newCtx = updateScopeContext(value, ctx);
  for (const [key, val] of Object.entries(value)) {
    if (key.startsWith("__"))
      continue;
    if (!val || typeof val !== "object")
      continue;
    if (isNamedMap(val)) {
      walkDefinitionKeysInner(val, callback, newCtx, key, visited);
    } else if (isAstNodeLike(val)) {
      if (!parentNamespace && val.__kind && val.__symbol) {
        walkDefinitionKeysInner(val, callback, newCtx, key, visited);
      } else if (parentNamespace) {
        const valCst = val.__cst;
        if (valCst) {
          const mappingNode = findMappingElement(valCst.node);
          const { range, selectionRange } = mappingNode ? computeRanges({ ...valCst, node: mappingNode }) : computeRanges(valCst);
          callback(parentNamespace, key, selectionRange, range, newCtx);
        }
        walkDefinitionKeysInner(val, callback, newCtx, void 0, visited);
      } else {
        walkDefinitionKeysInner(val, callback, newCtx, void 0, visited);
      }
    }
  }
}
function resolveFromRoot(ast, namespace, name, ctx) {
  for (const key of resolveNamespaceKeys(namespace, ctx)) {
    const container = astField(ast, key);
    if (!container)
      continue;
    if (isNamedMap(container)) {
      const entry = findMapEntry(container, name, namespace);
      if (entry)
        return entry;
    } else if (typeof container === "object") {
      const entry = findBlockProperty(container, name, namespace);
      if (entry)
        return entry;
    }
  }
  return null;
}
function resolveFromScopedChild(ast, namespace, name, targetScope, scope, ctx) {
  const scopeBlock = findScopeBlock(ast, targetScope, scope, ctx);
  if (!scopeBlock)
    return null;
  for (const map of collectNamespaceMaps(scopeBlock, namespace)) {
    const entry = findMapEntry(map, name, namespace);
    if (entry)
      return entry;
  }
  return null;
}
function findMapEntry(container, name, namespace) {
  if (!isNamedMap(container))
    return null;
  const entry = container.get(name);
  if (!isAstNodeLike(entry))
    return null;
  const cst = entry.__cst;
  if (!cst)
    return null;
  const sym = entry.__symbol;
  const symbolKind = sym?.kind ?? SymbolKind.Property;
  const { range, selectionRange } = computeRanges(cst);
  return {
    namespace,
    name,
    symbolKind,
    definitionRange: selectionRange,
    fullRange: range
  };
}
function findBlockProperty(container, name, namespace) {
  if (!isAstNodeLike(container) || isNamedMap(container))
    return null;
  if (name.startsWith("__"))
    return null;
  const field = container[name];
  if (!isAstNodeLike(field))
    return null;
  const cst = field.__cst;
  if (!cst)
    return null;
  const sym = field.__symbol;
  const symbolKind = sym?.kind ?? SymbolKind.Property;
  const mappingNode = findMappingElement(cst.node);
  const { range, selectionRange } = mappingNode ? computeRanges({ ...cst, node: mappingNode }) : computeRanges(cst);
  return {
    namespace,
    name,
    symbolKind,
    definitionRange: selectionRange,
    fullRange: range
  };
}
function decomposeExpression(expr, ctx) {
  const decomposed = decomposeAtMemberExpression(expr);
  if (!decomposed)
    return null;
  const cst = expr.__cst;
  if (!cst)
    return null;
  const { range } = cst;
  const propertyNode = cst.node.namedChildren.find((n) => n.type === "id");
  const nameRange = propertyNode ? toRange(propertyNode) : {
    start: {
      line: range.end.line,
      character: range.end.character - decomposed.property.length
    },
    end: range.end
  };
  return {
    namespace: decomposed.namespace,
    name: decomposed.property,
    range,
    nameRange,
    scope: ctx
  };
}

// ../language/dist/core/analysis/snippet-gen.js
function generateFieldSnippet(fieldName, fieldType, opts) {
  const ft = resolveFieldType2(fieldType);
  if (isSequence(ft))
    return void 0;
  if (isPrimitive(ft) && !isTypedMap(ft))
    return void 0;
  const tabSize = opts?.tabSize ?? 4;
  const counter = { value: 1 };
  if (isTypedMap(ft)) {
    return snippetForTypedMap(fieldName, ft, 0, counter, tabSize);
  }
  if (isCollection(ft)) {
    return snippetForCollection(fieldName, ft, 0, counter, tabSize);
  }
  if (ft.schema) {
    return snippetForBlock(fieldName, ft, 0, counter, 0, false, tabSize);
  }
  return void 0;
}
function snippetForBlock(name, ft, indent, counter, depth, namedEntryMode, tabSize) {
  const pad = " ".repeat(indent * tabSize);
  const lines = [`${pad}${name}:`];
  if (!ft.schema) {
    lines[0] = `${pad}${name}: \${${counter.value++}}`;
    return lines.join("\n") + "$0";
  }
  const childLines = generateChildLines(ft.schema, indent + 1, counter, depth + 1, namedEntryMode, tabSize);
  if (childLines.length === 0) {
    const childPad = " ".repeat((indent + 1) * tabSize);
    lines.push(`${childPad}\${${counter.value++}}`);
  } else {
    lines.push(...childLines);
  }
  return depth === 0 ? lines.join("\n") + "$0" : lines.join("\n");
}
function snippetForCollection(name, ft, indent, counter, tabSize) {
  const pad = " ".repeat(indent * tabSize);
  const entryBlock = getEntryBlock(ft);
  if (!entryBlock?.schema) {
    return `${pad}${name} \${${counter.value++}:Name}:
${pad}${" ".repeat(tabSize)}\${${counter.value++}}$0`;
  }
  const lines = [`${pad}${name} \${${counter.value++}:Name}:`];
  const childLines = generateChildLines(
    entryBlock.schema,
    indent + 1,
    counter,
    1,
    true,
    // namedEntryMode — only required fields
    tabSize
  );
  if (childLines.length === 0) {
    const childPad = " ".repeat((indent + 1) * tabSize);
    lines.push(`${childPad}\${${counter.value++}}`);
  } else {
    lines.push(...childLines);
  }
  return lines.join("\n") + "$0";
}
function snippetForTypedMap(name, ft, indent, counter, tabSize) {
  const pad = " ".repeat(indent * tabSize);
  const childPad = " ".repeat((indent + 1) * tabSize);
  const propPad = " ".repeat((indent + 2) * tabSize);
  const lines = [`${pad}${name}:`];
  const entryParts = [];
  entryParts.push(`\${${counter.value++}:name}:`);
  const modifiers = keywordNames(getTypedMapModifiers(ft));
  if (modifiers.length > 0) {
    entryParts.push(`\${${counter.value++}|${modifiers.join(",")}|}`);
  }
  const primitiveTypes = keywordNames(getTypedMapPrimitiveTypes(ft));
  if (primitiveTypes.length > 0) {
    const types = primitiveTypes.slice(0, 8);
    entryParts.push(`\${${counter.value++}|${types.join(",")}|}`);
  }
  lines.push(`${childPad}${entryParts.join(" ")}`);
  const propsSchema = getTypedMapPropertiesSchema(ft);
  if (propsSchema) {
    for (const [fieldName, childFt] of Object.entries(propsSchema)) {
      const resolved = resolveFieldType2(childFt);
      if (fieldName.startsWith("__"))
        continue;
      if (fieldName === "description" || resolved.__metadata?.required) {
        lines.push(`${propPad}${fieldName}: ${primitiveSnippetValue(resolved, counter)}`);
      }
    }
  }
  return lines.join("\n") + "$0";
}
function generateChildLines(schema, indent, counter, depth, namedEntryMode, tabSize) {
  const lines = [];
  for (const [fieldName, rawFt] of Object.entries(schema)) {
    if (fieldName.startsWith("__"))
      continue;
    const ft = resolveFieldType2(rawFt);
    if (!shouldIncludeField(ft, depth, namedEntryMode))
      continue;
    if (isSequence(ft) || isCollection(ft) || isTypedMap(ft)) {
      continue;
    }
    if (ft.schema) {
      lines.push(snippetForBlock(fieldName, ft, indent, counter, depth, namedEntryMode, tabSize));
    } else if (isPrimitive(ft)) {
      lines.push(primitiveSnippetLine(fieldName, ft, indent, counter, tabSize));
    }
  }
  return lines;
}
function shouldIncludeField(ft, depth, namedEntryMode) {
  const required = ft.__metadata?.required === true;
  if (required && depth <= 2)
    return true;
  if (namedEntryMode)
    return false;
  if (depth === 1) {
    if (isPrimitive(ft))
      return true;
    if (ft.schema && hasRequiredChild(ft))
      return true;
    return false;
  }
  return false;
}
function hasRequiredChild(ft) {
  if (!ft.schema)
    return false;
  for (const childFt of Object.values(ft.schema)) {
    const resolved = resolveFieldType2(childFt);
    if (resolved.__metadata?.required)
      return true;
  }
  return false;
}
function primitiveSnippetLine(name, ft, indent, counter, tabSize) {
  const pad = " ".repeat(indent * tabSize);
  if (isProcedureValue(ft)) {
    const childPad = " ".repeat((indent + 1) * tabSize);
    const placeholder = placeholderFromMeta(ft) ?? "instructions";
    if (ft.__metadata?.omitArrow) {
      return `${pad}${name}:
${childPad}\${${counter.value++}:${escapeSnippetText(placeholder)}}`;
    }
    return `${pad}${name}: ->
${childPad}\${${counter.value++}:${escapeSnippetText(placeholder)}}`;
  }
  return `${pad}${name}: ${primitiveSnippetValue(ft, counter)}`;
}
function primitiveSnippetValue(ft, counter) {
  if (isStringValue(ft)) {
    const placeholder2 = placeholderFromMeta(ft) ?? "value";
    return `"\${${counter.value++}:${escapeSnippetText(placeholder2)}}"`;
  }
  if (isBooleanValue(ft)) {
    return `\${${counter.value++}:True}`;
  }
  if (isNumberValue(ft)) {
    return `\${${counter.value++}:0}`;
  }
  const placeholder = placeholderFromMeta(ft) ?? "value";
  return `\${${counter.value++}:${escapeSnippetText(placeholder)}}`;
}
function resolveFieldType2(ft) {
  return Array.isArray(ft) ? ft[0] : ft;
}
function isPrimitive(ft) {
  return ft.__fieldKind === "Primitive";
}
function isSequence(ft) {
  return ft.__fieldKind === "Sequence";
}
function isStringValue(ft) {
  return ft.__fieldKind === "Primitive" && Array.isArray(ft.__accepts) && ft.__accepts.includes("StringLiteral");
}
function isBooleanValue(ft) {
  return ft.__fieldKind === "Primitive" && Array.isArray(ft.__accepts) && ft.__accepts.includes("BooleanLiteral");
}
function isNumberValue(ft) {
  return ft.__fieldKind === "Primitive" && Array.isArray(ft.__accepts) && ft.__accepts.includes("NumberLiteral");
}
function isProcedureValue(ft) {
  return ft.__fieldKind === "Primitive" && !ft.__accepts?.length;
}
function isTypedMap(ft) {
  return ft.__isTypedMap === true;
}
function isCollection(ft) {
  return ft.__isCollection === true;
}
function getEntryBlock(ft) {
  const rec = ft;
  if ("entryBlock" in rec && rec.entryBlock != null) {
    const eb = rec.entryBlock;
    if (typeof eb === "function" || typeof eb === "object") {
      return eb;
    }
  }
  return void 0;
}
function getTypedMapModifiers(ft) {
  return ft.__modifiers ?? [];
}
function getTypedMapPrimitiveTypes(ft) {
  return ft.__primitiveTypes ?? [];
}
function getTypedMapPropertiesSchema(ft) {
  return ft.propertiesSchema ?? void 0;
}
function escapeSnippetText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\$/g, "\\$").replace(/}/g, "\\}").replace(/"/g, "'");
}
function placeholderFromMeta(ft) {
  const desc = ft.__metadata?.description;
  if (!desc)
    return void 0;
  const firstSentence = desc.split(/\.\s/)[0];
  if (firstSentence.length <= 50)
    return firstSentence.replace(/\.$/, "");
  return firstSentence.slice(0, 47) + "...";
}

// ../language/dist/core/analysis/completions.js
function findEnclosingScope(ast, line, character, index) {
  if (index) {
    return queryScopeAtPosition(index, line, character);
  }
  const scope = {};
  walkScopeBlocks(ast, line, character, scope, /* @__PURE__ */ new Set());
  return scope;
}
function walkScopeBlocks(value, line, character, scope, visited) {
  if (!value || typeof value !== "object")
    return;
  if (visited.has(value))
    return;
  visited.add(value);
  if (isNamedMap(value)) {
    for (const [name, entry] of value) {
      if (!isAstNodeLike(entry))
        continue;
      const cst2 = entry.__cst;
      if (!cst2 || !isPositionInRange(line, character, cst2.range))
        continue;
      const blockScope = entry.__scope;
      if (blockScope && typeof entry.__name === "string") {
        scope[blockScope] = name;
      }
      recurseAstChildren(entry, (_k, child) => {
        walkScopeBlocks(child, line, character, scope, visited);
      });
      return;
    }
    return;
  }
  if (!isAstNodeLike(value))
    return;
  const cst = value.__cst;
  if (cst && !isPositionInRange(line, character, cst.range))
    return;
  recurseAstChildren(value, (_k, child) => {
    walkScopeBlocks(child, line, character, scope, visited);
  });
}
function getAvailableNamespaces(ctx, scope) {
  const candidates = [];
  for (const [ns, meta] of getNamespaceMetadata(ctx)) {
    if (meta.scopesRequired && !activeScopeForNamespace(meta.scopesRequired, scope)) {
      continue;
    }
    candidates.push({
      name: ns,
      kind: meta.kind,
      detail: meta.scopesRequired ? `(scoped to ${[...meta.scopesRequired].join(" or ")})` : void 0
    });
  }
  return candidates;
}
function getCompletionCandidates(ast, namespace, ctx, scope, symbols, line, character) {
  let effectiveScope = scope;
  if (line !== void 0 && character !== void 0 && ctx.scopedNamespaces.has(namespace) && ctx.colinearResolvedScopes.has(namespace)) {
    const scopesRequired2 = ctx.scopedNamespaces.get(namespace);
    const activeScope2 = activeScopeForNamespace(scopesRequired2, scope);
    const override = findNestedRunSetTarget(ast, line, character);
    if (activeScope2 && override !== void 0) {
      effectiveScope = { ...scope ?? {}, [activeScope2]: override };
    }
  }
  if (symbols) {
    const entries = getSymbolNamespaceEntries(symbols, namespace, ctx, effectiveScope);
    if (entries) {
      return entries.map(({ name, symbol }) => ({
        name,
        kind: symbol.kind,
        detail: symbol.detail
      }));
    }
  }
  const scopesRequired = getScopedNamespaces(ctx).get(namespace);
  const activeScope = activeScopeForNamespace(scopesRequired, effectiveScope);
  if (activeScope && effectiveScope) {
    return getScopedChildCandidates(ast, namespace, activeScope, effectiveScope, ctx);
  }
  const rootCandidates = getRootCandidates(ast, namespace, ctx);
  if (rootCandidates.length > 0)
    return rootCandidates;
  const globalMembers = ctx.globalScopes.get(namespace);
  if (globalMembers) {
    return [...globalMembers].map((member) => ({
      name: member,
      kind: SymbolKind.Property
    }));
  }
  return [];
}
function findNestedRunSetTarget(ast, line, character) {
  return walkForNestedRunSet(ast, line, character, void 0, /* @__PURE__ */ new Set());
}
function walkForNestedRunSet(value, line, character, enclosingRunTarget, visited) {
  if (!value || typeof value !== "object")
    return void 0;
  if (visited.has(value))
    return void 0;
  visited.add(value);
  if (isNamedMap(value)) {
    for (const [, entry] of value) {
      if (!isAstNodeLike(entry))
        continue;
      const cst2 = entry.__cst;
      if (!cst2 || !isPositionInRange(line, character, cst2.range))
        continue;
      const result2 = walkForNestedRunSet(entry, line, character, enclosingRunTarget, visited);
      if (result2 !== void 0)
        return result2;
    }
    return void 0;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const result2 = walkForNestedRunSet(item, line, character, enclosingRunTarget, visited);
      if (result2 !== void 0)
        return result2;
    }
    return void 0;
  }
  if (!isAstNodeLike(value))
    return void 0;
  const cst = value.__cst;
  if (cst && !isPositionInRange(line, character, cst.range))
    return void 0;
  if (value.__kind === "SetClause" && enclosingRunTarget !== void 0) {
    return enclosingRunTarget;
  }
  let childRunTarget = enclosingRunTarget;
  if (value.__kind === "RunStatement") {
    const target = value.target;
    if (target && typeof target === "object") {
      const ref = decomposeAtMemberExpression(target);
      if (ref) {
        childRunTarget = ref.property;
      }
    }
  }
  let result;
  recurseAstChildren(value, (_k, child) => {
    if (result !== void 0)
      return;
    const sub = walkForNestedRunSet(child, line, character, childRunTarget, visited);
    if (sub !== void 0)
      result = sub;
  });
  return result;
}
function getRootCandidates(ast, namespace, ctx) {
  const candidates = [];
  for (const key of resolveNamespaceKeys(namespace, ctx)) {
    const container = astField(ast, key);
    if (isNamedMap(container)) {
      collectMapCandidates(container, candidates);
    } else if (container && typeof container === "object") {
      collectBlockCandidates(container, candidates);
    }
  }
  return candidates;
}
function getScopedChildCandidates(ast, namespace, targetScope, scope, ctx) {
  const scopeBlock = findScopeBlock(ast, targetScope, scope, ctx);
  if (!scopeBlock)
    return [];
  const candidates = [];
  for (const map of collectNamespaceMaps(scopeBlock, namespace)) {
    collectMapCandidates(map, candidates);
  }
  return candidates;
}
function collectMapCandidates(container, candidates) {
  if (!isNamedMap(container))
    return;
  for (const [name, entry] of container) {
    if (!isAstNodeLike(entry))
      continue;
    const sym = entry.__symbol;
    const symbolKind = sym?.kind ?? SymbolKind.Property;
    const cst = entry.__cst;
    const detail = cst ? computeDetail(entry, entry.__kind, cst) : void 0;
    const documentation = extractCandidateDocumentation(entry);
    candidates.push({ name, kind: symbolKind, detail, documentation });
  }
}
function collectBlockCandidates(container, candidates) {
  if (!isAstNodeLike(container) || isNamedMap(container))
    return;
  for (const [name, field] of Object.entries(container)) {
    if (name.startsWith("__"))
      continue;
    if (!isAstNodeLike(field))
      continue;
    const sym = field.__symbol;
    const symbolKind = sym?.kind ?? SymbolKind.Property;
    const cst = field.__cst;
    const detail = cst ? computeDetail(field, field.__kind, cst) : void 0;
    const documentation = extractCandidateDocumentation(field);
    candidates.push({ name, kind: symbolKind, detail, documentation });
  }
}
function getFieldCompletions(ast, line, character, ctx, source) {
  const rootSchema = ctx.info.schema;
  const aliases = ctx.info.aliases;
  let result = findEnclosingBlockWithSchema(ast, line, character, rootSchema);
  if (source) {
    const lines = source.split("\n");
    const currentLine = lines[line] ?? "";
    const isBlankLine = currentLine.trim() === "";
    if (!result || isBlankLine) {
      const inferred = inferBlockFromIndentation(ast, line, character, rootSchema, source);
      if (inferred)
        result = inferred;
    }
  }
  if (!result) {
    return Object.keys(rootSchema).filter((key) => !aliases[key]).filter((key) => {
      const ft = Array.isArray(rootSchema[key]) ? rootSchema[key][0] : rootSchema[key];
      if (ft.__metadata?.hidden)
        return false;
      return !(key in ast) || isNamedMap(astField(ast, key));
    }).map((key) => {
      const ft = Array.isArray(rootSchema[key]) ? rootSchema[key][0] : rootSchema[key];
      return {
        name: key,
        kind: fieldCompletionKind(ft),
        documentation: ft.__metadata?.description,
        snippet: generateFieldSnippet(key, ft)
      };
    });
  }
  const { block, schema } = result;
  return Object.entries(schema).filter(([name, ft]) => {
    const fieldType = Array.isArray(ft) ? ft[0] : ft;
    if (fieldType.__metadata?.hidden)
      return false;
    if (name in block)
      return false;
    const existing = block[name];
    return !existing || isNamedMap(existing);
  }).map(([name, ft]) => {
    const fieldType = Array.isArray(ft) ? ft[0] : ft;
    return {
      name,
      kind: fieldCompletionKind(fieldType),
      documentation: fieldType.__metadata?.description,
      snippet: generateFieldSnippet(name, fieldType)
    };
  });
}
function inferBlockFromIndentation(_ast, line, _character, rootSchema, source) {
  const lines = source.split("\n");
  const currentLine = lines[line] ?? "";
  const cursorIndent = currentLine.length - currentLine.trimStart().length;
  if (cursorIndent === 0)
    return null;
  const parents = [];
  let targetIndent = cursorIndent;
  for (let l = line - 1; l >= 0; l--) {
    const ln = lines[l];
    if (!ln || !ln.trim())
      continue;
    const indent = ln.length - ln.trimStart().length;
    if (indent >= targetIndent)
      continue;
    const m = ln.trimStart().match(/^([\w-]+)(?:\s+([\w-]+))?\s*:/);
    if (!m)
      continue;
    parents.unshift({ key: m[1], indent, line: l, hasEntryName: !!m[2] });
    targetIndent = indent;
    if (indent === 0)
      break;
  }
  if (parents.length === 0)
    return null;
  let schema = rootSchema;
  let mapLevel = "none";
  for (const { key, hasEntryName } of parents) {
    const fieldDef = schema[key];
    if (fieldDef) {
      const ft = Array.isArray(fieldDef) ? fieldDef[0] : fieldDef;
      const isTypedMap2 = ft.__isTypedMap === true;
      const mapLike = ft.isNamed || ft.__isCollection || isTypedMap2;
      if (mapLike) {
        const entrySchema = ft.schema ?? ft.propertiesSchema;
        if (entrySchema) {
          schema = entrySchema;
          if (hasEntryName) {
            mapLevel = "none";
          } else {
            mapLevel = isTypedMap2 ? "typed" : "named";
          }
        }
      } else if (ft.schema) {
        schema = ft.schema;
        mapLevel = "none";
      } else {
        return {
          block: { __kind: "LeafField" },
          schema: {}
        };
      }
    } else {
      mapLevel = "none";
    }
  }
  if (schema === rootSchema)
    return null;
  if (mapLevel === "named") {
    return {
      block: { __kind: "NamedMapGap" },
      schema: {}
    };
  }
  const lastParent = parents[parents.length - 1];
  const presentKeys = { __kind: "Synthetic" };
  for (let l = lastParent.line + 1; l < lines.length; l++) {
    const ln = lines[l];
    if (!ln || !ln.trim())
      continue;
    const indent = ln.length - ln.trimStart().length;
    if (indent <= lastParent.indent)
      break;
    if (indent !== cursorIndent)
      continue;
    const km = ln.trimStart().match(/^([\w-]+)\s*:/);
    if (km && km[1] in schema) {
      presentKeys[km[1]] = true;
    }
  }
  return {
    block: presentKeys,
    schema
  };
}
function fieldCompletionKind(ft) {
  const resolved = Array.isArray(ft) ? ft[0] : ft;
  if (resolved.isNamed)
    return SymbolKind.Namespace;
  if (resolved.__isCollection)
    return SymbolKind.Namespace;
  if (resolved.schema)
    return SymbolKind.Object;
  return SymbolKind.Property;
}
function findEnclosingBlockWithSchema(value, line, character, schema, namedEntryType) {
  if (!value || typeof value !== "object")
    return null;
  if (isNamedMap(value)) {
    for (const [, entry] of value) {
      if (!isAstNodeLike(entry))
        continue;
      const cst = entry.__cst;
      if (!cst || !isPositionInRange(line, character, cst.range))
        continue;
      let entrySchema = schema;
      if (namedEntryType && hasDiscriminant(namedEntryType)) {
        const discValue = extractDiscriminantValue(entry, namedEntryType.discriminantField);
        if (discValue) {
          entrySchema = namedEntryType.resolveSchemaForDiscriminant(discValue);
        }
      } else if (namedEntryType) {
        const name = typeof entry.__name === "string" ? entry.__name : void 0;
        if (name) {
          entrySchema = namedEntryType.resolveSchemaForName(name);
        }
      }
      return findDeeperBlock(entry, line, character, entrySchema) ?? {
        block: entry,
        schema: entrySchema
      };
    }
    return null;
  }
  if (!isAstNodeLike(value))
    return null;
  for (const [key, ft] of Object.entries(schema)) {
    const fieldType = Array.isArray(ft) ? ft[0] : ft;
    const child = value[key];
    if (!child || typeof child !== "object")
      continue;
    if (isNamedMap(child)) {
      if (fieldType.schema) {
        const entryType = isCollectionFieldType(fieldType) ? fieldType.entryBlock : void 0;
        const mapResult = findEnclosingBlockWithSchema(child, line, character, fieldType.schema, entryType);
        if (mapResult)
          return mapResult;
      }
      continue;
    }
    if (!isAstNodeLike(child))
      continue;
    const cst = child.__cst;
    if (!cst || !isPositionInRange(line, character, cst.range))
      continue;
    if (fieldType.schema) {
      const deeper = findEnclosingBlockWithSchema(child, line, character, fieldType.schema);
      if (deeper)
        return deeper;
      return { block: child, schema: fieldType.schema };
    }
    return { block: child, schema: {} };
  }
  return null;
}
function findDeeperBlock(obj, line, character, schema) {
  for (const [key, ft] of Object.entries(schema)) {
    const fieldType = Array.isArray(ft) ? ft[0] : ft;
    const child = obj[key];
    if (!child || typeof child !== "object")
      continue;
    if (isNamedMap(child) && fieldType.schema) {
      const result = findEnclosingBlockWithSchema(child, line, character, fieldType.schema);
      if (result)
        return result;
      continue;
    }
    if (!isAstNodeLike(child))
      continue;
    const cst = child.__cst;
    if (!cst || !isPositionInRange(line, character, cst.range))
      continue;
    if (fieldType.schema) {
      const deeper = findEnclosingBlockWithSchema(child, line, character, fieldType.schema);
      if (deeper)
        return deeper;
      return { block: child, schema: fieldType.schema };
    }
  }
  return null;
}
function getValueCompletions(line, _character, ctx, source) {
  const lines = source.split("\n");
  const currentLine = lines[line] ?? "";
  const cursorIndent = currentLine.length - currentLine.trimStart().length;
  if (cursorIndent === 0)
    return [];
  const rootSchema = ctx.info.schema;
  const parents = [];
  let targetIndent = cursorIndent;
  for (let l = line - 1; l >= 0; l--) {
    const ln = lines[l];
    if (!ln || !ln.trim())
      continue;
    const indent = ln.length - ln.trimStart().length;
    if (indent >= targetIndent)
      continue;
    const m = ln.trimStart().match(/^([\w-]+)(?:\s+([\w-]+))?\s*:/);
    if (!m)
      continue;
    parents.unshift({ key: m[1], indent, hasEntryName: !!m[2] });
    targetIndent = indent;
    if (indent === 0)
      break;
  }
  if (parents.length === 0)
    return [];
  let schema = rootSchema;
  let typedMapField = null;
  for (const { key, hasEntryName } of parents) {
    const fieldDef = schema[key];
    if (fieldDef) {
      const ft = Array.isArray(fieldDef) ? fieldDef[0] : fieldDef;
      const isTypedMap2 = ft.__isTypedMap === true;
      const mapLike = ft.isNamed || ft.__isCollection || isTypedMap2;
      if (mapLike) {
        if (isTypedMap2) {
          typedMapField = ft;
        } else {
          typedMapField = null;
        }
        const entrySchema = ft.schema ?? ft.propertiesSchema;
        if (entrySchema) {
          schema = entrySchema;
          if (hasEntryName) {
            typedMapField = null;
          }
        }
      } else if (ft.schema) {
        schema = ft.schema;
        typedMapField = null;
      } else {
        typedMapField = null;
      }
    } else {
      typedMapField = null;
    }
  }
  if (!typedMapField)
    return [];
  const candidates = [];
  const primitiveTypes = typedMapField.__primitiveTypes ?? [];
  for (const pt of primitiveTypes) {
    candidates.push({
      name: pt.keyword,
      kind: SymbolKind.TypeParameter,
      documentation: pt.description
    });
  }
  return candidates;
}
function extractCandidateDocumentation(obj) {
  const description = obj.description;
  if (isAstNodeLike(description)) {
    if (description.__kind === "StringLiteral" && typeof description.value === "string") {
      return description.value;
    }
  }
  return void 0;
}

// ../language/dist/core/analysis/schema-hover.js
function resolveSchemaField(path, schema) {
  let current = schema;
  const resolvedPath = [];
  let lastField = null;
  let lastKey = "";
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    const raw = current[key];
    const field = Array.isArray(raw) ? raw[0] : raw;
    if (!field)
      break;
    lastField = field;
    lastKey = key;
    resolvedPath.push(key);
    if ((field.isNamed || field.__isCollection) && i + 1 < path.length) {
      i++;
      resolvedPath.push(path[i]);
    }
    if (field.__isTypedMap && i + 1 < path.length) {
      i++;
      resolvedPath.push(path[i]);
      const propsSchema = field.propertiesSchema;
      if (propsSchema && i + 1 < path.length) {
        current = propsSchema;
        continue;
      }
      continue;
    }
    if (field.schema) {
      current = field.schema;
    } else {
      break;
    }
  }
  if (!lastField)
    return null;
  return { field: lastField, resolvedPath, lastKey };
}
function formatConstraints(metadata) {
  const c = metadata.constraints;
  if (!c)
    return void 0;
  const parts = [];
  if (c.minimum !== void 0 && c.maximum !== void 0) {
    parts.push(`${c.minimum} \u2264 value \u2264 ${c.maximum}`);
  } else if (c.minimum !== void 0) {
    parts.push(`\u2265 ${c.minimum}`);
  } else if (c.maximum !== void 0) {
    parts.push(`\u2264 ${c.maximum}`);
  }
  if (c.exclusiveMinimum !== void 0)
    parts.push(`> ${c.exclusiveMinimum}`);
  if (c.exclusiveMaximum !== void 0)
    parts.push(`< ${c.exclusiveMaximum}`);
  if (c.multipleOf !== void 0)
    parts.push(`multiple of ${c.multipleOf}`);
  if (c.minLength !== void 0 && c.maxLength !== void 0) {
    parts.push(`length ${c.minLength}\u2013${c.maxLength}`);
  } else if (c.minLength !== void 0) {
    parts.push(`min length ${c.minLength}`);
  } else if (c.maxLength !== void 0) {
    parts.push(`max length ${c.maxLength}`);
  }
  if (c.pattern !== void 0)
    parts.push(`pattern \`/${c.pattern}/\``);
  if (c.minItems !== void 0 && c.maxItems !== void 0) {
    parts.push(`${c.minItems}\u2013${c.maxItems} items`);
  } else if (c.minItems !== void 0) {
    parts.push(`min ${c.minItems} item(s)`);
  } else if (c.maxItems !== void 0) {
    parts.push(`max ${c.maxItems} item(s)`);
  }
  if (c.enum !== void 0) {
    const vals = c.enum.map((v) => JSON.stringify(v)).join(", ");
    parts.push(`one of: ${vals}`);
  }
  if (c.const !== void 0) {
    parts.push(`must be ${JSON.stringify(c.const)}`);
  }
  return parts.length > 0 ? parts.join(" \xB7 ") : void 0;
}
function formatSchemaHoverMarkdown(path, metadata, modifiers, primitiveTypes) {
  const parts = [];
  parts.push(`**${path.join(".")}**`);
  if (metadata.description) {
    parts.push(`

${metadata.description}`);
  }
  if (metadata.deprecated) {
    const msg = metadata.deprecated.message || "This field is deprecated.";
    parts.push(`

**Deprecated:** ${msg}`);
  }
  if (metadata.minVersion) {
    parts.push(`

_Added in v${metadata.minVersion}_`);
  }
  if (metadata.experimental) {
    parts.push(`

_Experimental_`);
  }
  if (modifiers && modifiers.length > 0) {
    parts.push(`

**Modifiers:** \`${modifiers.map((m) => m.keyword).join("` | `")}\``);
  }
  if (primitiveTypes && primitiveTypes.length > 0) {
    parts.push(`

**Types:** \`${primitiveTypes.map((t) => t.keyword).join("` | `")}\``);
  }
  const constraints = formatConstraints(metadata);
  if (constraints) {
    parts.push(`

**Constraints:** ${constraints}`);
  }
  return parts.join("");
}
function formatKeywordHoverMarkdown(keyword, kind, info) {
  const label = kind === "modifier" ? "Modifier" : "Type";
  const parts = [];
  parts.push(`**${keyword}** \u2014 _${label}_`);
  if (info?.description) {
    parts.push(`

${info.description}`);
  }
  if (info?.metadata) {
    const m = info.metadata;
    if (m.deprecated) {
      const msg = m.deprecated.message || "This keyword is deprecated.";
      parts.push(`

**Deprecated:** ${msg}`);
    }
    if (m.minVersion) {
      parts.push(`

_Added in v${m.minVersion}_`);
    }
    if (m.experimental) {
      parts.push(`

_Experimental_`);
    }
  }
  return parts.join("");
}
function findKeywordInfo(keyword, keywords) {
  return keywords.find((k) => k.keyword === keyword);
}

// ../language/dist/core/analysis/hover-resolver.js
function resolveHover(root, line, character, schema, accessor) {
  const target = findNodeAtPosition(root, line, character, accessor);
  if (!target)
    return null;
  const targetType = accessor.type(target);
  if (findAncestorContext(root, target, "variable_declaration", accessor)) {
    const result = tryResolveModifierHover(target, root, schema, accessor);
    if (result)
      return result;
  }
  if (targetType === "id" || targetType === "string") {
    if (targetType === "id") {
      const typeResult = tryResolveTypeHover(target, root, schema, accessor);
      if (typeResult)
        return typeResult;
    }
    const path = buildSchemaPath(root, target, accessor);
    if (path.length > 0) {
      const resolved = resolveSchemaField(path, schema);
      if (resolved?.field.__metadata) {
        const targetText = getKeyTextGeneric(target, accessor);
        if (targetText === resolved.lastKey) {
          return {
            kind: "field",
            key: path[path.length - 1],
            path: resolved.resolvedPath,
            metadata: resolved.field.__metadata,
            range: nodeRange(target, accessor),
            modifiers: resolved.field.__modifiers,
            primitiveTypes: resolved.field.__primitiveTypes
          };
        }
      }
    }
  }
  return null;
}
function findNodeAtPosition(node, line, character, a) {
  if (line < a.startLine(node) || line > a.endLine(node) || line === a.startLine(node) && character < a.startColumn(node) || line === a.endLine(node) && character >= a.endColumn(node)) {
    return null;
  }
  for (const child of a.children(node)) {
    const found = findNodeAtPosition(child, line, character, a);
    if (found)
      return found;
  }
  return node;
}
function buildSchemaPath(root, target, a) {
  const path = [];
  function walk(node) {
    if (node === target)
      return true;
    for (const child of a.children(node)) {
      if (walk(child)) {
        if (a.type(node) === "mapping_element") {
          const keyNode = a.childByFieldName(node, "key");
          if (keyNode) {
            const keys = extractKeyTexts(keyNode, a);
            path.unshift(...keys);
          }
        }
        return true;
      }
    }
    return false;
  }
  walk(root);
  return path;
}
function collectAncestorMappingElements(node, target, result, a) {
  if (node === target)
    return true;
  for (const child of a.children(node)) {
    if (collectAncestorMappingElements(child, target, result, a)) {
      if (a.type(node) === "mapping_element") {
        result.unshift(node);
      }
      return true;
    }
  }
  return false;
}
function findAncestorContext(root, target, type, a) {
  let found = null;
  function walk(node) {
    if (node === target)
      return true;
    for (const child of a.children(node)) {
      if (walk(child)) {
        if (a.type(node) === type && !found) {
          found = node;
        }
        return true;
      }
    }
    return false;
  }
  walk(root);
  return found;
}
function containsNode(container, target, a) {
  const startOk = a.startLine(target) > a.startLine(container) || a.startLine(target) === a.startLine(container) && a.startColumn(target) >= a.startColumn(container);
  const endOk = a.endLine(target) < a.endLine(container) || a.endLine(target) === a.endLine(container) && a.endColumn(target) <= a.endColumn(container);
  return startOk && endOk;
}
function tryResolveModifierHover(target, root, schema, a) {
  const typedMapField = findContainingTypedMapField(target, root, schema, a);
  if (!typedMapField?.__modifiers)
    return null;
  const modifierNames = keywordNames(typedMapField.__modifiers);
  const text = a.text(target);
  if (!modifierNames.includes(text))
    return null;
  const info = findKeywordInfo(text, typedMapField.__modifiers);
  return {
    kind: "modifier",
    keyword: text,
    info,
    range: nodeRange(target, a)
  };
}
function tryResolveTypeHover(target, root, schema, a) {
  const varDecl = findAncestorContext(root, target, "variable_declaration", a);
  if (!varDecl)
    return null;
  const typeField = a.childByFieldName(varDecl, "type");
  if (!typeField || !containsNode(typeField, target, a))
    return null;
  const typedMapField = findContainingTypedMapField(target, root, schema, a);
  if (!typedMapField?.__primitiveTypes)
    return null;
  const typeNames = keywordNames(typedMapField.__primitiveTypes);
  if (!typeNames.includes(a.text(target)))
    return null;
  const info = findKeywordInfo(a.text(target), typedMapField.__primitiveTypes);
  return {
    kind: "type",
    keyword: a.text(target),
    info,
    range: nodeRange(target, a)
  };
}
function findContainingTypedMapField(target, root, schema, a) {
  const mappingElements = [];
  collectAncestorMappingElements(root, target, mappingElements, a);
  if (mappingElements.length < 2)
    return null;
  const fieldElement = mappingElements[mappingElements.length - 2];
  const path = buildSchemaPath(root, fieldElement, a);
  const keyNode = a.childByFieldName(fieldElement, "key");
  if (keyNode) {
    path.push(...extractKeyTexts(keyNode, a));
  }
  if (path.length === 0)
    return null;
  const resolved = resolveSchemaField(path, schema);
  if (!resolved?.field.__isTypedMap)
    return null;
  return resolved.field;
}
function extractKeyTexts(keyNode, a) {
  return a.namedChildren(keyNode).filter((c) => a.type(c) === "id" || a.type(c) === "string").map((c) => getKeyTextGeneric(c, a));
}
function getKeyTextGeneric(node, a) {
  if (a.type(node) === "id")
    return a.text(node);
  if (a.type(node) === "string") {
    let value = "";
    for (const child of a.namedChildren(node)) {
      if (a.type(child) === "string_content") {
        value += a.text(child);
      } else if (a.type(child) === "escape_sequence") {
        const t = a.text(child);
        if (t === '\\"')
          value += '"';
        else if (t === "\\'")
          value += "'";
        else if (t === "\\\\")
          value += "\\";
        else if (t === "\\n")
          value += "\n";
        else if (t === "\\r")
          value += "\r";
        else if (t === "\\t")
          value += "	";
        else if (t === "\\0")
          value += "\0";
      }
    }
    return value;
  }
  return a.text(node);
}
function nodeRange(node, a) {
  return {
    start: { line: a.startLine(node), character: a.startColumn(node) },
    end: { line: a.endLine(node), character: a.endColumn(node) }
  };
}

// ../language/dist/lint/symbol-table.js
var symbolTableKey = storeKey("symbol-table");
var SymbolTablePass = class {
  id = symbolTableKey;
  description = "Extracts LSP DocumentSymbol tree from the parsed AST";
  finalize(store, root) {
    store.set(symbolTableKey, getDocumentSymbols(root));
  }
};
function symbolTableAnalyzer() {
  return new SymbolTablePass();
}

// ../language/dist/lint/schema-walker.js
function resolveSchemaEntry(rawFt) {
  const fieldType = Array.isArray(rawFt) ? rawFt[0] : rawFt;
  return { fieldType, innerSchema: fieldType.schema };
}
function isSchema(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function checkInstance(instance, schema, visitor) {
  for (const [fieldName, rawFt] of Object.entries(schema)) {
    const { fieldType, innerSchema } = resolveSchemaEntry(rawFt);
    const value = instance[fieldName];
    visitor.visitField?.(value, fieldType, fieldName, instance);
    if (value !== void 0) {
      checkFieldValue(value, fieldType, innerSchema, visitor);
    }
  }
}
function checkFieldValue(value, fieldType, innerSchema, visitor) {
  if (fieldType.__fieldKind === "TypedMap" && isNamedMap(value)) {
    const typedMapProps = "propertiesSchema" in fieldType && isSchema(fieldType.propertiesSchema) ? fieldType.propertiesSchema : void 0;
    if (typedMapProps) {
      for (const [, entry] of value) {
        if (isAstNodeLike(entry)) {
          const props = entry.properties;
          if (isAstNodeLike(props)) {
            checkInstance(props, typedMapProps, visitor);
          }
        }
      }
    }
  }
  if (isCollectionFieldType(fieldType)) {
    if (isNamedMap(value)) {
      const colinearType = "colinearType" in fieldType ? fieldType.colinearType : void 0;
      for (const [, entry] of value) {
        if (isAstNodeLike(entry)) {
          const entryBlock = fieldType.entryBlock;
          let entrySchema = innerSchema;
          if (hasDiscriminant(entryBlock)) {
            const discValue = extractDiscriminantValue(entry, entryBlock.discriminantField);
            if (discValue) {
              entrySchema = entryBlock.resolveSchemaForDiscriminant(discValue);
            }
          } else {
            const name = typeof entry.__name === "string" ? entry.__name : void 0;
            if (name) {
              entrySchema = entryBlock.resolveSchemaForName(name);
            }
          }
          if (entrySchema) {
            checkInstance(entry, entrySchema, visitor);
          }
          if (colinearType && entry.value !== void 0) {
            visitor.visitField?.(entry.value, colinearType, "value", entry);
          }
        }
      }
    }
  } else if (innerSchema) {
    if (isAstNodeLike(value) && !(value instanceof SequenceNode)) {
      let blockSchema = innerSchema;
      if (hasDiscriminant(fieldType)) {
        const discValue = extractDiscriminantValue(value, fieldType.discriminantField);
        if (discValue) {
          blockSchema = fieldType.resolveSchemaForDiscriminant(discValue);
        }
      }
      checkInstance(value, blockSchema, visitor);
    }
  }
  if (value instanceof SequenceNode) {
    const items = value.items;
    if (innerSchema) {
      for (const item of items) {
        if (isAstNodeLike(item) && "__symbol" in item) {
          checkInstance(item, innerSchema, visitor);
        }
      }
    }
  }
}
function walkSchema(root, rootSchema, visitor) {
  for (const [key, rawFt] of Object.entries(rootSchema)) {
    const { fieldType, innerSchema } = resolveSchemaEntry(rawFt);
    const value = astField(root, key);
    visitor.visitField?.(value, fieldType, key, root);
    if (value !== void 0) {
      checkFieldValue(value, fieldType, innerSchema, visitor);
    }
  }
}

// ../language/dist/lint/constraint-validation.js
function getConstraints(fieldType) {
  return fieldType.__metadata?.constraints;
}
function extractStaticValue(value) {
  if (!isAstNodeLike(value))
    return void 0;
  const kind = value.__kind;
  if (kind === "NumberValue") {
    const v = value.value;
    if (typeof v === "number")
      return { kind: "number", raw: v };
  }
  if (kind === "BooleanValue") {
    const v = value.value;
    if (typeof v === "boolean")
      return { kind: "boolean", raw: v };
  }
  if (kind === "StringLiteral") {
    const v = value.value;
    if (typeof v === "string")
      return { kind: "string", raw: v };
  }
  return void 0;
}
var patternCache = /* @__PURE__ */ new Map();
var lastSchemaContext;
function getCompiledPattern(pattern) {
  if (patternCache.has(pattern)) {
    return patternCache.get(pattern);
  }
  try {
    const re = new RegExp(pattern);
    patternCache.set(pattern, re);
    return re;
  } catch {
    patternCache.set(pattern, null);
    return null;
  }
}
function resolveCapabilityNamespaces(resolvedType, ctx) {
  if (resolvedType === "invocationTarget") {
    return ctx.invocationTargetNamespaces;
  }
  if (resolvedType === "transitionTarget") {
    return ctx.transitionTargetNamespaces;
  }
  return void 0;
}
function resolvedTypeLabel(resolvedType) {
  if (resolvedType === "invocationTarget")
    return "invocation target";
  if (resolvedType === "transitionTarget")
    return "transition target";
  return resolvedType;
}
function validateConstraints(value, constraints, fieldName, validatedRefs, ctx) {
  if (!isAstNodeLike(value))
    return;
  const node = value;
  const range = node.__cst?.range ?? {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
  if (constraints.resolvedType && node instanceof MemberExpression && ctx) {
    const ref = decomposeAtMemberExpression(value);
    if (ref && !ctx.globalScopes.has(ref.namespace)) {
      const validNamespaces = resolveCapabilityNamespaces(constraints.resolvedType, ctx);
      if (validNamespaces && !validNamespaces.has(ref.namespace)) {
        validatedRefs?.add(node);
        const objectNode = isAstNodeLike(node.object) ? node.object : void 0;
        const nsRange = objectNode?.__cst?.range ?? range;
        const label = resolvedTypeLabel(constraints.resolvedType);
        const verb = constraints.resolvedType === "invocationTarget" ? "invoke" : "reference";
        attachDiagnostic(node, lintDiagnostic(nsRange, `Cannot ${verb} '@${ref.namespace}.${ref.property}' \u2014 '${ref.namespace}' is not a valid ${label}.`, DiagnosticSeverity.Error, "constraint-resolved-type"));
        return;
      }
    }
  }
  if (constraints.allowedNamespaces && node instanceof MemberExpression) {
    validatedRefs?.add(node);
    const ref = decomposeAtMemberExpression(value);
    if (ref && !constraints.allowedNamespaces.includes(ref.namespace)) {
      const objectNode = isAstNodeLike(node.object) ? node.object : void 0;
      const nsRange = objectNode?.__cst?.range ?? range;
      const suggestion = findSuggestion(ref.namespace, [
        ...constraints.allowedNamespaces
      ]);
      const allowed = constraints.allowedNamespaces.map((ns) => `@${ns}`).join(", ");
      const base = `'${fieldName}' must reference one of: ${allowed}. Got @${ref.namespace}`;
      const message = formatSuggestionHint(base, suggestion, "@");
      attachDiagnostic(node, lintDiagnostic(nsRange, message, DiagnosticSeverity.Error, "constraint-allowed-namespaces"));
    }
    return;
  }
  if (node instanceof SequenceNode) {
    const items = node.items;
    const count = items.length;
    if (constraints.minItems !== void 0 && count < constraints.minItems) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must have at least ${constraints.minItems} item(s), got ${count}`, DiagnosticSeverity.Error, "constraint-min-items"));
    }
    if (constraints.maxItems !== void 0 && count > constraints.maxItems) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must have at most ${constraints.maxItems} item(s), got ${count}`, DiagnosticSeverity.Error, "constraint-max-items"));
    }
    return;
  }
  const extracted = extractStaticValue(value);
  if (!extracted)
    return;
  const { kind, raw } = extracted;
  if (constraints.enum !== void 0 && !constraints.enum.includes(raw)) {
    const allowed = constraints.enum.map((v) => JSON.stringify(v)).join(", ");
    attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be one of: ${allowed}. Got ${JSON.stringify(raw)}`, DiagnosticSeverity.Error, "constraint-enum"));
  }
  if (constraints.const !== void 0 && raw !== constraints.const) {
    attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be ${JSON.stringify(constraints.const)}. Got ${JSON.stringify(raw)}`, DiagnosticSeverity.Error, "constraint-const"));
  }
  if (kind === "number" && typeof raw === "number") {
    if (constraints.minimum !== void 0 && raw < constraints.minimum) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be >= ${constraints.minimum}, got ${raw}`, DiagnosticSeverity.Error, "constraint-minimum"));
    }
    if (constraints.maximum !== void 0 && raw > constraints.maximum) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be <= ${constraints.maximum}, got ${raw}`, DiagnosticSeverity.Error, "constraint-maximum"));
    }
    if (constraints.exclusiveMinimum !== void 0 && raw <= constraints.exclusiveMinimum) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be > ${constraints.exclusiveMinimum}, got ${raw}`, DiagnosticSeverity.Error, "constraint-exclusive-minimum"));
    }
    if (constraints.exclusiveMaximum !== void 0 && raw >= constraints.exclusiveMaximum) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be < ${constraints.exclusiveMaximum}, got ${raw}`, DiagnosticSeverity.Error, "constraint-exclusive-maximum"));
    }
    if (constraints.multipleOf !== void 0) {
      const remainder = Math.abs(raw % constraints.multipleOf);
      const epsilon = Number.EPSILON * Math.max(1, Math.abs(raw), Math.abs(constraints.multipleOf));
      if (remainder > epsilon && Math.abs(remainder - constraints.multipleOf) > epsilon) {
        attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be a multiple of ${constraints.multipleOf}, got ${raw}`, DiagnosticSeverity.Error, "constraint-multiple-of"));
      }
    }
  }
  if (kind === "string" && typeof raw === "string") {
    if (constraints.minLength !== void 0 && raw.length < constraints.minLength) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be at least ${constraints.minLength} character(s) long, got ${raw.length}`, DiagnosticSeverity.Error, "constraint-min-length"));
    }
    if (constraints.maxLength !== void 0 && raw.length > constraints.maxLength) {
      attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must be at most ${constraints.maxLength} character(s) long, got ${raw.length}`, DiagnosticSeverity.Error, "constraint-max-length"));
    }
    if (constraints.pattern !== void 0) {
      const re = getCompiledPattern(constraints.pattern);
      if (re === null) {
        attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' has invalid constraint pattern: /${constraints.pattern}/`, DiagnosticSeverity.Warning, "constraint-invalid-pattern"));
      } else if (!re.test(raw)) {
        attachDiagnostic(node, lintDiagnostic(range, `'${fieldName}' must match pattern /${constraints.pattern}/`, DiagnosticSeverity.Error, "constraint-pattern"));
      }
    }
  }
}
var constraintValidationKey = storeKey("constraint-validation");
var ConstraintValidationPass = class {
  id = constraintValidationKey;
  description = "Validates field values against JSON Schema-style constraints (min, max, pattern, enum, etc.)";
  requires = [schemaContextKey];
  run(store, root) {
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    if (lastSchemaContext !== ctx) {
      patternCache.clear();
      lastSchemaContext = ctx;
    }
    const validatedRefs = /* @__PURE__ */ new Set();
    walkSchema(root, ctx.info.schema, {
      visitField(value, fieldType, fieldName) {
        if (value === void 0)
          return;
        const constraints = getConstraints(fieldType);
        if (constraints) {
          validateConstraints(value, constraints, fieldName, validatedRefs, ctx);
        }
      }
    });
    store.set(constraintValidationKey, validatedRefs);
  }
};
function constraintValidationPass() {
  return new ConstraintValidationPass();
}

// ../language/dist/lint/undefined-reference.js
function resolveInAncestors(ancestors, namespace, name, schemaCtx) {
  const scopesRequired = schemaCtx.scopedNamespaces.get(namespace);
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const obj = ancestors[i];
    if (!isAstNodeLike(obj) || isNamedMap(obj))
      continue;
    if (scopesRequired) {
      if (!obj.__scope || !scopesRequired.has(obj.__scope))
        continue;
    }
    const map = obj[namespace];
    if (isNamedMap(map) && map.has(name)) {
      return true;
    }
  }
  return false;
}
function findReferencedBlock(ancestors, startIndex, ref, schemaCtx) {
  const scopesRequired = schemaCtx.scopedNamespaces.get(ref.namespace);
  for (let j = startIndex - 1; j >= 0; j--) {
    const parent = ancestors[j];
    if (!isAstNodeLike(parent) || isNamedMap(parent))
      continue;
    if (scopesRequired) {
      if (!parent.__scope || !scopesRequired.has(parent.__scope))
        continue;
    }
    const refMap = parent[ref.namespace];
    if (!isNamedMap(refMap))
      continue;
    const refBlock = refMap.get(ref.property);
    if (isAstNodeLike(refBlock))
      return refBlock;
  }
  return void 0;
}
function isRunTransparentForOutputs(ancestors, runIdx) {
  const next = ancestors[runIdx + 1];
  return isAstNodeLike(next) && next.__kind === "WithClause";
}
function resolveNestedRunOverride(ancestors, namespace, schemaCtx) {
  const scopesRequired = schemaCtx.scopedNamespaces.get(namespace);
  if (!scopesRequired?.has("action"))
    return void 0;
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const obj = ancestors[i];
    if (!isAstNodeLike(obj) || isNamedMap(obj))
      continue;
    if (obj.__scope && scopesRequired.has(obj.__scope))
      return void 0;
    if (obj.__kind !== "RunStatement")
      continue;
    if (isRunTransparentForOutputs(ancestors, i))
      continue;
    const target = obj.target;
    if (!target || typeof target !== "object")
      continue;
    const ref = decomposeAtMemberExpression(target);
    if (!ref)
      continue;
    const refBlock = findReferencedBlock(ancestors, i, ref, schemaCtx);
    if (!refBlock)
      return void 0;
    const nsMap = refBlock[namespace];
    if (isNamedMap(nsMap)) {
      return [...nsMap.keys()];
    }
    return [];
  }
  return void 0;
}
function resolveColinearCandidates(ancestors, namespace, schemaCtx) {
  const scopesRequired = schemaCtx.scopedNamespaces.get(namespace);
  if (!scopesRequired || scopesRequired.size === 0)
    return void 0;
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const obj = ancestors[i];
    if (!isAstNodeLike(obj) || isNamedMap(obj))
      continue;
    const node = obj;
    if (node.__kind === "RunStatement" && scopesRequired.has("action") && !isRunTransparentForOutputs(ancestors, i)) {
      const target = node.target;
      if (!target || typeof target !== "object")
        continue;
      const ref2 = decomposeAtMemberExpression(target);
      if (!ref2)
        continue;
      const refBlock2 = findReferencedBlock(ancestors, i, ref2, schemaCtx);
      if (!refBlock2)
        return void 0;
      const nsMap2 = refBlock2[namespace];
      if (isNamedMap(nsMap2)) {
        return [...nsMap2.keys()];
      }
      return [];
    }
    if (!node.__scope || !scopesRequired.has(node.__scope))
      continue;
    const value = node.value;
    if (!value || typeof value !== "object")
      continue;
    const ref = decomposeAtMemberExpression(value);
    if (!ref)
      continue;
    const refBlock = findReferencedBlock(ancestors, i, ref, schemaCtx);
    if (!refBlock)
      return void 0;
    const nsMap = refBlock[namespace];
    if (isNamedMap(nsMap)) {
      return [...nsMap.keys()];
    }
    return [];
  }
  return void 0;
}
function isSelfReference(ancestors, namespace, property) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const obj = ancestors[i];
    if (!isAstNodeLike(obj) || isNamedMap(obj))
      continue;
    const map = obj[namespace];
    if (isNamedMap(map) && map.has(property)) {
      if (i + 2 < ancestors.length && ancestors[i + 1] === map && isAstNodeLike(ancestors[i + 2]) && map.get(property) === ancestors[i + 2]) {
        return true;
      }
    }
  }
  return false;
}
function resolveCheck(check, rctx) {
  const { expr, namespace, property, ctx, ancestors } = check;
  const { symbols, schemaCtx, validatedRefs, root } = rctx;
  if (validatedRefs.has(expr))
    return { kind: "skip-validated" };
  if (schemaCtx.scopedNamespaces.has(namespace) && schemaCtx.colinearResolvedScopes.has(namespace)) {
    const runOverride = resolveNestedRunOverride(ancestors, namespace, schemaCtx);
    if (runOverride !== void 0) {
      if (runOverride.includes(property))
        return { kind: "resolved" };
      return { kind: "colinear-miss", members: runOverride };
    }
  }
  const candidates = getSymbolMembers(symbols, namespace, schemaCtx, ctx);
  const globalMembers = schemaCtx.globalScopes.get(namespace);
  const selfRef = isSelfReference(ancestors, namespace, property);
  if (candidates !== null) {
    if (resolveInAncestors(ancestors, namespace, property, schemaCtx)) {
      return { kind: "resolved" };
    }
    if (!selfRef) {
      const resolved = resolveReference(root, namespace, property, schemaCtx, ctx, symbols);
      if (resolved)
        return { kind: "resolved" };
    }
    if (globalMembers) {
      if (globalMembers.has(property) || globalMembers.has("*")) {
        return { kind: "resolved" };
      }
    }
    if (selfRef) {
      const filtered = candidates.filter((c) => c !== property);
      return { kind: "standard-miss", candidates: filtered };
    }
    return { kind: "standard-miss", candidates };
  }
  if (globalMembers) {
    if (globalMembers.has(property) || globalMembers.has("*")) {
      return { kind: "resolved" };
    }
    return { kind: "global-miss", members: [...globalMembers] };
  }
  const isSchemaKey = getSchemaNamespaces(schemaCtx).has(namespace);
  const isScopedNs = schemaCtx.scopedNamespaces.has(namespace);
  if (isScopedNs) {
    if (!schemaCtx.colinearResolvedScopes.has(namespace)) {
      return { kind: "non-referenceable-scope" };
    }
    const colinearMembers = resolveColinearCandidates(ancestors, namespace, schemaCtx);
    if (colinearMembers === void 0) {
      return { kind: "skip-colinear-unresolvable" };
    }
    if (colinearMembers.includes(property))
      return { kind: "resolved" };
    return { kind: "colinear-miss", members: colinearMembers };
  }
  if (!isSchemaKey) {
    const knownNamespaces = [
      ...getSchemaNamespaces(schemaCtx),
      ...schemaCtx.globalScopes.keys()
    ];
    return { kind: "unknown-namespace", knownNamespaces };
  }
  return { kind: "skip-schema-key" };
}
function formatResolutionDiagnostic(result, namespace, property, range) {
  const referenceName = `@${namespace}.${property}`;
  switch (result.kind) {
    case "resolved":
    case "skip-validated":
    case "skip-schema-key":
    case "skip-colinear-unresolvable":
      return void 0;
    case "global-miss": {
      const suggestion = findSuggestion(property, result.members);
      return undefinedReferenceDiagnostic(range, `'${property}' is not defined in ${namespace}`, referenceName, suggestion, result.members);
    }
    case "unknown-namespace": {
      const suggestion = findSuggestion(namespace, result.knownNamespaces);
      return undefinedReferenceDiagnostic(range, `'@${namespace}' is not a recognized namespace`, referenceName, suggestion, result.knownNamespaces);
    }
    case "non-referenceable-scope":
      return undefinedReferenceDiagnostic(range, `'@${namespace}' cannot be used as a reference. This namespace is scoped to its parent block and is not directly referenceable`, referenceName);
    case "colinear-miss": {
      const suggestion = findSuggestion(property, result.members);
      return undefinedReferenceDiagnostic(range, `'${property}' is not defined in ${namespace}`, referenceName, suggestion, result.members);
    }
    case "standard-miss": {
      const suggestion = findSuggestion(property, result.candidates);
      return undefinedReferenceDiagnostic(range, `'${property}' is not defined in ${namespace}`, referenceName, suggestion, result.candidates);
    }
  }
}
var UndefinedReferencePass = class {
  id = storeKey("undefined-reference");
  description = "Validates that @namespace.member references point to defined symbols";
  requires = [symbolTableKey, constraintValidationKey];
  pendingChecks = [];
  ancestorStack = [];
  init() {
    this.pendingChecks = [];
    this.ancestorStack = [];
  }
  enterNode(_key, value) {
    this.ancestorStack.push(value);
  }
  exitNode() {
    this.ancestorStack.pop();
  }
  visitExpression(expr, ctx) {
    const decomposed = decomposeAtMemberExpression(expr);
    if (!decomposed)
      return;
    this.pendingChecks.push({
      expr,
      namespace: decomposed.namespace,
      property: decomposed.property,
      ctx,
      ancestors: [...this.ancestorStack]
    });
  }
  run(store, root) {
    const symbols = store.get(symbolTableKey) ?? [];
    const schemaCtx = store.get(schemaContextKey);
    if (!schemaCtx)
      return;
    const validatedRefs = store.get(constraintValidationKey);
    if (!validatedRefs) {
      throw new Error("undefined-reference pass requires constraint-validation to run first. Ensure constraintValidationPass is included and listed before undefinedReferencePass.");
    }
    const rctx = { symbols, schemaCtx, validatedRefs, root };
    for (const check of this.pendingChecks) {
      const result = resolveCheck(check, rctx);
      const cst = check.expr.__cst;
      if (!cst)
        continue;
      const diagnostic = formatResolutionDiagnostic(result, check.namespace, check.property, cst.range);
      if (diagnostic) {
        attachDiagnostic(check.expr, diagnostic);
      }
    }
  }
};
function undefinedReferencePass() {
  return new UndefinedReferencePass();
}

// ../language/dist/lint/duplicate-keys.js
function getKeyRange2(child) {
  if (child.__keyRange)
    return child.__keyRange;
  const val = child.value;
  if (hasCstRange(val)) {
    return val.__cst.range;
  }
  return void 0;
}
var DuplicateKeyPass = class {
  id = storeKey("duplicate-key");
  description = "Detects duplicate keys within block fields";
  nodes = [];
  init() {
    this.nodes = [];
  }
  enterNode(_key, value, _parent) {
    if (isAstNodeLike(value) && value.__children) {
      this.nodes.push(value);
    }
  }
  finalize(_store, _root) {
    for (const node of this.nodes) {
      this.checkForDuplicates(node);
    }
  }
  /**
   * Detect duplicates by walking __children (AST), not the CST.
   *
   * __children already reflects orphan adoption and ERROR recovery:
   * - Adopted elements are skipped during parsing (never pushed to children)
   * - ERROR-recovered elements have their inner __children merged
   * - Real duplicates (same field written twice) are both pushed unconditionally
   */
  checkForDuplicates(node) {
    if (!node.__children)
      return;
    const seenKeys = /* @__PURE__ */ new Map();
    for (const child of node.__children) {
      if (!(child instanceof FieldChild))
        continue;
      const dupKey = child.entryName ? `${child.key} ${child.entryName}` : child.key;
      if (seenKeys.has(dupKey)) {
        const keyRange = getKeyRange2(child);
        if (keyRange) {
          attachDiagnostic(node, lintDiagnostic(keyRange, `Duplicate key '${dupKey}'`, DiagnosticSeverity.Warning, "duplicate-key"));
        }
      } else {
        seenKeys.set(dupKey, child);
      }
    }
  }
};
function duplicateKeyPass() {
  return new DuplicateKeyPass();
}

// ../language/dist/lint/required-fields.js
function isRequired(fieldType) {
  return fieldType.__metadata?.required === true;
}
function blockHeaderRange(instance) {
  const fallback = {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
  const cst = instance.__cst;
  if (!cst)
    return fallback;
  const node = cst.node;
  const mappingElement = node.type === "mapping_element" ? node : node.parent?.type === "mapping_element" ? node.parent : null;
  if (mappingElement) {
    const keyNode = mappingElement.childForFieldName("key");
    if (keyNode) {
      return toRange(keyNode);
    }
  }
  return {
    start: cst.range.start,
    end: { line: cst.range.start.line, character: cst.range.start.character }
  };
}
var RequiredFieldPass = class {
  id = storeKey("required-fields");
  description = "Validates that blocks contain all required fields from their schema";
  requires = [schemaContextKey];
  run(store, root) {
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    walkSchema(root, ctx.info.schema, {
      visitField(value, fieldType, fieldName, instance) {
        if (isRequired(fieldType) && value === void 0) {
          attachDiagnostic(instance, lintDiagnostic(blockHeaderRange(instance), `Missing required field '${fieldName}'`, DiagnosticSeverity.Error, "missing-required-field"));
        }
      }
    });
  }
};
function requiredFieldPass() {
  return new RequiredFieldPass();
}

// ../language/dist/lint/singular-collection.js
var SingularCollectionPass = class {
  id = storeKey("singular-collection");
  description = "Enforces that collection fields marked singular contain at most one entry";
  finalize(store, root) {
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    const schema = ctx.info.schema;
    const rootObj = root;
    for (const [key, fieldType] of Object.entries(schema)) {
      if (!isSingularField(fieldType))
        continue;
      const collection = rootObj[key];
      if (!isNamedMap(collection) || collection.size <= 1)
        continue;
      let index = 0;
      for (const [, entry] of collection) {
        if (index === 0) {
          index++;
          continue;
        }
        const range = getEntryRange(entry);
        if (range) {
          attachDiagnostic(root, lintDiagnostic(range, `Only one '${key}' is allowed, but found multiple entries`, DiagnosticSeverity.Error, "singular-collection"));
        }
        index++;
      }
    }
  }
};
function isSingularField(fieldType) {
  return fieldType.__metadata?.singular === true;
}
function getEntryRange(entry) {
  return hasCstRange(entry) ? entry.__cst.range : void 0;
}
function singularCollectionPass() {
  return new SingularCollectionPass();
}

// ../language/dist/lint/position-index.js
var PositionIndexPass = class {
  id = positionIndexKey;
  description = "Builds a position index for fast cursor lookups";
  expressions = [];
  init() {
    this.expressions = [];
  }
  visitExpression(expr, scope) {
    const cst = expr.__cst;
    if (!cst)
      return;
    this.expressions.push({ expr, range: cst.range, scope });
  }
  finalize(store, root) {
    const definitions = [];
    walkDefinitionKeys(root, (namespace, name, keyRange, fullRange, scope) => {
      definitions.push({ namespace, name, keyRange, fullRange, scope });
    });
    const scopes = [];
    walkScopeEntries(root, {}, /* @__PURE__ */ new Set(), scopes);
    store.set(positionIndexKey, {
      expressions: this.expressions,
      definitions,
      scopes
    });
  }
};
function walkScopeEntries(value, parentScope, visited, out) {
  if (!value || typeof value !== "object")
    return;
  if (visited.has(value))
    return;
  visited.add(value);
  if (isNamedMap(value)) {
    for (const [name, entry] of value) {
      if (!isAstNodeLike(entry))
        continue;
      const cst = entry.__cst;
      if (!cst)
        continue;
      const blockScope = entry.__scope;
      let scope = parentScope;
      if (blockScope && typeof entry.__name === "string") {
        scope = { ...parentScope, [blockScope]: name };
        out.push({ range: cst.range, scope });
      }
      recurseAstChildren(entry, (_k, child) => {
        walkScopeEntries(child, scope, visited, out);
      });
    }
    return;
  }
  recurseAstChildren(value, (_k, child) => {
    walkScopeEntries(child, parentScope, visited, out);
  });
}
function positionIndexPass() {
  return new PositionIndexPass();
}

// ../language/dist/lint/unreachable-code.js
function isTerminal(stmt) {
  if (stmt instanceof TransitionStatement)
    return true;
  if (stmt instanceof IfStatement) {
    if (stmt.orelse.length === 0)
      return false;
    return alwaysTerminates(stmt.body) && alwaysTerminates(stmt.orelse);
  }
  return false;
}
function alwaysTerminates(stmts) {
  return stmts.some(isTerminal);
}
function unreachableMessage(terminalStmt) {
  if (terminalStmt instanceof TransitionStatement) {
    return "Code will never execute after 'transition'. Move this code before the transition, or wrap the transition in a conditional block.";
  }
  return "Code will never execute because all branches of the preceding 'if' block transition away. Add an else branch without a transition, or move this code into one of the branches.";
}
function isStatement(value) {
  return isEmittable(value) && "__kind" in value && typeof value.__kind === "string";
}
function checkStatements(stmts) {
  let terminalStmt = null;
  for (const raw of stmts) {
    if (!isStatement(raw))
      continue;
    const stmt = raw;
    if (terminalStmt) {
      const range = stmt.__cst?.range ?? {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      };
      if (!isAstNodeLike(stmt))
        continue;
      attachDiagnostic(stmt, lintDiagnostic(range, unreachableMessage(terminalStmt), DiagnosticSeverity.Warning, "unreachable-code", { tags: [DiagnosticTag.Unnecessary] }));
      continue;
    }
    if (isTerminal(stmt)) {
      terminalStmt = stmt;
    }
    if (stmt instanceof IfStatement) {
      checkStatements(stmt.body);
      checkStatements(stmt.orelse);
    } else if (stmt instanceof RunStatement) {
      checkStatements(stmt.body);
    }
  }
}
var UnreachableCodePass = class {
  id = storeKey("unreachable-code");
  description = "Detects unreachable code after terminal statements like transition";
  procedures = [];
  init() {
    this.procedures = [];
  }
  enterNode(_key, value, _parent) {
    if (isAstNodeLike(value) && value.__kind === "ProcedureValue") {
      this.procedures.push(value);
    }
  }
  run(_store, _root) {
    for (const proc of this.procedures) {
      const stmts = proc.statements;
      if (Array.isArray(stmts) && stmts.length > 0) {
        checkStatements(stmts);
      }
    }
  }
};
function unreachableCodePass() {
  return new UnreachableCodePass();
}

// ../language/dist/lint/empty-block.js
var MUST_NOT_BE_EMPTY = /* @__PURE__ */ new Set(["inputs", "outputs"]);
var EmptyBlockPass = class {
  id = storeKey("empty-block");
  description = "Flags empty inputs/outputs blocks that should contain at least one entry";
  hits = [];
  init() {
    this.hits = [];
  }
  enterNode(key, value, parent) {
    if (!MUST_NOT_BE_EMPTY.has(key))
      return;
    if (!parent || typeof parent !== "object")
      return;
    let node = null;
    if (isNamedMap(value)) {
      if (value.size > 0)
        return;
      node = value;
    } else if (value == null) {
      node = null;
    } else {
      return;
    }
    this.hits.push({
      key,
      node,
      parent
    });
  }
  finalize(_store, _root) {
    for (const { key, node, parent } of this.hits) {
      const cst = node?.__cst;
      const parentCst = parent.__cst;
      const range = cst?.range ?? parentCst?.range ?? {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      };
      attachDiagnostic(node ?? parent, lintDiagnostic(range, `Empty '${key}' block \u2014 must contain at least one entry`, DiagnosticSeverity.Error, "empty-block"));
    }
  }
};
function emptyBlockPass() {
  return new EmptyBlockPass();
}

// ../language/dist/lint/unused-variable.js
var UnusedVariablePass = class {
  id = storeKey("unused-variable");
  description = "Flags variables that are declared but never referenced";
  usedVariables = /* @__PURE__ */ new Set();
  init() {
    this.usedVariables = /* @__PURE__ */ new Set();
  }
  visitExpression(expr, _ctx) {
    const name = extractVariableRef(expr);
    if (name) {
      this.usedVariables.add(name);
    }
  }
  run(_store, root) {
    const variables = root.variables;
    if (!isNamedMap(variables))
      return;
    for (const [name, decl] of variables) {
      if (this.usedVariables.has(name))
        continue;
      const node = isAstNodeLike(decl) ? decl : null;
      if (!node?.__cst)
        continue;
      const fullRange = node.__cst.range;
      attachDiagnostic(node, {
        range: fullRange,
        message: `Variable '${name}' is declared but never used`,
        severity: DiagnosticSeverity.Warning,
        code: "unused-variable",
        source: LINT_SOURCE,
        tags: [DiagnosticTag.Unnecessary],
        data: { removalRange: fullRange }
      });
    }
  }
};
function unusedVariablePass() {
  return new UnusedVariablePass();
}

// ../language/dist/lint/expression-validation.js
var BUILTIN_FUNCTIONS = /* @__PURE__ */ new Set([
  "len",
  "max",
  "min"
]);
var DEFAULT_SUPPORTED_OPERATORS = /* @__PURE__ */ new Set([
  "+",
  "-",
  "==",
  "!=",
  "<",
  ">",
  "<=",
  ">=",
  "and",
  "or",
  "not",
  "in",
  "not in"
]);
var ExpressionValidationPass = class {
  id = storeKey("expression-validation");
  description = "Validates function calls and operators used in expressions";
  allowedFunctions;
  namespacedFunctions;
  allowedFunctionsList;
  supportedOperators;
  constructor(options = {}) {
    this.allowedFunctions = options.functions ?? BUILTIN_FUNCTIONS;
    this.namespacedFunctions = options.namespacedFunctions ?? {};
    this.supportedOperators = options.supportedOperators ?? DEFAULT_SUPPORTED_OPERATORS;
    this.allowedFunctionsList = [...this.allowedFunctions];
  }
  visitExpression(expr, _ctx) {
    if (expr instanceof CallExpression) {
      this.checkCallExpression(expr);
    } else if (expr instanceof BinaryExpression) {
      this.checkBinaryExpression(expr);
    }
  }
  checkCallExpression(expr) {
    const cst = expr.__cst;
    if (!cst)
      return;
    const func = expr.func;
    if (!func || typeof func !== "object" || !("__kind" in func))
      return;
    if (func instanceof MemberExpression) {
      const namespaceExpression = func.object;
      if (namespaceExpression instanceof Identifier) {
        const namespaceName = namespaceExpression.name;
        const allowedInNamespace = this.namespacedFunctions[namespaceName] ?? /* @__PURE__ */ new Set();
        if (!(namespaceName in this.namespacedFunctions)) {
          const knownNamespaces = Object.keys(this.namespacedFunctions);
          const suggestion = findSuggestion(namespaceName, knownNamespaces);
          const base = `'${namespaceName}' is not a recognized function. Available functions: ${[...this.allowedFunctionsList, ...knownNamespaces].join(", ")}`;
          const message = formatSuggestionHint(base, suggestion);
          attachDiagnostic(expr, lintDiagnostic(cst.range, message, DiagnosticSeverity.Error, "unknown-function", { suggestion }));
        } else if (!allowedInNamespace.has(func.property)) {
          const allowedList = [...allowedInNamespace];
          const suggestion = findSuggestion(func.property, allowedList);
          const base = `'${func.property}' is not a recognized function in namespace '${namespaceName}'. Available functions: ${allowedList.join(", ")}`;
          const message = formatSuggestionHint(base, suggestion);
          attachDiagnostic(expr, lintDiagnostic(cst.range, message, DiagnosticSeverity.Error, "unknown-function", { suggestion }));
        }
      } else {
        const allNamespacedFns = Object.entries(this.namespacedFunctions).flatMap(([ns, fns]) => [...fns].map((f) => `${ns}.${f}`));
        attachDiagnostic(expr, lintDiagnostic(cst.range, `Namespace function calls are not permitted. Only direct namespace function calls are allowed (${allNamespacedFns.join(", ")})`, DiagnosticSeverity.Error, "namespace-function-call"));
      }
    } else if (func instanceof Identifier) {
      this.validateIdentifier(func, expr, this.allowedFunctions, this.allowedFunctionsList);
    } else {
      attachDiagnostic(expr, lintDiagnostic(cst.range, `Indirect function calls are not permitted. Only direct calls to built-in functions are allowed (${this.allowedFunctionsList.join(", ")})`, DiagnosticSeverity.Error, "indirect-function-call"));
    }
  }
  validateIdentifier(func, expr, allowedFunctions, allowedFunctionList) {
    const cst = expr.__cst;
    if (!cst)
      return;
    const funcName = func.name;
    if (funcName.length === 0) {
      attachDiagnostic(expr, lintDiagnostic(cst.range, 'Unexpected Identifier node: missing "name" property', DiagnosticSeverity.Warning, "malformed-ast"));
    } else if (!allowedFunctions.has(funcName)) {
      const suggestion = findSuggestion(funcName, allowedFunctionList);
      const base = `'${funcName}' is not a recognized function. Available functions: ${allowedFunctionList.join(", ")}`;
      const message = formatSuggestionHint(base, suggestion);
      attachDiagnostic(expr, lintDiagnostic(cst.range, message, DiagnosticSeverity.Error, "unknown-function", { suggestion }));
    }
  }
  checkBinaryExpression(expr) {
    const op = expr.operator;
    if (typeof op !== "string")
      return;
    if (!this.supportedOperators.has(op)) {
      const cst = expr.__cst;
      if (!cst)
        return;
      attachDiagnostic(expr, lintDiagnostic(cst.range, `Operator '${op}' is not supported`, DiagnosticSeverity.Error, "unsupported-operator"));
    }
  }
};
function expressionValidationPass(options) {
  return new ExpressionValidationPass(options);
}

// ../language/dist/dialect-annotation.js
var DIALECT_PATTERN = /^#\s*@dialect:\s*(\w+)(?:=(\d+(?:\.\d+)?))?/im;
function parseDialectAnnotation(source) {
  const lines = source.split("\n", 10);
  for (let i = 0; i < lines.length; i++) {
    const match = DIALECT_PATTERN.exec(lines[i]);
    if (match) {
      const nameStart = match.index + match[0].indexOf(match[1]);
      const version = match[2] || void 0;
      let versionStart = -1;
      let versionLength = 0;
      if (version) {
        versionStart = match.index + match[0].lastIndexOf(version);
        versionLength = version.length;
      }
      return {
        name: match[1].toLowerCase(),
        version,
        line: i,
        nameStart,
        nameLength: match[1].length,
        versionStart,
        versionLength
      };
    }
  }
  return null;
}

// ../language/dist/dialect-resolution.js
function checkVersion(requested, available, dialectName) {
  const reqParts = requested.split(".").map(Number);
  const availParts = available.split(".").map(Number);
  const reqMajor = reqParts[0];
  const availMajor = availParts[0];
  if (reqMajor !== availMajor) {
    return {
      message: `Incompatible major version: requested ${dialectName}=${requested} but only v${available} is available`,
      severity: 1
    };
  }
  if (reqParts.length >= 2) {
    const reqMinor = reqParts[1];
    const availMinor = availParts[1] ?? 0;
    if (availMinor < reqMinor) {
      return {
        message: `Minimum minor version not met: requested ${dialectName}>=${reqMajor}.${reqMinor} but v${available} is available`,
        severity: 2
      };
    }
  }
  return null;
}
function resolveDialect(source, config2) {
  const annotation = parseDialectAnnotation(source);
  if (annotation) {
    const match = config2.dialects.find((d) => d.name.toLowerCase() === annotation.name);
    if (match) {
      if (annotation.version) {
        const versionIssue = checkVersion(annotation.version, match.version, annotation.name);
        if (versionIssue) {
          const availParts = match.version.split(".");
          const major = availParts[0];
          const majorMinor = `${availParts[0]}.${availParts[1] ?? 0}`;
          const suggestedVersions = major === majorMinor ? [major] : [major, majorMinor];
          return {
            dialect: match,
            versionDiagnostic: {
              message: versionIssue.message,
              severity: versionIssue.severity,
              line: annotation.line,
              versionStart: annotation.versionStart,
              versionLength: annotation.versionLength,
              suggestedVersions
            }
          };
        }
      }
      return { dialect: match };
    }
    const defaultName2 = config2.defaultDialect ?? config2.dialects[0]?.name;
    const defaultDialect2 = config2.dialects.find((d) => d.name === defaultName2);
    if (!defaultDialect2) {
      throw new Error(`No dialect available. Configure at least one dialect in DialectResolutionConfig.`);
    }
    return {
      dialect: defaultDialect2,
      unknownDialect: {
        name: annotation.name,
        line: annotation.line,
        nameStart: annotation.nameStart,
        nameLength: annotation.nameLength,
        availableNames: config2.dialects.map((d) => d.name)
      }
    };
  }
  const defaultName = config2.defaultDialect ?? config2.dialects[0]?.name;
  const defaultDialect = config2.dialects.find((d) => d.name === defaultName);
  if (!defaultDialect) {
    throw new Error(`No dialect available. Configure at least one dialect in DialectResolutionConfig.`);
  }
  return { dialect: defaultDialect };
}

// ../language/dist/semantic-tokens.js
var TOKEN_TYPES = [
  "keyword",
  "type",
  "function",
  "variable",
  "string",
  "number",
  "operator",
  "comment",
  "namespace",
  "property",
  "decorator"
];
var TOKEN_MODIFIERS = [
  "defaultLibrary",
  "modification",
  "readonly",
  "block",
  "blockName"
];
function idx(name) {
  const i = TOKEN_TYPES.indexOf(name);
  if (i === -1)
    throw new Error(`Unknown token type: ${name}`);
  return i;
}
function bit(name) {
  const i = TOKEN_MODIFIERS.indexOf(name);
  if (i === -1)
    throw new Error(`Unknown token modifier: ${name}`);
  return 1 << i;
}
var CAPTURE_MAP = {
  comment: { type: idx("comment"), modifiers: 0 },
  keyword: { type: idx("keyword"), modifiers: 0 },
  number: { type: idx("number"), modifiers: 0 },
  string: { type: idx("string"), modifiers: 0 },
  operator: { type: idx("operator"), modifiers: 0 },
  variable: { type: idx("variable"), modifiers: 0 },
  property: { type: idx("property"), modifiers: 0 },
  type: { type: idx("type"), modifiers: 0 },
  function: { type: idx("function"), modifiers: 0 },
  namespace: { type: idx("namespace"), modifiers: 0 },
  // Compound capture remappings
  "keyword.modifier": {
    type: idx("keyword"),
    modifiers: bit("modification")
  },
  "constant.builtin": {
    type: idx("keyword"),
    modifiers: 0
  },
  "string.escape": { type: idx("string"), modifiers: 0 },
  module: { type: idx("namespace"), modifiers: 0 },
  key: { type: idx("property"), modifiers: 0 },
  "keyword.block": { type: idx("keyword"), modifiers: bit("block") },
  "keyword.block.name": { type: idx("keyword"), modifiers: bit("blockName") },
  // Punctuation: use operator color so they always get an explicit token
  punctuation: { type: idx("operator"), modifiers: 0 },
  "punctuation.delimiter": { type: idx("operator"), modifiers: 0 },
  "punctuation.bracket": { type: idx("operator"), modifiers: 0 },
  // Special punctuation (|, ->) -> operator
  "punctuation.special": { type: idx("operator"), modifiers: 0 },
  // Template expression delimiters ({! }) -> keyword.modification
  "punctuation.template": {
    type: idx("keyword"),
    modifiers: bit("modification")
  },
  // @ prefix -> decorator
  decorator: { type: idx("decorator"), modifiers: 0 }
};
function mapCaptureToToken(captureName) {
  const name = captureName.replace(/^@/, "");
  if (name in CAPTURE_MAP) {
    return CAPTURE_MAP[name];
  }
  const baseType = name.split(".")[0];
  if (baseType in CAPTURE_MAP) {
    return CAPTURE_MAP[baseType];
  }
  return { type: idx("variable"), modifiers: 0 };
}
function dedupeOverlappingTokens(tokens) {
  if (tokens.length === 0)
    return [];
  const deduped = [];
  for (const current of tokens) {
    if (deduped.length === 0) {
      deduped.push(current);
      continue;
    }
    const prev = deduped[deduped.length - 1];
    const prevEnd = prev.startChar + prev.length;
    if (current.line === prev.line && current.startChar < prevEnd) {
      if (current.startChar === prev.startChar && current.length === prev.length) {
        deduped[deduped.length - 1] = current;
      }
      continue;
    }
    deduped.push(current);
  }
  return deduped;
}
function generateSemanticTokens(source, captures) {
  if (!source.trim())
    return [];
  const lines = source.split("\n");
  const tokens = [];
  for (const capture2 of captures) {
    const mapped = mapCaptureToToken(capture2.name);
    if (!mapped)
      continue;
    const { type, modifiers } = mapped;
    const startLine = capture2.startRow;
    const startChar = capture2.startCol;
    const endLine = capture2.endRow;
    const endChar = capture2.endCol;
    if (startLine === endLine) {
      const lineLength = lines[startLine]?.length ?? 0;
      const safeStart = Math.max(0, Math.min(startChar, lineLength));
      const safeEnd = Math.max(safeStart, Math.min(endChar, lineLength));
      if (safeEnd <= safeStart)
        continue;
      tokens.push({
        line: startLine,
        startChar: safeStart,
        length: safeEnd - safeStart,
        tokenType: type,
        tokenModifiers: modifiers
      });
    } else {
      for (let line = startLine; line <= endLine; line++) {
        const lineLength = lines[line]?.length ?? 0;
        const rawStart = line === startLine ? startChar : 0;
        const rawEnd = line === endLine ? endChar : lineLength;
        const safeStart = Math.max(0, Math.min(rawStart, lineLength));
        const safeEnd = Math.max(safeStart, Math.min(rawEnd, lineLength));
        if (safeEnd <= safeStart)
          continue;
        tokens.push({
          line,
          startChar: safeStart,
          length: safeEnd - safeStart,
          tokenType: type,
          tokenModifiers: modifiers
        });
      }
    }
  }
  tokens.sort((a, b) => {
    if (a.line !== b.line)
      return a.line - b.line;
    if (a.startChar !== b.startChar)
      return a.startChar - b.startChar;
    return b.length - a.length;
  });
  return dedupeOverlappingTokens(tokens);
}

// ../language/dist/service.js
var LanguageServiceImpl = class {
  schemaContext;
  dialectConfig;
  _ast = null;
  _diagnostics = [];
  _store = null;
  _symbols = null;
  dialect;
  source;
  constructor(config2) {
    this.dialectConfig = config2.dialect;
    this.source = config2.dialect.source ?? `${config2.dialect.name}-lint`;
    this.schemaContext = createSchemaContext(config2.dialect.schemaInfo);
    this.dialect = new Dialect();
  }
  update(cstNode) {
    const result = this.dialect.parse(cstNode, this.dialectConfig.schemaInfo.schema);
    this._ast = result.value;
    const engine = new LintEngine({
      passes: this.dialectConfig.createRules(),
      source: this.source
    });
    const engineResult = engine.run(this._ast, this.schemaContext);
    this._store = engineResult.store;
    this._diagnostics = engineResult.diagnostics;
    this._symbols = null;
  }
  get ast() {
    return this._ast;
  }
  get diagnostics() {
    return this._diagnostics;
  }
  get store() {
    return this._store;
  }
  getSymbols() {
    if (!this._ast)
      return [];
    if (this._symbols)
      return this._symbols;
    this._symbols = getDocumentSymbols(this._ast);
    return this._symbols;
  }
  getDefinition(line, char) {
    if (!this._ast)
      return null;
    const index = this._store?.get(positionIndexKey);
    return findDefinitionAtPosition(this._ast, line, char, this.schemaContext, this.getSymbols(), index);
  }
  getReferences(line, char, includeDeclaration = true) {
    if (!this._ast)
      return [];
    const index = this._store?.get(positionIndexKey);
    return findReferencesAtPosition(this._ast, line, char, includeDeclaration, this.schemaContext, this.getSymbols(), index);
  }
  getCompletions(line, char, namespace) {
    if (!this._ast)
      return [];
    const scope = this.getEnclosingScope(line, char);
    return getCompletionCandidates(this._ast, namespace, this.schemaContext, scope, this.getSymbols(), line, char);
  }
  getNamespaceCompletions(line, char) {
    const scope = this.getEnclosingScope(line, char);
    return getAvailableNamespaces(this.schemaContext, scope);
  }
  getFieldCompletions(line, char) {
    if (!this._ast)
      return [];
    return getFieldCompletions(this._ast, line, char, this.schemaContext);
  }
  getEnclosingScope(line, char) {
    if (!this._ast)
      return {};
    const index = this._store?.get(positionIndexKey);
    return findEnclosingScope(this._ast, line, char, index);
  }
};
function createLanguageService(config2) {
  return new LanguageServiceImpl(config2);
}

// ../lsp/dist/adapters/types.js
function toLspRange(range) {
  return {
    start: { line: range.start.line, character: range.start.character },
    end: { line: range.end.line, character: range.end.character }
  };
}
function toLspDiagnostic(diag) {
  return {
    range: toLspRange(diag.range),
    severity: diag.severity,
    code: diag.code,
    source: diag.source ?? "agentscript",
    message: diag.message,
    tags: diag.tags,
    data: diag.data
  };
}

// ../lsp/dist/pipeline.js
var DIAG_SOURCE = "language-server";
function processDocument(uri, source, config2, existingService) {
  const diagnostics = [];
  const { dialect, versionDiagnostic, unknownDialect } = resolveDialect(source, config2);
  if (versionDiagnostic) {
    diagnostics.push({
      range: {
        start: {
          line: versionDiagnostic.line,
          character: versionDiagnostic.versionStart
        },
        end: {
          line: versionDiagnostic.line,
          character: versionDiagnostic.versionStart + versionDiagnostic.versionLength
        }
      },
      severity: versionDiagnostic.severity,
      message: versionDiagnostic.message,
      source: DIAG_SOURCE,
      code: "invalid-version",
      data: { suggestedVersions: versionDiagnostic.suggestedVersions }
    });
  }
  if (unknownDialect) {
    const available = unknownDialect.availableNames.join(", ");
    diagnostics.push({
      range: {
        start: {
          line: unknownDialect.line,
          character: unknownDialect.nameStart
        },
        end: {
          line: unknownDialect.line,
          character: unknownDialect.nameStart + unknownDialect.nameLength
        }
      },
      severity: 1,
      // Error
      message: `Unknown dialect "${unknownDialect.name}". Available dialects: ${available}`,
      source: DIAG_SOURCE,
      code: "unknown-dialect",
      data: { availableNames: unknownDialect.availableNames }
    });
  }
  let service;
  if (existingService && existingService.dialectConfig.name === dialect.name) {
    service = existingService;
  } else {
    service = createLanguageService({ dialect });
  }
  try {
    const tree = config2.parser.parse(source);
    service.update(tree.rootNode);
  } catch (error) {
    diagnostics.push({
      range: {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      },
      severity: 1,
      // Error
      message: `Parse error: ${error instanceof Error ? error.message : String(error)}`,
      source: DIAG_SOURCE
    });
  }
  for (const diag of service.diagnostics) {
    diagnostics.push(toLspDiagnostic(diag));
  }
  let compileOutput = null;
  const compileHook = config2.compile?.(dialect.name);
  if (compileHook && service.ast) {
    try {
      const result = compileHook.compile(service.ast, source);
      compileOutput = result.output ?? null;
      for (const diag of result.diagnostics) {
        diagnostics.push(toLspDiagnostic(diag));
      }
    } catch (error) {
      diagnostics.push({
        range: {
          start: { line: 0, character: 0 },
          end: { line: 0, character: 0 }
        },
        severity: 1,
        message: `Compilation failed: ${error instanceof Error ? error.message : String(error)}`,
        source: DIAG_SOURCE
      });
    }
  }
  diagnostics.sort((a, b) => {
    const lineDiff = a.range.start.line - b.range.start.line;
    if (lineDiff !== 0)
      return lineDiff;
    const charDiff = a.range.start.character - b.range.start.character;
    if (charDiff !== 0)
      return charDiff;
    return (a.severity ?? 0) - (b.severity ?? 0);
  });
  return {
    uri,
    source,
    ast: service.ast,
    store: service.store,
    service,
    diagnostics,
    compileOutput
  };
}

// ../lsp/dist/providers/hover.js
var import_vscode_languageserver = __toESM(require_main4(), 1);
var syntaxNodeAccessor = {
  type: (n) => n.type,
  text: (n) => n.text,
  children: (n) => n.children,
  namedChildren: (n) => n.namedChildren,
  startLine: (n) => n.startRow,
  startColumn: (n) => n.startCol,
  endLine: (n) => n.endRow,
  endColumn: (n) => n.endCol,
  childByFieldName: (n, name) => n.childForFieldName(name)
};
function provideHover(state, line, character, dialects) {
  try {
    if (line < 10 && dialects) {
      const annotationHover = provideDialectAnnotationHover(state.source, line, character, dialects);
      if (annotationHover)
        return annotationHover;
    }
    const { ast, service } = state;
    if (!ast)
      return null;
    const rootNode = ast.__cst?.node;
    if (!rootNode)
      return null;
    const schema = service.dialectConfig.schemaInfo.schema;
    const result = resolveHover(rootNode, line, character, schema, syntaxNodeAccessor);
    return result ? toHover(result) : null;
  } catch (error) {
    console.error("[Hover] Error providing hover:", error);
    return null;
  }
}
function toHover(result) {
  let markdown;
  if (result.kind === "field") {
    markdown = formatSchemaHoverMarkdown(result.path, result.metadata, result.modifiers, result.primitiveTypes);
  } else {
    markdown = formatKeywordHoverMarkdown(result.keyword, result.kind, result.info);
  }
  const content = {
    kind: import_vscode_languageserver.MarkupKind.Markdown,
    value: markdown
  };
  return {
    contents: content,
    range: {
      start: {
        line: result.range.start.line,
        character: result.range.start.character
      },
      end: {
        line: result.range.end.line,
        character: result.range.end.character
      }
    }
  };
}
function provideDialectAnnotationHover(source, line, character, dialects) {
  const annotation = parseDialectAnnotation(source);
  if (!annotation || annotation.line !== line)
    return null;
  const annotationStart = 0;
  const annotationEnd = annotation.versionStart >= 0 ? annotation.versionStart + annotation.versionLength : annotation.nameStart + annotation.nameLength;
  if (character < annotationStart || character > annotationEnd)
    return null;
  const matchedDialect = dialects.find((d) => d.name.toLowerCase() === annotation.name);
  const parts = [];
  if (matchedDialect) {
    parts.push(`**Dialect:** ${matchedDialect.name} v${matchedDialect.version}`);
    if (annotation.version) {
      const vParts = annotation.version.split(".");
      if (vParts.length === 1) {
        parts.push(`

**Version constraint:** \`=${annotation.version}\` \u2014 any v${vParts[0]}.x release`);
      } else {
        parts.push(`

**Version constraint:** \`=${annotation.version}\` \u2014 v${vParts[0]}.x with minimum minor version ${vParts[1]}`);
      }
    } else {
      parts.push("\n\n_No version constraint \u2014 uses latest available._");
    }
  } else {
    parts.push(`**Unknown dialect:** \`${annotation.name}\``);
    parts.push(`

**Available:** ${dialects.map((d) => `\`${d.name}\``).join(", ")}`);
  }
  parts.push("\n\n---");
  parts.push("\n\n_Format:_ `# @dialect: NAME=VERSION`\n\n- `NAME=MAJOR` \u2014 any release in that major version\n- `NAME=MAJOR.MINOR` \u2014 minimum minor version within that major");
  return {
    contents: {
      kind: import_vscode_languageserver.MarkupKind.Markdown,
      value: parts.join("")
    },
    range: {
      start: { line, character: annotationStart },
      end: { line, character: annotationEnd }
    }
  };
}

// ../lsp/dist/providers/completion.js
var import_vscode_languageserver2 = __toESM(require_main4(), 1);
function toCompletionItemKind(symbolKind) {
  switch (symbolKind) {
    case SymbolKind.Variable:
      return import_vscode_languageserver2.CompletionItemKind.Variable;
    case SymbolKind.Field:
      return import_vscode_languageserver2.CompletionItemKind.Field;
    case SymbolKind.Method:
      return import_vscode_languageserver2.CompletionItemKind.Method;
    case SymbolKind.Class:
      return import_vscode_languageserver2.CompletionItemKind.Class;
    case SymbolKind.Interface:
      return import_vscode_languageserver2.CompletionItemKind.Interface;
    case SymbolKind.Namespace:
      return import_vscode_languageserver2.CompletionItemKind.Module;
    case SymbolKind.Property:
      return import_vscode_languageserver2.CompletionItemKind.Property;
    case SymbolKind.Object:
      return import_vscode_languageserver2.CompletionItemKind.Struct;
    case SymbolKind.TypeParameter:
      return import_vscode_languageserver2.CompletionItemKind.TypeParameter;
    case SymbolKind.Constant:
      return import_vscode_languageserver2.CompletionItemKind.Keyword;
    default:
      return import_vscode_languageserver2.CompletionItemKind.Text;
  }
}
function provideCompletion(state, line, character, _triggerCharacter, dialects) {
  try {
    const lineContent = state.source.split("\n")[line] ?? "";
    const textBeforeCursor = lineContent.substring(0, character);
    if (line < 10 && dialects && dialects.length > 0) {
      const dialectItems = provideDialectAnnotationCompletion(textBeforeCursor, line, character, dialects);
      if (dialectItems)
        return dialectItems;
    }
    const { ast, store, service } = state;
    if (!ast || !store) {
      return { isIncomplete: false, items: [] };
    }
    const index = store.get(positionIndexKey);
    const schemaContext = service.schemaContext;
    const scope = findEnclosingScope(ast, line, character, index);
    const symbols = store.get(symbolTableKey);
    let items = [];
    const exprMatch = textBeforeCursor.match(/@(\w*)\.?(\w*)$/);
    if (exprMatch) {
      const [fullMatch, namespacePart] = exprMatch;
      const hasDot = fullMatch.includes(".");
      const matchStart = character - fullMatch.length;
      const candidates = hasDot ? getCompletionCandidates(ast, namespacePart, schemaContext, scope, symbols, line, character) : getAvailableNamespaces(schemaContext, scope);
      const replaceStartChar = hasDot ? matchStart + fullMatch.indexOf(".") + 1 : matchStart + 1;
      items = candidates.map((candidate, idx2) => ({
        label: candidate.name,
        kind: toCompletionItemKind(candidate.kind),
        detail: candidate.detail,
        documentation: candidate.documentation,
        insertText: candidate.name,
        textEdit: {
          range: {
            start: { line, character: replaceStartChar },
            end: { line, character }
          },
          newText: candidate.name
        },
        sortText: String(idx2).padStart(4, "0")
      }));
    } else if (textBeforeCursor.includes(":")) {
      if (textBeforeCursor.includes("@")) {
        return { isIncomplete: false, items: [] };
      }
      const valueCandidates = getValueCompletions(line, character, schemaContext, state.source);
      if (valueCandidates.length > 0) {
        const colonIdx = textBeforeCursor.lastIndexOf(":");
        const afterColon = textBeforeCursor.substring(colonIdx + 1).trim();
        const valueStart = character - afterColon.length;
        items = valueCandidates.map((candidate, idx2) => ({
          label: candidate.name,
          kind: toCompletionItemKind(candidate.kind),
          detail: candidate.detail,
          documentation: candidate.documentation,
          insertText: candidate.name,
          textEdit: {
            range: {
              start: { line, character: valueStart },
              end: { line, character }
            },
            newText: candidate.name
          },
          sortText: String(idx2).padStart(4, "0")
        }));
      }
    } else {
      const partial = textBeforeCursor.trim();
      const indentLength = textBeforeCursor.length - partial.length;
      const candidates = getFieldCompletions(ast, line, character, schemaContext, state.source);
      items = candidates.map((candidate, idx2) => {
        const hasSnippet = !!candidate.snippet;
        const newText = hasSnippet ? adjustSnippetIndentation(candidate.snippet, indentLength) : candidate.name + ": ";
        return {
          label: candidate.name,
          kind: toCompletionItemKind(candidate.kind),
          detail: candidate.detail,
          documentation: candidate.documentation,
          insertText: newText,
          insertTextFormat: hasSnippet ? import_vscode_languageserver2.InsertTextFormat.Snippet : import_vscode_languageserver2.InsertTextFormat.PlainText,
          textEdit: {
            range: {
              start: { line, character: indentLength },
              end: { line, character }
            },
            newText
          },
          sortText: String(idx2).padStart(4, "0")
        };
      });
    }
    return {
      isIncomplete: false,
      items
    };
  } catch (error) {
    console.error("[Completion] Error providing completions:", error);
    return { isIncomplete: false, items: [] };
  }
}
function adjustSnippetIndentation(snippet, baseIndent) {
  const lines = snippet.split("\n");
  if (lines.length <= 1)
    return snippet;
  const indentStr = " ".repeat(baseIndent);
  return lines.map((ln, i) => i === 0 ? ln : indentStr + ln).join("\n");
}
function provideDialectAnnotationCompletion(textBeforeCursor, line, character, dialects) {
  const trimmed = textBeforeCursor.trimStart();
  const versionMatch = trimmed.match(/^#\s*@dialect:\s*(\w+)=(\d*)$/i);
  if (versionMatch) {
    const name = versionMatch[1].toLowerCase();
    const partialVersion = versionMatch[2];
    const versionStart = character - partialVersion.length;
    const dialect = dialects.find((d) => d.name.toLowerCase() === name);
    if (!dialect)
      return null;
    const parts = dialect.version.split(".");
    const major = parts[0];
    const majorMinor = `${parts[0]}.${parts[1] ?? 0}`;
    const versions = [
      { label: major, detail: `any v${major}.x` },
      { label: majorMinor, detail: `minimum v${majorMinor}` }
    ];
    const unique = versions.filter((v, i, arr) => arr.findIndex((x) => x.label === v.label) === i);
    const items = unique.filter((v) => v.label.startsWith(partialVersion)).map((v, idx2) => ({
      label: v.label,
      kind: import_vscode_languageserver2.CompletionItemKind.Constant,
      detail: v.detail,
      textEdit: {
        range: {
          start: { line, character: versionStart },
          end: { line, character }
        },
        newText: v.label
      },
      sortText: String(idx2).padStart(4, "0")
    }));
    return { isIncomplete: false, items };
  }
  const nameMatch = trimmed.match(/^#\s*@dialect:\s*(\w*)$/i);
  if (nameMatch) {
    const partial = nameMatch[1].toLowerCase();
    const nameStart = character - partial.length;
    const items = dialects.filter((d) => d.name.toLowerCase().startsWith(partial)).map((d, idx2) => {
      const parts = d.version.split(".");
      const majorMinor = `${parts[0]}.${parts[1] ?? 0}`;
      return {
        label: `${d.name}=${majorMinor}`,
        kind: import_vscode_languageserver2.CompletionItemKind.EnumMember,
        detail: `${d.name} dialect (v${d.version})`,
        insertTextFormat: import_vscode_languageserver2.InsertTextFormat.Snippet,
        textEdit: {
          range: {
            start: { line, character: nameStart },
            end: { line, character }
          },
          newText: `${d.name}=\${1:${majorMinor}}`
        },
        sortText: String(idx2).padStart(4, "0")
      };
    });
    return { isIncomplete: false, items };
  }
  if (/^#\s*@?\w*$/.test(trimmed)) {
    const lineStart = character - trimmed.length;
    const items = dialects.map((d, idx2) => {
      const parts = d.version.split(".");
      const majorMinor = `${parts[0]}.${parts[1] ?? 0}`;
      return {
        label: `# @dialect: ${d.name}`,
        kind: import_vscode_languageserver2.CompletionItemKind.Snippet,
        detail: `Set dialect to ${d.name} (v${d.version})`,
        filterText: trimmed,
        insertTextFormat: import_vscode_languageserver2.InsertTextFormat.Snippet,
        textEdit: {
          range: {
            start: { line, character: lineStart },
            end: { line, character }
          },
          newText: `# @dialect: \${1:${d.name}}=\${2:${majorMinor}}`
        },
        sortText: String(idx2).padStart(4, "0")
      };
    });
    return { isIncomplete: false, items };
  }
  return null;
}

// ../lsp/dist/providers/definition.js
function provideDefinition(state, line, character) {
  try {
    const { ast, uri, store, service } = state;
    if (!ast || !store)
      return null;
    const index = store.get(positionIndexKey);
    const schemaContext = service.schemaContext;
    const result = findDefinitionAtPosition(
      ast,
      line,
      character,
      schemaContext,
      void 0,
      // symbols (optional)
      index
    );
    if (!result.definition)
      return null;
    return {
      uri,
      range: toLspRange(result.definition.definitionRange)
    };
  } catch (error) {
    console.error("[Definition] Error providing definition:", error);
    return null;
  }
}

// ../lsp/dist/providers/references.js
function provideReferences(state, line, character, includeDeclaration) {
  try {
    const { ast, uri, store, service } = state;
    if (!ast || !store)
      return [];
    const index = store.get(positionIndexKey);
    const schemaContext = service.schemaContext;
    const refs = findReferencesAtPosition(
      ast,
      line,
      character,
      includeDeclaration,
      schemaContext,
      void 0,
      // symbols (optional)
      index
    );
    return refs.map((r) => ({
      uri,
      range: toLspRange(r.range)
    }));
  } catch (error) {
    console.error("[References] Error providing references:", error);
    return [];
  }
}

// ../lsp/dist/providers/code-actions.js
var import_vscode_languageserver3 = __toESM(require_main4(), 1);
function decomposeAtRef(expr) {
  if (expr.__kind !== "MemberExpression")
    return null;
  const object = expr.object;
  if (!object || object.__kind !== "AtIdentifier")
    return null;
  const namespace = object.name;
  const property = expr.property;
  if (!namespace || !property)
    return null;
  return { namespace, property, nameNode: object };
}
function buildTopicToSubagentEdits(_source, topicKeywordRange, ast) {
  const edits = [];
  edits.push({ range: topicKeywordRange, newText: "subagent" });
  if (ast) {
    const result = findTopicBlockAtLine(ast, topicKeywordRange.start.line);
    if (result) {
      collectTopicRefRenameEdits(ast, result.name, edits);
    }
  }
  return edits;
}
function findTopicBlockAtLine(ast, line) {
  const topicMap = ast.topic;
  if (!topicMap || !isNamedMap(topicMap))
    return null;
  for (const [name, entry] of topicMap) {
    const block = entry;
    const cst = block.__cst;
    if (!cst)
      continue;
    const node = cst.node;
    const mappingElement = node?.parent;
    if (mappingElement && mappingElement.startRow === line) {
      return { block, name };
    }
    if (cst.range.start.line === line) {
      return { block, name };
    }
  }
  return null;
}
function collectTopicRefRenameEdits(ast, topicName, edits) {
  walkAstExpressions(ast, (expr) => {
    const ref = decomposeAtRef(expr);
    if (!ref)
      return;
    if (ref.namespace !== "topic" || ref.property !== topicName)
      return;
    const cst = ref.nameNode.__cst;
    if (!cst)
      return;
    const range = cst.range;
    edits.push({
      range: {
        start: { line: range.start.line, character: range.start.character + 1 },
        end: range.end
      },
      newText: "subagent"
    });
  });
}
function provideCodeActions(state, _range, diagnostics) {
  const actions = [];
  try {
    const { uri, source } = state;
    for (const diagnostic of diagnostics) {
      if (diagnostic.code === "invalid-modifier" || diagnostic.code === "unknown-type") {
        const found = diagnostic.data?.found;
        const expected = diagnostic.data?.expected;
        if (!found || !expected)
          continue;
        const suggestion = findSuggestion(found, expected);
        if (!suggestion)
          continue;
        const lines = source.split("\n");
        const line = lines[diagnostic.range.start.line];
        if (!line)
          continue;
        const foundIndex = line.indexOf(found);
        if (foundIndex === -1)
          continue;
        actions.push({
          title: `Change to '${suggestion}'`,
          kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
          diagnostics: [diagnostic],
          isPreferred: true,
          edit: {
            changes: {
              [uri]: [
                {
                  range: {
                    start: {
                      line: diagnostic.range.start.line,
                      character: foundIndex
                    },
                    end: {
                      line: diagnostic.range.start.line,
                      character: foundIndex + found.length
                    }
                  },
                  newText: suggestion
                }
              ]
            }
          }
        });
      }
      if (diagnostic.code === "unknown-dialect") {
        const availableNames = diagnostic.data?.availableNames;
        if (!availableNames)
          continue;
        for (const name of availableNames) {
          actions.push({
            title: `Change to '${name}'`,
            kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
            diagnostics: [diagnostic],
            isPreferred: availableNames.length === 1,
            edit: {
              changes: {
                [uri]: [
                  {
                    range: diagnostic.range,
                    newText: name
                  }
                ]
              }
            }
          });
        }
      }
      if (diagnostic.code === "deprecated-field") {
        const replacement = diagnostic.data?.replacement;
        if (!replacement)
          continue;
        if (replacement === "subagent") {
          const edits = buildTopicToSubagentEdits(source, diagnostic.range, state.ast);
          if (edits.length > 0) {
            actions.push({
              title: "Convert to subagent",
              kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
              diagnostics: [diagnostic],
              isPreferred: true,
              edit: { changes: { [uri]: edits } }
            });
          }
        } else {
          actions.push({
            title: `Replace with '${replacement}'`,
            kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
            diagnostics: [diagnostic],
            isPreferred: true,
            edit: {
              changes: {
                [uri]: [
                  {
                    range: diagnostic.range,
                    newText: replacement
                  }
                ]
              }
            }
          });
        }
      }
      if (diagnostic.code === "unused-variable") {
        const removalRange = diagnostic.data?.removalRange;
        if (!removalRange)
          continue;
        const lines = source.split("\n");
        const startLine = removalRange.start.line;
        const endLine = removalRange.end.line;
        const deleteRange = endLine + 1 < lines.length ? {
          start: { line: startLine, character: 0 },
          end: { line: endLine + 1, character: 0 }
        } : {
          start: { line: startLine, character: 0 },
          end: {
            line: endLine,
            character: lines[endLine]?.length ?? 0
          }
        };
        actions.push({
          title: `Remove unused variable`,
          kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
          diagnostics: [diagnostic],
          isPreferred: true,
          edit: {
            changes: {
              [uri]: [{ range: deleteRange, newText: "" }]
            }
          }
        });
      }
      if (diagnostic.code === "invalid-version") {
        const suggestedVersions = diagnostic.data?.suggestedVersions;
        if (!suggestedVersions || suggestedVersions.length === 0)
          continue;
        for (let i = 0; i < suggestedVersions.length; i++) {
          const version = suggestedVersions[i];
          const detail = version.includes(".") ? `min v${version}` : `latest v${version}`;
          actions.push({
            title: `Set version to '${version}' (${detail})`,
            kind: import_vscode_languageserver3.CodeActionKind.QuickFix,
            diagnostics: [diagnostic],
            isPreferred: i === 0,
            edit: {
              changes: {
                [uri]: [
                  {
                    range: diagnostic.range,
                    newText: version
                  }
                ]
              }
            }
          });
        }
      }
    }
  } catch (error) {
    console.error("[CodeActions] Error providing code actions:", error);
  }
  return actions;
}

// ../lsp/dist/providers/symbols.js
var import_vscode_languageserver4 = __toESM(require_main4(), 1);
function toLspSymbolKind(symbolKind) {
  switch (symbolKind) {
    case SymbolKind.File:
      return import_vscode_languageserver4.SymbolKind.File;
    case SymbolKind.Module:
      return import_vscode_languageserver4.SymbolKind.Module;
    case SymbolKind.Namespace:
      return import_vscode_languageserver4.SymbolKind.Namespace;
    case SymbolKind.Package:
      return import_vscode_languageserver4.SymbolKind.Package;
    case SymbolKind.Class:
      return import_vscode_languageserver4.SymbolKind.Class;
    case SymbolKind.Method:
      return import_vscode_languageserver4.SymbolKind.Method;
    case SymbolKind.Property:
      return import_vscode_languageserver4.SymbolKind.Property;
    case SymbolKind.Field:
      return import_vscode_languageserver4.SymbolKind.Field;
    case SymbolKind.Constructor:
      return import_vscode_languageserver4.SymbolKind.Constructor;
    case SymbolKind.Enum:
      return import_vscode_languageserver4.SymbolKind.Enum;
    case SymbolKind.Interface:
      return import_vscode_languageserver4.SymbolKind.Interface;
    case SymbolKind.Function:
      return import_vscode_languageserver4.SymbolKind.Function;
    case SymbolKind.Variable:
      return import_vscode_languageserver4.SymbolKind.Variable;
    case SymbolKind.Constant:
      return import_vscode_languageserver4.SymbolKind.Constant;
    case SymbolKind.String:
      return import_vscode_languageserver4.SymbolKind.String;
    case SymbolKind.Number:
      return import_vscode_languageserver4.SymbolKind.Number;
    case SymbolKind.Boolean:
      return import_vscode_languageserver4.SymbolKind.Boolean;
    case SymbolKind.Array:
      return import_vscode_languageserver4.SymbolKind.Array;
    case SymbolKind.Object:
      return import_vscode_languageserver4.SymbolKind.Object;
    case SymbolKind.Key:
      return import_vscode_languageserver4.SymbolKind.Key;
    case SymbolKind.Null:
      return import_vscode_languageserver4.SymbolKind.Null;
    default:
      return import_vscode_languageserver4.SymbolKind.Variable;
  }
}
function provideDocumentSymbols(state) {
  try {
    const { ast } = state;
    if (!ast)
      return [];
    const symbols = getDocumentSymbols(ast);
    return symbols.map((sym) => convertSymbol(sym));
  } catch (error) {
    console.error("[Symbols] Error providing document symbols:", error);
    return [];
  }
}
function convertSymbol(sym) {
  const result = {
    name: sym.name,
    kind: toLspSymbolKind(sym.kind),
    range: toLspRange(sym.range),
    selectionRange: toLspRange(sym.selectionRange)
  };
  if (sym.detail) {
    result.detail = sym.detail;
  }
  if (sym.children && sym.children.length > 0) {
    result.children = sym.children.map(convertSymbol);
  }
  return result;
}
function provideWorkspaceSymbols(allStates, query) {
  const symbols = [];
  try {
    for (const state of allStates) {
      const { ast, uri } = state;
      if (!ast)
        continue;
      const docSymbols = getDocumentSymbols(ast);
      const flatSymbols = flattenSymbols(docSymbols, uri);
      for (const sym of flatSymbols) {
        if (!query || sym.name.toLowerCase().includes(query.toLowerCase())) {
          symbols.push(sym);
        }
      }
    }
  } catch (error) {
    console.error("[Symbols] Error providing workspace symbols:", error);
  }
  return symbols;
}
function flattenSymbols(symbols, uri, containerName) {
  const result = [];
  for (const sym of symbols) {
    result.push({
      name: sym.name,
      kind: toLspSymbolKind(sym.kind),
      location: {
        uri,
        range: toLspRange(sym.range)
      },
      containerName
    });
    if (sym.children && sym.children.length > 0) {
      result.push(...flattenSymbols(sym.children, uri, sym.name));
    }
  }
  return result;
}

// ../lsp/dist/providers/rename.js
function provideRename(state, line, character, newName) {
  try {
    const { ast, uri, store, service } = state;
    if (!ast || !store)
      return null;
    const index = store.get(positionIndexKey);
    const schemaContext = service.schemaContext;
    const refs = findReferencesAtPosition(
      ast,
      line,
      character,
      true,
      // include declaration
      schemaContext,
      void 0,
      // symbols (optional)
      index
    );
    if (refs.length === 0)
      return null;
    const edits = refs.map((ref) => ({
      range: toLspRange(ref.nameRange),
      newText: newName
    }));
    return {
      changes: {
        [uri]: edits
      }
    };
  } catch (error) {
    console.error("[Rename] Error providing rename:", error);
    return null;
  }
}

// ../lsp/dist/providers/semantic-tokens.js
function provideSemanticTokens(source, builder, tokenConfig) {
  if (!tokenConfig)
    return;
  try {
    const captures = tokenConfig.queryExecutor.executeQuery(source);
    const tokens = generateSemanticTokens(source, captures);
    for (const token of tokens) {
      builder.push(token.line, token.startChar, token.length, token.tokenType, token.tokenModifiers);
    }
  } catch (error) {
    console.error("[SemanticTokens] Error generating tokens:", error);
  }
}

// ../lsp/dist/server-core.js
function setupServer(connection2, config2) {
  const documents = new import_vscode_languageserver5.TextDocuments(TextDocument);
  const documentStore = new DocumentStore();
  let hasWorkspaceFolderCapability = false;
  const semanticTokensConfig = config2.enableSemanticTokens !== false && config2.queryExecutor ? { queryExecutor: config2.queryExecutor } : void 0;
  connection2.onInitialize(async (params) => {
    if (config2.onBeforeInitialize) {
      await config2.onBeforeInitialize();
    }
    const initializationOptions = params.initializationOptions;
    if (initializationOptions?.dialect) {
      config2.defaultDialect = initializationOptions.dialect;
    }
    const capabilities = params.capabilities;
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    connection2.console.log("[LSP] Server initialized");
    const result = {
      capabilities: {
        textDocumentSync: import_vscode_languageserver5.TextDocumentSyncKind.Full,
        hoverProvider: true,
        definitionProvider: true,
        referencesProvider: true,
        renameProvider: true,
        documentSymbolProvider: true,
        workspaceSymbolProvider: true,
        codeActionProvider: true
      }
    };
    if (config2.enableCompletionProvider !== false) {
      result.capabilities.completionProvider = {
        resolveProvider: false,
        triggerCharacters: ["@", ".", ":", "#", "="]
      };
    }
    if (config2.enableSemanticTokens !== false) {
      result.capabilities.semanticTokensProvider = {
        legend: {
          tokenTypes: [...TOKEN_TYPES],
          tokenModifiers: [...TOKEN_MODIFIERS]
        },
        full: true
      };
    }
    if (hasWorkspaceFolderCapability) {
      result.capabilities.workspace = {
        workspaceFolders: {
          supported: true
        }
      };
    }
    return result;
  });
  documents.onDidOpen((event) => {
    void validateTextDocument(event.document);
  });
  documents.onDidChangeContent((change) => {
    void validateTextDocument(change.document);
  });
  documents.onDidClose((event) => {
    const uri = event.document.uri;
    documentStore.delete(uri);
    void connection2.sendDiagnostics({
      uri,
      diagnostics: []
    });
  });
  function validateTextDocument(textDocument) {
    try {
      const text = textDocument.getText();
      const uri = textDocument.uri;
      const existingService = documentStore.get(uri)?.service;
      const state = processDocument(uri, text, config2, existingService);
      documentStore.set(state);
      void connection2.sendDiagnostics({
        uri,
        diagnostics: state.diagnostics
      });
      if (state.compileOutput != null) {
        void connection2.sendNotification("agentscript/compileResult", {
          uri,
          compileOutput: state.compileOutput
        });
      }
    } catch (error) {
      connection2.console.error(`[LSP] Error processing document: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  connection2.onHover((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return null;
    return provideHover(state, params.position.line, params.position.character, config2.dialects);
  });
  connection2.onCompletion((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return null;
    const triggerChar = params.context?.triggerCharacter;
    return provideCompletion(state, params.position.line, params.position.character, triggerChar, config2.dialects);
  });
  connection2.onDefinition((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return null;
    return provideDefinition(state, params.position.line, params.position.character);
  });
  connection2.onReferences((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return [];
    return provideReferences(state, params.position.line, params.position.character, params.context.includeDeclaration);
  });
  connection2.onCodeAction((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return [];
    return provideCodeActions(state, params.range, params.context.diagnostics);
  });
  connection2.onDocumentSymbol((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return [];
    return provideDocumentSymbols(state);
  });
  connection2.onWorkspaceSymbol((params) => {
    const allStates = documentStore.getAllStates();
    return provideWorkspaceSymbols(allStates, params.query);
  });
  connection2.onRenameRequest((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state)
      return null;
    return provideRename(state, params.position.line, params.position.character, params.newName);
  });
  connection2.languages.semanticTokens.on((params) => {
    const state = documentStore.get(params.textDocument.uri);
    if (!state) {
      return { data: [] };
    }
    const builder = new import_vscode_languageserver5.SemanticTokensBuilder();
    provideSemanticTokens(state.source, builder, semanticTokensConfig);
    return builder.build();
  });
  documents.listen(connection2);
  connection2.listen();
}

// ../../dialect/agentscript/dist/schema.js
var MessagesBlock = Block("MessagesBlock", {
  welcome: StringValue.describe("Welcome message shown to the user."),
  error: StringValue.describe("Error message shown on failure.").required()
}).describe("Pre-defined message templates.").example(`messages:
    welcome: "Hello! How can I help you today?"
    error: "Sorry, something went wrong. Please try again."`);
var SystemBlock = Block("SystemBlock", {
  instructions: StringValue.describe("System-level instructions for the agent. Supports {!<expression>} interpolation with context variables."),
  messages: MessagesBlock.describe("Default messages for certain situations (e.g., welcome, error).")
}, { symbol: { kind: SymbolKind.Namespace } }).describe("System-level instructions and messages that interact with the user.").example(`system:
    instructions: |
        You are a helpful, professional assistant for customer support.
        Always be polite, concise, and reassuring.
    messages:
        welcome: "Hello! How can I help you today?"
        error: "Sorry, something went wrong. Please try again."`);
var ConfigBlock = Block("ConfigBlock", {
  description: StringValue.describe("Agent description. Defaults to label.")
}).describe("High-level agent configuration.").example(`config:
    agent_name: "My_Agent"
    description: "An AI assistant for customer support"`);
var LanguageBlock = Block("LanguageBlock", {
  default_locale: StringValue.describe('The primary locale for the agent (e.g., "en_US", "de", "fr").'),
  additional_locales: StringValue.describe("Comma-separated list of additional supported locales."),
  all_additional_locales: BooleanValue.describe("Whether to support all available locales.")
}).describe("Locale and language configuration.").example(`language:
    default_locale: "en_US"
    additional_locales: "fr, de"
    all_additional_locales: True`);
var DialectReasoningActionBlock = ReasoningActionBlock.extend({}, { colinear: ExpressionValue.resolvedType("invocationTarget") });
var DialectReasoningActionsBlock = CollectionBlock(DialectReasoningActionBlock).describe("Collection of reasoning action bindings.");
var ReasoningBlock = Block("ReasoningBlock", {
  instructions: ProcedureValue.describe("Procedural instructions for the reasoning loop. Supports templating and directives."),
  actions: DialectReasoningActionsBlock.describe("Actions available to the agent during the reasoning loop.")
}, { symbol: { kind: SymbolKind.Namespace } }).describe("Instructions and actions for the agent's reasoning loop.").example(`    reasoning:
        instructions: ->
            # Conditional logic can be embedded in instructions
            if @variables.checked_loyalty_tier == False:
                run @actions.Get_Loyalty_Tier
                    with member_email = @variables.member_email
                    set @variables.loyalty_tier = @outputs.loyalty_tier
                set @variables.checked_loyalty_tier = True
            if @variables.loyalty_tier != "Premium":
                | Basic members are not eligible for returns. Apologize and
                  explain alternatives like exchanges or store credit.
            else:
                | If the user wants a return, confirm which order and process
                  with {!@actions.create_return}.

            # Main instructions use {!@variables.x} and {!@actions.Name} for interpolation
            | Analyze the user's request. Use {!@actions.lookup_order} to retrieve
              order details. Current status: {! @variables.request_status }
        actions:
            # Bind an action \u2014 LLM can invoke during reasoning
            lookup_order: @actions.Lookup_Order
                with order_number=@variables.order_number
                set @variables.status = @outputs.status
                set @variables.order_id = @outputs.order_id

            # LLM slot-filled input (... = LLM provides the value from conversation)
            search: @actions.Search_Products
                with query=...
                set @variables.results = @outputs.products

            # Conditional availability guard
            create_return: @actions.Create_Return
                available when @variables.return_eligible == True
                with order_id = @variables.order_id
                set @variables.rma_number = @outputs.rma_number

            # Chained run \u2014 execute a follow-up action after the first completes
            lookup_by_email: @actions.Lookup_Order_By_Email
                with email=@variables.member_email
                set @variables.order_number = @outputs.order_number
                run @actions.Lookup_Order
                    with order_number=@variables.order_number
                    set @variables.status = @outputs.status

            # Transition to another subagent
            go_to_returns: @utils.transition to @subagent.Return_Management
                description: "Route to returns when user wants to return items"
                available when @variables.verified is True

            # Set variables from conversation (LLM fills values)
            capture_info: @utils.setVariables
                description: "Capture customer information from conversation"
                with member_email=...
                with member_number=...

            # Escalate to a human agent
            escalate: @utils.escalate
                description: "Hand off to a live human agent"`);
var baseSubagentFields = {
  label: StringValue.describe("Display label shown in the UI.").accepts([
    "StringLiteral"
  ]),
  description: StringValue.describe("Block description. Influences transitions to this block.").required(),
  system: SystemBlock.pick(["instructions"]),
  actions: ActionsBlock.describe("Action definitions available to this block."),
  before_reasoning: ProcedureValue.describe("Procedures that run before the reasoning loop starts, once per turn.").omitArrow().disallowTemplates("Templates are for LLM instructions and should only be used in reasoning.instructions."),
  after_reasoning: ProcedureValue.describe("Procedures that run after the reasoning loop completes, once per turn.").omitArrow().disallowTemplates("Templates are for LLM instructions and should only be used in reasoning.instructions."),
  reasoning: ReasoningBlock.describe("Reasoning block containing instructions and actions for the agent reasoning loop.")
};
var baseAgentOpts = {
  allowAnonymous: true,
  capabilities: ["invocationTarget", "transitionTarget"]
};
var SubagentBlock = NamedBlock("SubagentBlock", { ...baseSubagentFields }, {
  scopeAlias: "subagent",
  ...baseAgentOpts
}).describe("A subagent defining agent logic with actions and reasoning.");
var StartAgentBlock = NamedBlock("StartAgentBlock", { ...baseSubagentFields }, {
  scopeAlias: "subagent",
  ...baseAgentOpts
}).describe("The entry-point agent block.");
var ConnectedSubagentBlock = NamedBlock("ConnectedSubagentBlock", {
  target: StringValue.accepts(["StringLiteral"]).describe('URI identifying the connected agent (e.g., "agentforce://Agent_Name").').required().pattern(/^[a-zA-Z][a-zA-Z0-9_]*:\/\/\S+$/),
  label: StringValue.describe("Human-readable label for the connected agent."),
  description: StringValue.describe("Description of the connected agent's capabilities or when it should be called."),
  loading_text: StringValue.describe("Message to display while the connected agent is executing."),
  inputs: InputsBlock
}, { capabilities: ["invocationTarget", "transitionTarget"] });
var AgentScriptSchema = {
  system: SystemBlock,
  config: ConfigBlock,
  variables: VariablesBlock,
  language: LanguageBlock,
  connected_subagent: NamedCollectionBlock(ConnectedSubagentBlock),
  start_agent: NamedCollectionBlock(StartAgentBlock.clone().example(`# Exactly one start_agent is required as the entry point
start_agent topic_selector:
    label: "Topic Selector"
    description: "Welcome user and route to the right subagent"

    reasoning:
        instructions: ->
            | Welcome the user. Analyze their request and route accordingly:
              {!@actions.go_to_orders}: For order lookups and updates
              {!@actions.go_to_returns}: For return requests
              {!@actions.go_to_escalation}: When user is upset or asks for a person
        actions:
            go_to_orders: @utils.transition to @subagent.Order_Management
                description: "Handle order inquiries"
                available when @variables.verified == True
            go_to_returns: @utils.transition to @subagent.Return_Management
                description: "Handle return requests"
                available when @variables.verified == True
            go_to_escalation: @utils.transition to @subagent.escalation
                description: "Escalate to human agent"`)).singular(),
  subagent: NamedCollectionBlock(SubagentBlock.clone().example(`# Additional subagents handle specific conversation areas
subagent Order_Management:
    description: "Handles order lookups, updates, and summaries"

    # Optional subagent-level system instruction override
    system:
        instructions: "Focus on helping the user with their order. Never expose internal record IDs."

    # before_reasoning runs BEFORE the LLM reasoning loop on every turn
    before_reasoning:
        if @variables.verified is not True:
            transition to @subagent.Identity
        # Run an action and store results in variables
        run @actions.Check_Business_Hours
            set @variables.is_business_hours = @outputs.is_business_hours

    # Action definitions \u2014 external actions the agent can call
    actions:
        Lookup_Order:
            description: "Retrieve order details"
            inputs:
                order_number: string
                    description: "The order number to look up"
                    is_required: True
                    is_user_input: True
            outputs:
                status: string
                    description: "Order status"
                items: string
                order_id: string
            target: "flow://Lookup_Order"

        Check_Business_Hours:
            description: "Check if it is currently business hours"
            inputs:
                query: string
            outputs:
                is_business_hours: boolean
                next_open_time: string
            target: "flow://Check_Business_Hours"

    reasoning:
        instructions: ->
            | Ask for the Order Number and call {!@actions.lookup_order}.
              Summarize: status, items, delivery info.
              Never show the Record ID: {!@variables.order_id}
        actions:
            lookup_order: @actions.Lookup_Order
                with order_number=...
                set @variables.status = @outputs.status
                set @variables.order_id = @outputs.order_id

            go_to_return: @utils.transition to @subagent.Return_Management
                description: "If user wants to return items"

    # after_reasoning runs AFTER the LLM reasoning loop on every turn
    after_reasoning:
        if @variables.severe_weather_alert:
            transition to @subagent.severe_weather_alerts
        set @variables.request_count = @variables.request_count + 1`))
};
var AgentScriptSchemaAliases = {
  start_agent: "subagent"
};
var AgentScriptSchemaInfo = {
  schema: AgentScriptSchema,
  aliases: AgentScriptSchemaAliases,
  // TODO: globalScopes are just bags of member names with no type information.
  // Each member is an invokable with its own signature — e.g. transition takes a
  // transitionTarget argument, setVariables takes variable bindings, escalate takes
  // no arguments. These need to be promoted to typed declarations so they participate
  // in resolvedType validation instead of being silently skipped.
  globalScopes: {
    utils: /* @__PURE__ */ new Set(["transition", "setVariables", "escalate"]),
    system_variables: /* @__PURE__ */ new Set(["user_input"])
  }
};
var agentScriptSchemaContext = createSchemaContext(AgentScriptSchemaInfo);

// ../../dialect/agentscript/dist/lint/passes/type-map.js
function getTypeText(decl) {
  const type = decl.type;
  if (!type)
    return null;
  const cst = type.__cst;
  return cst?.node?.text?.trim() ?? null;
}
function extractBooleanField(node) {
  if (!node || typeof node !== "object")
    return void 0;
  const obj = node;
  if (obj.__kind !== "BooleanValue" || typeof obj.value !== "boolean")
    return void 0;
  const cst = obj.__cst;
  if (!cst)
    return void 0;
  const parent = cst.node.parent;
  let keyRange = cst.range;
  if (parent?.type === "mapping_element") {
    const keyNode = parent.childForFieldName("key");
    if (keyNode)
      keyRange = toRange(keyNode);
  }
  return { value: obj.value, keyRange, node: obj };
}
function extractStringField(node) {
  if (!node || typeof node !== "object")
    return void 0;
  const obj = node;
  if (obj.__kind !== "StringLiteral" || typeof obj.value !== "string")
    return void 0;
  const cst = obj.__cst;
  if (!cst)
    return void 0;
  const parent = cst.node.parent;
  let keyRange = cst.range;
  if (parent?.type === "mapping_element") {
    const keyNode = parent.childForFieldName("key");
    if (keyNode)
      keyRange = toRange(keyNode);
  }
  return { value: obj.value, keyRange, node: obj };
}
function extractParamMap(mapValue) {
  const result = /* @__PURE__ */ new Map();
  if (!mapValue || !isNamedMap(mapValue))
    return result;
  for (const [name, decl] of mapValue) {
    if (!decl || typeof decl !== "object")
      continue;
    const obj = decl;
    const typeText = getTypeText(obj);
    if (!typeText)
      continue;
    const info = {
      type: typeText,
      hasDefault: obj.defaultValue != null
    };
    const props = obj.properties;
    if (props) {
      const isRequired2 = extractBooleanField(props.is_required);
      if (isRequired2)
        info.isRequired = isRequired2.value;
    }
    result.set(name, info);
  }
  return result;
}
function extractOutputParamMap(mapValue) {
  const result = /* @__PURE__ */ new Map();
  if (!mapValue || !isNamedMap(mapValue))
    return result;
  for (const [name, decl] of mapValue) {
    if (!decl || typeof decl !== "object")
      continue;
    const obj = decl;
    const typeText = getTypeText(obj);
    if (!typeText)
      continue;
    const info = {
      type: typeText,
      hasDefault: obj.defaultValue != null
    };
    const props = obj.properties;
    if (props) {
      const isDisplayable = extractBooleanField(props.is_displayable);
      if (isDisplayable)
        info.isDisplayable = isDisplayable;
      const isUsedByPlanner = extractBooleanField(props.is_used_by_planner);
      if (isUsedByPlanner)
        info.isUsedByPlanner = isUsedByPlanner;
    }
    result.set(name, info);
  }
  return result;
}
var typeMapKey = storeKey("type-map");
var TypeMapAnalyzer = class {
  id = typeMapKey;
  description = "Extracts structured type information for variables and action parameters";
  variables = /* @__PURE__ */ new Map();
  init() {
    this.variables = /* @__PURE__ */ new Map();
  }
  visitVariables(varsMap) {
    for (const [name, decl] of varsMap) {
      if (!decl || typeof decl !== "object")
        continue;
      const obj = decl;
      const typeText = getTypeText(obj);
      if (!typeText)
        continue;
      const modifier = obj.modifier;
      this.variables.set(name, {
        type: typeText,
        modifier: modifier?.name
      });
    }
  }
  finalize(store, root) {
    const ctx = store.get(schemaContextKey);
    const actions = /* @__PURE__ */ new Map();
    const transitionTargets = /* @__PURE__ */ new Map();
    const rootObj = root;
    if (ctx) {
      const subagentKeys = /* @__PURE__ */ new Set([
        ...resolveNamespaceKeys("subagent", ctx),
        ...resolveNamespaceKeys("topic", ctx)
      ]);
      for (const topicKey of subagentKeys) {
        const topicMap = rootObj[topicKey];
        if (!topicMap || !isNamedMap(topicMap))
          continue;
        for (const [topicName, block] of topicMap) {
          if (!block || typeof block !== "object")
            continue;
          const topic = block;
          const actionsMap = topic.actions;
          if (actionsMap && isNamedMap(actionsMap)) {
            for (const [actName, actBlock] of actionsMap) {
              if (!actBlock || typeof actBlock !== "object")
                continue;
              const act = actBlock;
              const inputs = extractParamMap(act.inputs);
              const outputs = extractOutputParamMap(act.outputs);
              const requireUserConfirmation = extractBooleanField(act.require_user_confirmation);
              const sourceNode = act.source;
              const source = sourceNode && typeof sourceNode.value === "string" ? sourceNode.value : void 0;
              const target = extractStringField(act.target);
              if (!actions.has(topicName)) {
                actions.set(topicName, /* @__PURE__ */ new Map());
              }
              actions.get(topicName).set(actName, {
                inputs,
                outputs,
                requireUserConfirmation,
                source,
                target
              });
            }
          }
          collectTransitionTargets(topic.before_reasoning, transitionTargets);
          collectTransitionTargets(topic.after_reasoning, transitionTargets);
          const reasoning = topic.reasoning;
          const reasoningTools = reasoning?.actions;
          if (reasoningTools && isNamedMap(reasoningTools)) {
            for (const [, raBlock] of reasoningTools) {
              if (!raBlock || typeof raBlock !== "object")
                continue;
              collectTransitionTargets(raBlock, transitionTargets);
            }
          }
        }
      }
    }
    const connectedAgents = /* @__PURE__ */ new Map();
    const caMap = rootObj.connected_subagent;
    if (caMap && isNamedMap(caMap)) {
      for (const [agentName, block] of caMap) {
        if (!block || typeof block !== "object")
          continue;
        const node = block;
        const inputsMap = node.inputs;
        const inputs = /* @__PURE__ */ new Map();
        if (inputsMap && isNamedMap(inputsMap)) {
          for (const [inputName, paramDef] of inputsMap) {
            if (!paramDef || typeof paramDef !== "object")
              continue;
            const decl = paramDef;
            const typeText = getTypeText(decl);
            if (!typeText)
              continue;
            const defaultValue = decl.defaultValue;
            const defaultValueCst = defaultValue?.__cst;
            inputs.set(inputName, {
              type: typeText,
              hasDefault: defaultValue != null,
              decl,
              defaultValueNode: defaultValue,
              defaultValueCst: defaultValueCst ?? void 0
            });
          }
        }
        const targetNode = node.target;
        const target = targetNode && typeof targetNode.value === "string" ? targetNode.value : void 0;
        connectedAgents.set(agentName, { inputs, target, targetNode });
      }
    }
    store.set(typeMapKey, {
      variables: this.variables,
      actions,
      connectedAgents,
      transitionTargets
    });
  }
};
function collectTransitionTargets(block, targets) {
  if (!block || typeof block !== "object")
    return;
  const obj = block;
  const stmts = obj.statements;
  if (!stmts)
    return;
  for (const stmt of stmts) {
    collectTransitionTargetsFromStatement(stmt, obj, targets);
  }
}
function collectTransitionTargetsFromStatement(stmt, diagnosticParent, targets) {
  if (stmt.__kind === "ToClause") {
    collectToTarget(stmt, diagnosticParent, targets);
  } else if (stmt.__kind === "TransitionStatement") {
    const clauses = stmt.clauses;
    if (clauses) {
      for (const clause of clauses) {
        if (clause.__kind === "ToClause") {
          collectToTarget(clause, diagnosticParent, targets);
        }
      }
    }
  } else if (stmt.__kind === "IfStatement") {
    const body = stmt.body;
    if (body) {
      for (const s of body)
        collectTransitionTargetsFromStatement(s, diagnosticParent, targets);
    }
    const orelse = stmt.orelse;
    if (orelse) {
      for (const s of orelse)
        collectTransitionTargetsFromStatement(s, diagnosticParent, targets);
    }
  }
}
function collectToTarget(toClause, diagnosticParent, targets) {
  const target = toClause.target;
  if (!target || typeof target !== "object")
    return;
  const ref = decomposeAtMemberExpression(target);
  if (!ref)
    return;
  const targetCst = target.__cst;
  const range = targetCst?.range ?? toClause.__cst?.range;
  if (!range)
    return;
  const entry = {
    namespace: ref.namespace,
    property: ref.property,
    range,
    diagnosticParent
  };
  const list = targets.get(ref.namespace);
  if (list) {
    list.push(entry);
  } else {
    targets.set(ref.namespace, [entry]);
  }
}
function typeMapAnalyzer() {
  return new TypeMapAnalyzer();
}

// ../../dialect/agentscript/dist/lint/passes/reasoning-actions.js
var reasoningActionsKey = storeKey("reasoning-actions");
var ReasoningActionsAnalyzer = class {
  id = reasoningActionsKey;
  description = "Pre-resolves reasoning action references and their action signatures";
  finalizeAfter = [typeMapKey];
  finalize(store, root) {
    const typeMap = store.get(typeMapKey);
    if (!typeMap)
      return;
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    const raw = [];
    const rootObj = root;
    const subagentKeys = /* @__PURE__ */ new Set([
      ...resolveNamespaceKeys("subagent", ctx),
      ...resolveNamespaceKeys("topic", ctx)
    ]);
    for (const topicKey of subagentKeys) {
      const topicMap = rootObj[topicKey];
      if (!topicMap || !isNamedMap(topicMap))
        continue;
      for (const [topicName, block] of topicMap) {
        if (!block || typeof block !== "object")
          continue;
        const topic = block;
        const reasoning = topic.reasoning;
        if (!reasoning || typeof reasoning !== "object")
          continue;
        const reasoningObj = reasoning;
        const raActions = reasoningObj.actions;
        if (!raActions || !isNamedMap(raActions))
          continue;
        for (const [, raBlock] of raActions) {
          if (!raBlock || typeof raBlock !== "object")
            continue;
          const ra = raBlock;
          if (ra.__kind !== "ReasoningActionBlock")
            continue;
          if (!ra.value) {
            const raCst = ra.__cst;
            if (raCst) {
              attachDiagnostic(ra, lintDiagnostic(raCst.range, `Reasoning action is missing a target reference (e.g., @actions.Name, @utils.transition, @utils.setVariables)`, DiagnosticSeverity.Error, "missing-action-reference"));
            }
            continue;
          }
          const statements = ra.statements;
          const valueCst = ra.value?.__cst;
          const actionRefRange = valueCst?.range ?? ra.__cst?.range;
          const refActionName = resolveColinearAction(ra);
          if (refActionName) {
            raw.push({
              topicName,
              refActionName,
              namespace: "actions",
              ra,
              statements,
              actionRefRange
            });
            continue;
          }
          const decomposed = decomposeAtMemberExpression(ra.value);
          if (decomposed && decomposed.namespace === "connected_subagent") {
            raw.push({
              topicName,
              refActionName: decomposed.property,
              namespace: "connected_subagent",
              ra,
              statements,
              actionRefRange
            });
          }
        }
      }
    }
    const entries = [];
    for (const r of raw) {
      let sig;
      if (r.namespace === "actions") {
        sig = typeMap.actions.get(r.topicName)?.get(r.refActionName);
      } else if (r.namespace === "connected_subagent") {
        const agentInfo = typeMap.connectedAgents.get(r.refActionName);
        if (agentInfo) {
          sig = connectedAgentSignature(agentInfo);
        }
      }
      if (!sig)
        continue;
      entries.push({
        topicName: r.topicName,
        refActionName: r.refActionName,
        sig,
        ra: r.ra,
        statements: r.statements,
        actionRefRange: r.actionRefRange
      });
    }
    store.set(reasoningActionsKey, entries);
  }
};
function reasoningActionsAnalyzer() {
  return new ReasoningActionsAnalyzer();
}
function connectedAgentSignature(info) {
  const inputs = /* @__PURE__ */ new Map();
  for (const [name, inputInfo] of info.inputs) {
    inputs.set(name, {
      type: inputInfo.type,
      hasDefault: inputInfo.hasDefault
    });
  }
  return { inputs, outputs: /* @__PURE__ */ new Map() };
}

// ../../dialect/agentscript/dist/lint/passes/action-io.js
function actionIoRule() {
  return defineRule({
    id: "action-io",
    description: "Validates with/set clauses match action input/output definitions",
    deps: { entry: each(reasoningActionsKey) },
    run({ entry }) {
      const { refActionName, sig, statements, actionRefRange, ra } = entry;
      const inputNames = [...sig.inputs.keys()];
      const outputNames = [...sig.outputs.keys()];
      const providedInputs = /* @__PURE__ */ new Set();
      if (!statements) {
        for (const [inputName, info] of sig.inputs) {
          if (!info.hasDefault && info.isRequired !== false && actionRefRange) {
            attachDiagnostic(ra, lintDiagnostic(actionRefRange, `Missing required input '${inputName}' for action '${refActionName}'`, DiagnosticSeverity.Error, "action-missing-input"));
          }
        }
        return;
      }
      for (const stmt of statements) {
        if (stmt.__kind === "WithClause") {
          const param = stmt.param;
          if (!param)
            continue;
          providedInputs.add(param);
          if (!sig.inputs.has(param)) {
            const cst = stmt.__cst;
            if (cst) {
              const paramCstNode = stmt.__paramCstNode;
              const range = paramCstNode ? toRange(paramCstNode) : cst.range;
              const suggestion = findSuggestion(param, inputNames);
              const msg = `'${param}' is not a defined input of action '${refActionName}'`;
              attachDiagnostic(stmt, lintDiagnostic(range, msg, DiagnosticSeverity.Error, "action-unknown-input", { suggestion }));
            }
          }
        }
        if (stmt.__kind === "SetClause") {
          const outputRef = extractOutputRef(stmt.value);
          if (outputRef && !sig.outputs.has(outputRef.name)) {
            const cst = outputRef.cst;
            if (cst) {
              const suggestion = findSuggestion(outputRef.name, outputNames);
              const msg = `'${outputRef.name}' is not a defined output of action '${refActionName}'`;
              attachDiagnostic(stmt, lintDiagnostic(cst.range, msg, DiagnosticSeverity.Error, "action-unknown-output", { suggestion }));
            }
          }
        }
      }
      for (const [inputName, info] of sig.inputs) {
        if (!info.hasDefault && info.isRequired !== false && !providedInputs.has(inputName) && actionRefRange) {
          attachDiagnostic(ra, lintDiagnostic(actionRefRange, `Missing required input '${inputName}' for action '${refActionName}'`, DiagnosticSeverity.Error, "action-missing-input"));
        }
      }
    }
  });
}

// ../../dialect/agentscript/dist/lint/passes/action-type-check.js
function inferExpressionType(expr, typeMap) {
  if (!expr || typeof expr !== "object")
    return null;
  const obj = expr;
  const varName = extractVariableRef(expr);
  if (varName) {
    return typeMap.variables.get(varName)?.type ?? null;
  }
  switch (obj.__kind) {
    case "StringLiteral":
    case "TemplateExpression":
      return "string";
    case "NumberLiteral":
      return "number";
    case "BooleanLiteral":
      return "boolean";
    default:
      return null;
  }
}
function typesCompatible(expected, actual) {
  const e = expected.toLowerCase();
  const a = actual.toLowerCase();
  if (e === a)
    return true;
  if (e === "object" || a === "object")
    return true;
  return false;
}
function actionTypeCheckRule() {
  return defineRule({
    id: "action-type-check",
    description: "Validates type compatibility in with/set clauses against action parameter types",
    deps: {
      typeMap: typeMapKey,
      entry: each(reasoningActionsKey)
    },
    run({ typeMap, entry }) {
      const { sig, statements } = entry;
      if (!statements)
        return;
      for (const stmt of statements) {
        if (stmt.__kind === "WithClause") {
          const param = stmt.param;
          if (!param)
            continue;
          const inputInfo = sig.inputs.get(param);
          if (!inputInfo)
            continue;
          const actualType = inferExpressionType(stmt.value, typeMap);
          if (actualType && !typesCompatible(inputInfo.type, actualType)) {
            const cst = stmt.__cst;
            if (cst) {
              attachDiagnostic(stmt, typeMismatchDiagnostic(cst.range, `Type mismatch: input '${param}' expects '${inputInfo.type}' but got '${actualType}'`, inputInfo.type, actualType, LINT_SOURCE));
            }
          }
        }
        if (stmt.__kind === "SetClause") {
          const outputRef = extractOutputRef(stmt.value);
          if (!outputRef)
            continue;
          const outputInfo = sig.outputs.get(outputRef.name);
          if (!outputInfo)
            continue;
          const targetVarName = extractVariableRef(stmt.target);
          if (!targetVarName)
            continue;
          const targetType = typeMap.variables.get(targetVarName)?.type;
          if (targetType && !typesCompatible(targetType, outputInfo.type)) {
            const cst = stmt.__cst;
            if (cst) {
              attachDiagnostic(stmt, typeMismatchDiagnostic(cst.range, `Type mismatch: output '${outputRef.name}' is '${outputInfo.type}' but target '@variables.${targetVarName}' expects '${targetType}'`, targetType, outputInfo.type, LINT_SOURCE));
            }
          }
        }
      }
    }
  });
}

// ../../dialect/agentscript/dist/lint/passes/index.js
function defaultRules() {
  return [
    // Base passes
    symbolTableAnalyzer(),
    duplicateKeyPass(),
    requiredFieldPass(),
    singularCollectionPass(),
    constraintValidationPass(),
    positionIndexPass(),
    unreachableCodePass(),
    emptyBlockPass(),
    unusedVariablePass(),
    expressionValidationPass(),
    // AgentScript analyzers
    typeMapAnalyzer(),
    reasoningActionsAnalyzer(),
    // Validation
    undefinedReferencePass(),
    actionIoRule(),
    actionTypeCheckRule()
  ];
}

// ../../dialect/agentscript/dist/pkg-meta.js
var DIALECT_NAME = "agentscript";
var DIALECT_VERSION = "2.5.13";

// ../../dialect/agentscript/dist/index.js
var agentscriptDialect = {
  name: DIALECT_NAME,
  displayName: "AgentScript",
  description: "Standard AgentScript dialect",
  version: DIALECT_VERSION,
  schemaInfo: AgentScriptSchemaInfo,
  createRules: defaultRules,
  source: "agentscript-lint"
};

// ../../dialect/agentforce/dist/schema.js
var AFVariablesBlock = VariablesBlock.extendProperties({
  source: ReferenceValue.describe("Where the variable gets its value. Required for linked variables, not allowed for mutable variables (e.g., @MessagingSession.Id).").allowedNamespaces(["MessagingSession", "MessagingEndUser"]),
  visibility: StringValue.describe("Visibility level for the variable.").enum([
    "Internal",
    "External",
    "internal",
    "external"
  ]),
  is_displayable: BooleanValue.describe("Whether this variable is visible in the UI."),
  is_used_by_planner: BooleanValue.describe("Whether the planner can read this variable.")
}).withKeyPattern("^(?!.*__)[a-zA-Z][a-zA-Z0-9_]*$");
var AFInputsBlock = InputsBlock.extendProperties({
  complex_data_type_name: StringValue.describe('Complex data type name (e.g., "@apexClassType/c__RequestMetadata"). For object type, defaults to "lightning__objectType".'),
  schema: StringValue.describe('Schema URI for input validation (e.g., "schema://city_schema").'),
  is_user_input: BooleanValue.describe("Whether this input comes from the user."),
  filter_from_agent: BooleanValue.describe("Whether to filter this input from the agent context."),
  is_displayable: BooleanValue.describe("Whether this input can be shown to users."),
  is_used_by_planner: BooleanValue.describe("Whether the planner can use this input.")
});
var AFOutputsBlock = OutputsBlock.extendProperties({
  developer_name: StringValue.describe("Developer name identifier for the output field."),
  is_displayable: BooleanValue.describe("Whether this output can be shown to users."),
  is_used_by_planner: BooleanValue.describe("Whether the planner can read this output."),
  complex_data_type_name: StringValue.describe('Complex data type name. For object type, defaults to "lightning__objectType".'),
  filter_from_agent: BooleanValue.describe("Whether to filter this output from the agent context.")
});
var ModelConfigParamsBlock = Block("ModelConfigParamsBlock", {}).describe("Model parameters as key-value pairs. Accepts arbitrary parameters that vary by model (e.g., temperature, max_tokens, top_p). Values can be strings, numbers, booleans, or arrays. Parameters are dynamically extracted at compile time.");
var ModelConfigBlock = Block("ModelConfigBlock", {
  model: StringValue.describe('Model identifier URI (e.g., "model://...")'),
  params: ModelConfigParamsBlock.describe("Additional model parameters (e.g., temperature: 0.7, max_tokens: 2000)")
}).describe("Model selection and parameter configuration.");
var ContextMemoryBlock = Block("ContextMemoryBlock", {
  enabled: BooleanValue.describe("Whether memory is enabled for the agent.")
}).describe("Memory configuration for the agent.");
var ContextBlock = Block("ContextBlock", {
  memory: ContextMemoryBlock.describe("Memory configuration.")
}).describe("Context configuration for the agent.");
var AFConfigBlock = ConfigBlock.extend({
  developer_name: StringValue.describe("Agent identifier. Must follow standard name field requirements. Set this or agent_name (not both)."),
  agent_label: StringValue.describe("Display label for the agent. Defaults to normalized developer_name.").accepts(["StringLiteral"]),
  agent_description: StringValue.describe("Agent description used in prompts and routing. Distinct from description (internal documentation)."),
  agent_type: StringValue.describe('Agent type (e.g., "AgentforceServiceAgent", "AgentforceEmployeeAgent", "SalesEinsteinCoach").').enum([
    "AgentforceServiceAgent",
    "AgentforceEmployeeAgent",
    "SalesEinsteinCoach"
  ]),
  agent_id: StringValue.describe("Unique identifier for the agent."),
  agent_name: StringValue.describe("Internal name for the agent."),
  default_agent_user: StringValue.describe("Default user identity. Required for AgentforceServiceAgent type."),
  agent_version: StringValue.describe('Version identifier for the agent (e.g., "v1").'),
  enable_enhanced_event_logs: BooleanValue.describe("Whether to record enhanced event logs for debugging and analytics."),
  company: StringValue.describe("Company information. Can be embedded in subagent prompts for context."),
  role: StringValue.describe("Job description or role for the agent."),
  planner_type: StringValue.describe('Planner type (e.g., "AiCopilot__ReAct", "Atlas__ConcurrentMultiAgentOrchestration").'),
  additional_parameter__reset_to_initial_node: BooleanValue.describe("Whether to reset to the initial node between turns.").hidden(),
  additional_parameter__DISABLE_GROUNDEDNESS: BooleanValue.describe("Whether to disable groundedness checking.").hidden(),
  debug: BooleanValue.describe("Whether to enable debug mode."),
  max_tokens: NumberValue.describe("Maximum number of tokens for responses."),
  temperature: NumberValue.describe("Sampling temperature for model responses."),
  agent_template: StringValue.describe("Template name identifier for the agent."),
  outbound_flow: StringValue.describe("API name of the default outbound flow for escalation routing."),
  user_locale: StringValue.describe('User locale override (e.g., "en_US").').deprecated("Use the language block instead.")
}, {
  wildcardPrefixes: [
    { prefix: "additional_parameter__", fieldType: ExpressionValue }
  ]
}).example(`config:
    developer_name: "customer_support_agent"
    agent_label: "Customer Support Agent"
    description: "Assists customers with orders, returns, and account management"
    default_agent_user: "support@example.com"
    agent_type: "AgentforceServiceAgent"
    enable_enhanced_event_logs: True
    additional_parameter__reset_to_initial_node: True`);
var AFActionBlock = ActionBlock.extend({
  source: StringValue.describe('Source URI for the action (e.g., "custom://weather_api").'),
  require_user_confirmation: BooleanValue.describe("Whether to require user confirmation before executing."),
  include_in_progress_indicator: BooleanValue.describe("Whether to show a progress indicator during execution."),
  progress_indicator_message: StringValue.describe("Message shown during execution. Only used if include_in_progress_indicator is True."),
  inputs: AFInputsBlock,
  outputs: AFOutputsBlock
}).example(`    actions:
        Lookup_Order:
            description: "Retrieve order details by order number"
            label: "Lookup Order"
            require_user_confirmation: False
            include_in_progress_indicator: True
            progress_indicator_message: "Looking up your order..."
            inputs:
                order_number: string
                    description: "The order number to look up"
                    is_required: True
                    is_user_input: True
                email: string
                    description: "Customer email for verification"
                    is_required: False
                    is_user_input: False
            outputs:
                status: string
                    description: "Order status"
                    is_displayable: True
                order_id: string
                    description: "Internal order record ID"
                    is_displayable: False
                    filter_from_agent: True
                items: list[object]
                    description: "Items in the order"
                    is_displayable: True
            target: "flow://Lookup_Order_By_Number"

        # Target URI formats:
        #   flow://Flow_API_Name                        \u2014 Salesforce Flow
        #   apex://Apex_Class_Name                      \u2014 Apex invocable action
        #   externalService://endpoint_name             \u2014 External service
        #   standardInvocableAction://Action_Name       \u2014 Standard Salesforce invocable action`);
var AFActionsBlock = CollectionBlock(AFActionBlock);
var SecurityBlock = Block("SecurityBlock", {
  sharing_policy: Block("SharingPolicyBlock", {
    use_default_sharing_entities: BooleanValue.describe("Sharing policy for the agent."),
    custom_sharing_entities: ExpressionSequence().describe("Custom sharing entities for the agent.")
  }).describe("Sharing policy for the agent."),
  verified_customer_record_access: Block("VerifiedCustomerRecordAccessBlock", {
    use_default_objects: BooleanValue.describe("Whether to use default objects for record access filtering."),
    additional_objects: ExpressionSequence().describe("Additional objects for record access filtering.")
  }).describe("Verified customer record access configuration.")
}).describe("Agent security configuration");
var sharedBlockFields = {
  ...baseSubagentFields,
  // Agentforce-specific fields
  model_config: ModelConfigBlock.describe("Model configuration for this block."),
  security: SecurityBlock
};
var sharedBlockOpts = {
  allowAnonymous: true,
  capabilities: ["invocationTarget", "transitionTarget"]
};
var AFTopicBlock = NamedBlock("TopicBlock", {
  ...sharedBlockFields,
  actions: AFActionsBlock,
  reasoning: ReasoningBlock
}, { scopeAlias: "topic", ...sharedBlockOpts }).describe("A topic defining agent logic with actions and reasoning.");
var AFSubagentBlock = NamedBlock("SubagentBlock", {
  ...sharedBlockFields,
  actions: AFActionsBlock,
  reasoning: ReasoningBlock
}, { scopeAlias: "subagent", ...sharedBlockOpts }).describe("A subagent defining agent logic with actions and reasoning.");
var AFStartAgentBlock = StartAgentBlock.extend({
  actions: AFActionsBlock,
  reasoning: ReasoningBlock,
  model_config: ModelConfigBlock.describe("Configuration for the model used by this block."),
  security: SecurityBlock
}, { scopeAlias: "topic" });
var KnowledgeBlock = Block("KnowledgeBlock", {
  citations_url: StringValue.describe("URL prefix for citation links."),
  rag_feature_config_id: StringValue.describe("RAG feature configuration identifier. Typically a UUID-based identifier."),
  citations_enabled: BooleanValue.describe("Whether to include citations in responses.")
}).describe("Knowledge and citation configuration for RAG-based question answering.").example(`knowledge:
    citations_url: "https://help.example.com"
    rag_feature_config_id: "my_knowledge_base"
    citations_enabled: True`);
var ResponseActionsEntryBlock = NamedBlock("ResponseActionsBlock", {
  description: StringValue.describe("Description of the tool provided to the LLM. Overrides the action description."),
  label: StringValue.describe("Human-readable label for the tool. Not provided to the LLM.")
}, {
  colinear: ExpressionValue,
  body: ProcedureValue,
  symbol: { kind: SymbolKind.Method },
  scopeAlias: "action"
}).describe("Reasoning loop for connections.");
var ConnectionBlock = NamedBlock("ConnectionBlock", {
  adaptive_response_allowed: BooleanValue.describe("Whether adaptive responses are allowed for this connection."),
  escalation_message: StringValue.describe("Message to show for Escalation."),
  instructions: StringValue.describe("Instructions for the connection."),
  outbound_route_type: StringValue.describe("Type of outbound route. Currently gets defaulted to OmniChannelFlow"),
  outbound_route_name: StringValue.describe('Name of outbound route. Example: "flow://Route_to_ELL_Agent"'),
  response_actions: CollectionBlock(ResponseActionsEntryBlock)
}, { symbol: { kind: SymbolKind.Interface } }).describe("External connection configuration.").example(`connection messaging:
    adaptive_response_allowed: True`);
var ConnectionsBlock = NamedCollectionBlock(ConnectionBlock);
var PronunciationDictEntryBlock = Block("PronunciationDictEntryBlock", {
  grapheme: StringValue.required(),
  phoneme: StringValue.required(),
  type: StringValue.enum(["IPA", "CMU"])
});
var InboundKeywordsBlock = Block("InboundKeywordsBlock", {
  keywords: ExpressionSequence().describe("List of keywords for inbound speech detection.")
}).describe("Keyword detection configuration for inbound speech.");
var SpeakUpConfigBlock = Block("SpeakUpConfigBlock", {
  speak_up_first_wait_time_ms: NumberValue.describe("Time in milliseconds before first speak-up prompt.").min(1e4).max(3e5),
  speak_up_follow_up_wait_time_ms: NumberValue.describe("Time in milliseconds before follow-up speak-up prompts.").min(1e4).max(3e5),
  speak_up_message: StringValue.describe("Message to speak when prompting the user to speak up.")
}).describe("Configuration for speak-up behavior.");
var EndpointingConfigBlock = Block("EndpointingConfigBlock", {
  max_wait_time_ms: NumberValue.describe("Maximum wait time in milliseconds for endpointing detection.").min(500).max(6e4)
}).describe("Configuration for endpointing detection.");
var BeepBoopConfigBlock = Block("BeepBoopConfigBlock", {
  max_wait_time_ms: NumberValue.describe("Maximum wait time in milliseconds for beep-boop detection.").min(500).max(6e4)
}).describe("Configuration for beep-boop detection.");
var AdditionalConfigsBlock = Block("AdditionalConfigsBlock", {
  speak_up_config: SpeakUpConfigBlock.describe("Configuration for speak-up prompts."),
  endpointing_config: EndpointingConfigBlock.describe("Configuration for endpointing detection."),
  beepboop_config: BeepBoopConfigBlock.describe("Configuration for beep-boop detection.")
}).describe("Additional voice-related configurations.");
var FillerSentenceBlock = Block("FillerSentenceBlock", {
  waiting: ExpressionSequence().describe("List of waiting messages for this filler sentence entry.")
}).describe("A filler sentence configuration entry.");
var VoiceModalitySchema = {
  inbound_filler_words_detection: BooleanValue.describe("Whether to enable detection of filler words in inbound speech."),
  inbound_keywords: InboundKeywordsBlock.describe("Keyword detection configuration for inbound speech with boost values."),
  voice_id: StringValue.describe('Unique identifier for the voice (e.g., "EQx6HGDYjkDpcli6vorJ").'),
  outbound_speed: NumberValue.describe("Speech speed for outbound voice (e.g., 1.0 for normal speed).").min(0.5).max(2),
  outbound_style_exaggeration: NumberValue.describe("Style exaggeration level for outbound voice (0.0 to 1.0).").min(0).max(1),
  outbound_stability: NumberValue.describe("Voice stability for outbound speech."),
  outbound_similarity: NumberValue.describe("Voice similarity level for outbound speech."),
  pronunciation_dict: Sequence(PronunciationDictEntryBlock).describe("List of pronunciation dictionary entries for custom word pronunciations."),
  outbound_filler_sentences: Sequence(FillerSentenceBlock).describe("List of filler sentence entries to use during outbound speech pauses."),
  additional_configs: AdditionalConfigsBlock.describe("Additional voice-related configurations.")
};
var ModalityBlock = NamedBlock("ModalityBlock").variant("voice", VoiceModalitySchema);
var ModalitiesBlock = NamedCollectionBlock(ModalityBlock);
var AgentforceSchema = {
  ...AgentScriptSchema,
  config: AFConfigBlock,
  variables: AFVariablesBlock,
  model_config: ModelConfigBlock.describe("Default model configuration for the agent. Can be overridden at topic level.").example(`model_config:
    model: "model://sfdc_ai__DefaultGPT4"
    params:
        temperature: 0.7
        max_tokens: 2000`),
  knowledge: KnowledgeBlock,
  connection: ConnectionsBlock,
  connected_subagent: NamedCollectionBlock(ConnectedSubagentBlock),
  modality: ModalitiesBlock,
  security: SecurityBlock,
  context: ContextBlock,
  subagent: NamedCollectionBlock(AFSubagentBlock.clone().example(`subagent Order_Management:
    description: "Handles order lookups, updates, and summaries"

    system:
        instructions: "Focus on helping the user with their order. Never expose internal record IDs."

    before_reasoning:
        if @variables.verified is not True:
            transition to @subagent.Identity

    actions:
        Lookup_Order:
            description: "Retrieve order details"
            require_user_confirmation: False
            include_in_progress_indicator: True
            progress_indicator_message: "Looking up your order..."
            inputs:
                order_number: string
                    description: "The order number to look up"
                    is_required: True
                    is_user_input: True
            outputs:
                status: string
                    description: "Order status"
                    is_displayable: True
                order_id: string
                    description: "Internal order record ID"
                    is_displayable: False
                    filter_from_agent: True
            target: "flow://Lookup_Order"

    reasoning:
        instructions: ->
            | Ask for the Order Number and call {!@actions.lookup_order}.
              Summarize: status, items, delivery info.
        actions:
            lookup_order: @actions.Lookup_Order
                with order_number=...
                set @variables.status = @outputs.status
                set @variables.order_id = @outputs.order_id

            go_to_return: @utils.transition to @subagent.Return_Management
                description: "If user wants to return items"

    after_reasoning:
        set @variables.request_count = @variables.request_count + 1`)),
  start_agent: NamedCollectionBlock(AFStartAgentBlock.clone().example(`start_agent topic_selector:
    label: "Topic Selector"
    description: "Welcome user and route to the right topic"
    reasoning:
        instructions: ->
            | Welcome the user. Analyze their request and route accordingly:
              {!@actions.go_to_orders}: For order lookups and updates
              {!@actions.go_to_returns}: For return requests
              {!@actions.go_to_escalation}: When user is upset or asks for a person
        actions:
            go_to_orders: @utils.transition to @subagent.Order_Management
                description: "Handle order inquiries"
                available when @variables.verified == True
            go_to_returns: @utils.transition to @subagent.Return_Management
                description: "Handle return requests"
                available when @variables.verified == True
            go_to_escalation: @utils.transition to @subagent.escalation
                description: "Escalate to human agent"`)).singular(),
  topic: NamedCollectionBlock(AFTopicBlock.clone().example(`topic Order_Management:
    description: "Handles order lookups, updates, and summaries"

    actions:
        Lookup_Order:
            description: "Retrieve order details"
            target: "flow://Lookup_Order"

    reasoning:
        instructions: ->
            | Help the user with their order.
        actions:
            lookup_order: @actions.Lookup_Order
                with order_number=...`))
  // TODO: restore deprecated() call once migration is complete
  // .deprecated(
  //   'Replace topic with subagent, actions with tool_definitions and reasoning.actions with reasoning.tools.',
  //   { replacement: 'subagent' }
  // ),
};
var AgentforceKindToSchemaKey = buildKindToSchemaKey(AgentforceSchema);
var AgentforceSchemaAliases = {
  ...AgentScriptSchemaAliases
};
var AgentforceSchemaInfo = {
  schema: AgentforceSchema,
  aliases: AgentforceSchemaAliases,
  globalScopes: {
    ...AgentScriptSchemaInfo.globalScopes,
    MessagingSession: /* @__PURE__ */ new Set(["MessagingEndUserId", "Id", "EndUserLanguage"]),
    MessagingEndUser: /* @__PURE__ */ new Set(["ContactId"])
  },
  // start_agent blocks are reachable via both @topic.X and @subagent.X
  extraNamespaceKeys: {
    topic: ["start_agent"]
  }
};
var agentforceSchemaContext = createSchemaContext(AgentforceSchemaInfo);

// ../../dialect/agentforce/dist/lint/passes/action-target.js
var VALID_SCHEMES = [
  "api",
  "apex",
  "apexRest",
  "auraEnabled",
  "cdpMlPrediction",
  "createCatalogItemRequest",
  "executeIntegrationProcedure",
  "expressionSet",
  "externalConnector",
  "externalService",
  "flow",
  "generatePromptResponse",
  "integrationProcedureAction",
  "mcpTool",
  "namedQuery",
  "prompt",
  "quickAction",
  "retriever",
  "runExpressionSet",
  "serviceCatalog",
  "slack",
  "standardInvocableAction"
];
var VALID_SCHEME_SET = new Set(VALID_SCHEMES.map((scheme) => scheme.toLowerCase()));
function flattenActionsWithTarget(tm) {
  const result = [];
  for (const [, actionMap] of tm.actions) {
    for (const [actionName, sig] of actionMap) {
      if (sig.target)
        result.push({ actionName, sig });
    }
  }
  return result;
}
function actionTargetSchemeRule() {
  return defineRule({
    id: "invalid-action-target",
    description: "Action target URIs must use a supported scheme (flow://, apex://, externalService://, standardInvocableAction://, prompt://, generatePromptResponse://, etc.).",
    deps: { action: each(typeMapKey, flattenActionsWithTarget) },
    run({ action }) {
      const { actionName, sig } = action;
      const target = sig.target;
      let parsed;
      try {
        parsed = new URL(target.value);
      } catch {
        attachDiagnostic(target.node, lintDiagnostic(target.keyRange, `Action '${actionName}' has an invalid target "${target.value}". Expected a URI with a supported scheme: ${VALID_SCHEMES.join(", ")}.`, DiagnosticSeverity.Error, "invalid-action-target"));
        return;
      }
      const scheme = parsed.protocol.slice(0, -1).toLowerCase();
      if (!scheme) {
        attachDiagnostic(target.node, lintDiagnostic(target.keyRange, `Action '${actionName}' has an invalid target "${target.value}". Expected a URI with a supported scheme: ${VALID_SCHEMES.join(", ")}.`, DiagnosticSeverity.Error, "invalid-action-target"));
        return;
      }
      if (!VALID_SCHEME_SET.has(scheme)) {
        attachDiagnostic(target.node, lintDiagnostic(target.keyRange, `Action '${actionName}' uses unsupported target scheme "${scheme}://". Supported schemes: ${VALID_SCHEMES.join(", ")}.`, DiagnosticSeverity.Error, "invalid-action-target"));
      }
    }
  });
}

// ../../dialect/agentforce/dist/lint/passes/hyperclassifier.js
var HYPERCLASSIFIER_MODEL = "model://sfdc_ai__DefaultEinsteinHyperClassifier";
var hyperclassifierTopicsKey = storeKey("hyperclassifier-topics");
function getModelString(block) {
  const modelConfig = block.model_config;
  if (!modelConfig || typeof modelConfig !== "object")
    return void 0;
  const model = modelConfig.model;
  if (!model)
    return void 0;
  if (typeof model === "string")
    return model;
  if (typeof model === "object" && "value" in model) {
    const v = model.value;
    if (typeof v === "string")
      return v;
  }
  return void 0;
}
function hasStatements(value) {
  if (!value)
    return false;
  if (Array.isArray(value))
    return value.length > 0;
  if (typeof value === "object" && "statements" in value) {
    const stmts = value.statements;
    return Array.isArray(stmts) && stmts.length > 0;
  }
  return true;
}
var HyperclassifierExtractor = class {
  id = hyperclassifierTopicsKey;
  description = "Identifies hyperclassifier/router topics";
  finalize(store, root) {
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    const results = [];
    const rootObj = root;
    const allKeys = /* @__PURE__ */ new Set([
      ...resolveNamespaceKeys("topic", ctx),
      ...resolveNamespaceKeys("subagent", ctx)
    ]);
    for (const topicKey of allKeys) {
      const topicMap = rootObj[topicKey];
      if (!topicMap || !isNamedMap(topicMap))
        continue;
      for (const [topicName, block] of topicMap) {
        if (!block || typeof block !== "object")
          continue;
        const topic = block;
        const modelStr = getModelString(topic);
        if (modelStr !== HYPERCLASSIFIER_MODEL)
          continue;
        results.push({ topicName, block: topic, model: modelStr });
      }
    }
    store.set(hyperclassifierTopicsKey, results);
  }
};
function hyperclassifierExtractor() {
  return new HyperclassifierExtractor();
}
function hyperclassifierConstraintsRule() {
  return defineRule({
    id: "hyperclassifier-constraints",
    description: "Validates constraints on hyperclassifier/router nodes",
    deps: { topic: each(hyperclassifierTopicsKey) },
    run({ topic }) {
      const { block, model } = topic;
      const reasoning = block.reasoning;
      if (reasoning && typeof reasoning === "object") {
        const reasoningObj = reasoning;
        const raActions = reasoningObj.tools ?? reasoningObj.actions;
        if (raActions && isNamedMap(raActions)) {
          for (const [, raBlock] of raActions) {
            if (!raBlock || typeof raBlock !== "object")
              continue;
            const ra = raBlock;
            const decomposed = decomposeAtMemberExpression(ra.value);
            const isTransition = decomposed?.namespace === "utils" && decomposed?.property === "transition";
            if (!isTransition) {
              const cst = ra.__cst;
              if (cst) {
                attachDiagnostic(ra, lintDiagnostic(cst.range, `Only @utils.transition reasoning actions are allowed when using model: ${model}`, DiagnosticSeverity.Error, "hyperclassifier-non-transition"));
              }
            }
          }
        }
      }
      if (hasStatements(block.before_reasoning)) {
        const br = block.before_reasoning;
        const cst = br?.__cst ?? block.__cst;
        if (cst) {
          attachDiagnostic(br ?? block, lintDiagnostic(cst.range, `before_reasoning directives are not allowed when using model: ${model}`, DiagnosticSeverity.Error, "hyperclassifier-before-reasoning"));
        }
      }
      if (hasStatements(block.after_reasoning)) {
        const ar = block.after_reasoning;
        const cst = ar?.__cst ?? block.__cst;
        if (cst) {
          attachDiagnostic(ar ?? block, lintDiagnostic(cst.range, `after_reasoning directives are not allowed when using model: ${model}`, DiagnosticSeverity.Error, "hyperclassifier-after-reasoning"));
        }
      }
    }
  });
}

// ../../dialect/agentforce/dist/lint/passes/connection-validation.js
var CONNECTION_FIELDS = [
  "adaptive_response_allowed",
  "escalation_message",
  "instructions",
  "outbound_route_type",
  "outbound_route_name",
  "response_actions"
];
function hasField(node, field) {
  return node[field] != null;
}
function hasAnyField(node) {
  return CONNECTION_FIELDS.some((f) => hasField(node, f));
}
function fieldError(node, connectionType, fieldName) {
  const cst = node.__cst;
  if (!cst)
    return;
  attachDiagnostic(node, lintDiagnostic(cst.range, `${connectionType} connections do not support ${fieldName}`, DiagnosticSeverity.Error, "connection-disallowed-field"));
}
function missingFieldsError(node, connectionType) {
  const cst = node.__cst;
  if (!cst)
    return;
  attachDiagnostic(node, lintDiagnostic(cst.range, `${connectionType} connections require configuration fields (e.g. escalation_message, outbound_route_type, outbound_route_name).`, DiagnosticSeverity.Error, "connection-missing-required-fields"));
}
function validateSlack(node) {
  if (hasField(node, "outbound_route_name")) {
    fieldError(node, "Slack", "outbound_route_name");
  }
  if (hasField(node, "outbound_route_type")) {
    fieldError(node, "Slack", "outbound_route_type");
  }
  if (hasField(node, "escalation_message")) {
    fieldError(node, "Slack", "escalation_message");
  }
}
function validateServiceEmail(node) {
  if (!hasAnyField(node)) {
    missingFieldsError(node, "service_email");
    return;
  }
  if (hasField(node, "escalation_message")) {
    fieldError(node, "Service email", "escalation_message");
  }
  const hasRouteName = hasField(node, "outbound_route_name");
  const hasRouteType = hasField(node, "outbound_route_type");
  if (hasRouteName !== hasRouteType) {
    const missing = hasRouteName ? "outbound_route_type" : "outbound_route_name";
    const cst = node.__cst;
    if (cst) {
      attachDiagnostic(node, lintDiagnostic(cst.range, `Service email connections require both outbound_route_name and outbound_route_type, but ${missing} is missing`, DiagnosticSeverity.Error, "connection-missing-paired-field"));
    }
  }
}
function validateMessaging(node) {
  if (!hasAnyField(node)) {
    missingFieldsError(node, "messaging");
    return;
  }
  const hasRouteName = hasField(node, "outbound_route_name");
  const hasRouteType = hasField(node, "outbound_route_type");
  if (hasRouteName !== hasRouteType) {
    const missing = hasRouteName ? "outbound_route_type" : "outbound_route_name";
    const cst = node.__cst;
    if (cst) {
      attachDiagnostic(node, lintDiagnostic(cst.range, `Messaging connections require both outbound_route_name and outbound_route_type, but ${missing} is missing`, DiagnosticSeverity.Error, "connection-missing-paired-field"));
    }
  }
}
function validateUnknown(node, name) {
  if (!hasAnyField(node)) {
    missingFieldsError(node, name);
  }
}
var CONNECTION_VALIDATORS = {
  slack: validateSlack,
  service_email: validateServiceEmail,
  messaging: validateMessaging
};
var ConnectionValidationPass = class {
  id = storeKey("connection-validation");
  description = "Validates per-connection-type field constraints";
  requires = [];
  run(_store, root) {
    const rootObj = root;
    const connections = rootObj.connection;
    if (!connections || !isNamedMap(connections))
      return;
    for (const [name, block] of connections) {
      if (!block || typeof block !== "object")
        continue;
      const node = block;
      const key = name.toLowerCase();
      const validator = CONNECTION_VALIDATORS[key];
      if (validator) {
        validator(node);
      } else {
        validateUnknown(node, name);
      }
    }
  }
};
function connectionValidationRule() {
  return new ConnectionValidationPass();
}

// ../../dialect/agentforce/dist/lint/passes/system-message-variables.js
function extractVariableRefs(messageValue) {
  const refs = [];
  if (!messageValue || typeof messageValue !== "object")
    return refs;
  const obj = messageValue;
  if (obj.__kind !== "TemplateExpression" || !Array.isArray(obj.parts)) {
    return refs;
  }
  for (const part of obj.parts) {
    if (!part || typeof part !== "object")
      continue;
    const p = part;
    if (p.__kind !== "TemplateInterpolation")
      continue;
    const decomposed = decomposeAtMemberExpression(p.expression);
    if (decomposed?.namespace === "variables") {
      refs.push({
        name: decomposed.property,
        node: p.expression
      });
    }
  }
  return refs;
}
function checkMessage(messageValue, messageType, typeMap) {
  for (const { name, node } of extractVariableRefs(messageValue)) {
    const info = typeMap.variables.get(name);
    if (info && info.modifier !== "linked") {
      const cst = node.__cst;
      if (!cst)
        continue;
      attachDiagnostic(node, lintDiagnostic(cst.range, `Variable '${name}' is ${info.modifier ?? "unmodified"} and cannot be used in ${messageType} messages. Only linked variables are available as context variables at runtime.`, DiagnosticSeverity.Error, "system-message-mutable-variable"));
    }
  }
}
var SystemMessageVariablesPass = class {
  id = storeKey("system-message-variables");
  description = "Validates that system message templates only reference linked variables";
  requires = [typeMapKey];
  run(store, root) {
    const typeMap = store.get(typeMapKey);
    if (!typeMap)
      return;
    const system = root.system;
    if (!system)
      return;
    const messages = system.messages;
    if (!messages)
      return;
    checkMessage(messages.welcome, "welcome", typeMap);
    checkMessage(messages.error, "error", typeMap);
  }
};
function systemMessageVariablesRule() {
  return new SystemMessageVariablesPass();
}

// ../../dialect/agentforce/dist/lint/passes/connected-agents/bound-inputs.js
function isSimpleVariableReference(expr) {
  if (!expr || typeof expr !== "object")
    return void 0;
  const node = expr;
  if (node.__kind !== "MemberExpression")
    return void 0;
  const ref = decomposeAtMemberExpression(expr);
  if (!ref || ref.namespace !== "variables")
    return void 0;
  return ref.property;
}
function boundInputsRule() {
  return defineRule({
    id: "connected-agent/bound-inputs",
    description: "Connected agent input bindings must be simple linked variable references",
    deps: { typeMap: typeMapKey },
    run({ typeMap }) {
      for (const [, agentInfo] of typeMap.connectedAgents) {
        for (const [, inputInfo] of agentInfo.inputs) {
          if (!inputInfo.defaultValueNode || !inputInfo.defaultValueCst)
            continue;
          const varName = isSimpleVariableReference(inputInfo.defaultValueNode);
          if (!varName) {
            attachDiagnostic(inputInfo.decl, lintDiagnostic(inputInfo.defaultValueCst.range, `Bound input must be a simple variable reference (e.g. @variables.X).`, DiagnosticSeverity.Error, "bound-input-not-variable"));
            continue;
          }
          const varInfo = typeMap.variables.get(varName);
          if (varInfo && varInfo.modifier !== "linked") {
            attachDiagnostic(inputInfo.decl, lintDiagnostic(inputInfo.defaultValueCst.range, `Bound input must reference a linked variable \u2014 '${varName}' is ${varInfo.modifier ?? "unmodified"}.`, DiagnosticSeverity.Error, "bound-input-not-linked"));
          }
        }
      }
    }
  });
}

// ../../dialect/agentforce/dist/lint/passes/connected-agents/no-transition.js
function noTransitionRule() {
  return defineRule({
    id: "connected-agent/no-transition",
    description: "Connected agents cannot be transition targets (not yet supported)",
    deps: { typeMap: typeMapKey },
    run({ typeMap }) {
      for (const target of typeMap.transitionTargets.get("connected_subagent") ?? []) {
        attachDiagnostic(target.diagnosticParent, lintDiagnostic(target.range, `Transition to a connected agent is not yet supported. Use @connected_subagent.${target.property} as a tool invocation instead.`, DiagnosticSeverity.Error, "connected-agent-no-transition"));
      }
    }
  });
}

// ../../dialect/agentforce/dist/lint/passes/connected-agents/target-validation.js
var ALLOWED_SCHEMES = ["agentforce"];
function validateTargetName(targetName) {
  if (!/^[a-zA-Z]/.test(targetName)) {
    return `Target name '${targetName}' must start with a letter (a-z, A-Z).`;
  }
  if (!/^[a-zA-Z0-9_]+$/.test(targetName)) {
    return `Target name '${targetName}' can only contain letters, numbers, and underscores.`;
  }
  if (targetName.endsWith("_")) {
    return `Target name '${targetName}' cannot end with an underscore.`;
  }
  if (targetName.includes("__")) {
    return `Target name '${targetName}' cannot contain consecutive underscores.`;
  }
  return null;
}
function extractTargetName(targetUri) {
  const match = targetUri.match(/^[a-zA-Z][a-zA-Z0-9_]*:\/\/(.+)$/);
  return match ? match[1] : null;
}
var connectedAgentTargetKey = storeKey("connected-agent-target");
var ConnectedAgentTargetPass = class {
  id = connectedAgentTargetKey;
  description = "Validates connected agent target URIs (scheme and name)";
  requires = [typeMapKey];
  run(store) {
    const typeMap = store.get(typeMapKey);
    if (!typeMap)
      return;
    for (const [, agentInfo] of typeMap.connectedAgents) {
      const { target, targetNode } = agentInfo;
      if (!target || !targetNode)
        continue;
      const range = targetNode.__cst?.range ?? {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      };
      const schemeMatch = target.match(/^([a-zA-Z][a-zA-Z0-9_]*):\/\//);
      if (!schemeMatch)
        continue;
      const scheme = schemeMatch[1];
      if (!ALLOWED_SCHEMES.includes(scheme)) {
        const allowed = ALLOWED_SCHEMES.map((s) => `${s}://`).join(", ");
        attachDiagnostic(targetNode, lintDiagnostic(range, `Unsupported connected agent target scheme '${scheme}://'. Only ${allowed} is currently supported.`, DiagnosticSeverity.Error, "connected-agent-unsupported-scheme"));
        continue;
      }
      const targetName = extractTargetName(target);
      if (!targetName)
        continue;
      const nameError = validateTargetName(targetName);
      if (nameError) {
        attachDiagnostic(targetNode, lintDiagnostic(range, nameError, DiagnosticSeverity.Error, "invalid-connected-subagent-target-name"));
      }
    }
  }
};
function connectedAgentTargetPass() {
  return new ConnectedAgentTargetPass();
}

// ../../dialect/agentforce/dist/lint/passes/connected-agents/template-reference.js
var templateReferenceValidationKey = storeKey("template-reference-validation");
var TemplateReferenceValidationPass = class {
  id = templateReferenceValidationKey;
  description = "Validates that template interpolations in instructions use @actions.X for connected subagents";
  requires = [];
  run(_store, root) {
    const visited = /* @__PURE__ */ new WeakSet();
    this.walkNode(root, null, visited);
  }
  walkNode(node, parentTopic, visited) {
    if (!node || typeof node !== "object")
      return;
    const astNode = node;
    if (visited.has(astNode))
      return;
    visited.add(astNode);
    let currentTopic = parentTopic;
    if (astNode.__kind === "SubagentBlock" || astNode.__kind === "StartAgentBlock") {
      currentTopic = astNode;
    }
    if (astNode.__kind === "TemplateInterpolation") {
      this.validateTemplateInterpolation(astNode, currentTopic);
    }
    if ("__children" in astNode && Array.isArray(astNode.__children)) {
      for (const child of astNode.__children) {
        this.walkNode(child, currentTopic, visited);
      }
    }
    for (const key in astNode) {
      if (!Object.hasOwn(astNode, key))
        continue;
      if (key.startsWith("__"))
        continue;
      const value = astNode[key];
      if (value && typeof value === "object") {
        if (Array.isArray(value)) {
          for (const item of value) {
            this.walkNode(item, currentTopic, visited);
          }
        } else {
          this.walkNode(value, currentTopic, visited);
        }
      }
    }
  }
  validateTemplateInterpolation(node, parentTopic) {
    const expression = node.expression;
    if (!expression || typeof expression !== "object")
      return;
    const expr = expression;
    const decomposed = decomposeAtMemberExpression(expr);
    if (decomposed && decomposed.namespace === "connected_subagent") {
      const connectedSubagentName = decomposed.property;
      const actionAlias = this.findActionAlias(parentTopic, connectedSubagentName);
      const cst = expr.__cst;
      const range = cst?.range ?? {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      };
      const suggestion = actionAlias ? `{!@actions.${actionAlias}}` : `{!@actions.<action_alias>}`;
      attachDiagnostic(node, lintDiagnostic(range, `Connected subagent '${connectedSubagentName}' cannot be referenced as {!@connected_subagent.${connectedSubagentName}} in template instructions. Use ${suggestion} instead.`, DiagnosticSeverity.Error, "invalid-connected-subagent-reference"));
    }
  }
  findActionAlias(parentTopic, connectedSubagentName) {
    if (!parentTopic)
      return null;
    const reasoning = parentTopic.reasoning;
    if (!reasoning || typeof reasoning !== "object")
      return null;
    const reasoningObj = reasoning;
    const actions = reasoningObj.actions;
    if (!actions || !isNamedMap(actions))
      return null;
    for (const [alias, actionBlock] of actions) {
      if (!actionBlock || typeof actionBlock !== "object")
        continue;
      const block = actionBlock;
      if (block.__kind !== "ReasoningActionBlock")
        continue;
      const decomposed = decomposeAtMemberExpression(block.value);
      if (decomposed && decomposed.namespace === "connected_subagent" && decomposed.property === connectedSubagentName) {
        return alias;
      }
    }
    return null;
  }
};
function templateReferenceValidationPass() {
  return new TemplateReferenceValidationPass();
}

// ../../dialect/agentforce/dist/lint/passes/config-validation.js
function getStringValue(node) {
  if (!node || typeof node !== "object")
    return void 0;
  const obj = node;
  if (obj.__kind !== "StringLiteral" && obj.__kind !== "TemplateExpression")
    return void 0;
  if (typeof obj.value !== "string" || obj.value.trim().length === 0)
    return void 0;
  return { value: obj.value, astNode: obj };
}
function getBlockRange(block) {
  const cst = block.__cst;
  return cst?.range ?? {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
var ConfigValidationPass = class {
  id = storeKey("config-validation");
  description = "Validates Agentforce config block constraints (agent name, default_agent_user)";
  run(_store, root) {
    const config2 = root.config;
    if (!config2)
      return;
    const developerName = getStringValue(config2.developer_name);
    const agentName = getStringValue(config2.agent_name);
    if (!developerName && !agentName) {
      attachDiagnostic(config2, lintDiagnostic(getBlockRange(config2), "Config requires either 'developer_name' or 'agent_name'.", DiagnosticSeverity.Error, "config-missing-agent-name"));
    } else if (developerName && agentName) {
      attachDiagnostic(config2, lintDiagnostic(getBlockRange(config2), "Only one of 'developer_name' or 'agent_name' can be provided, not both.", DiagnosticSeverity.Error, "config-duplicate-agent-name"));
    }
    const agentTypeNode = config2.agent_type;
    if (!agentTypeNode || typeof agentTypeNode !== "object")
      return;
    const agentTypeValue = typeof agentTypeNode.value === "string" ? agentTypeNode.value : void 0;
    if (!agentTypeValue)
      return;
    const agentTypeLower = agentTypeValue.toLowerCase();
    const defaultAgentUser = getStringValue(config2.default_agent_user);
    if (agentTypeLower === "agentforceserviceagent" || agentTypeLower === "agentforce service agent") {
      if (!defaultAgentUser) {
        attachDiagnostic(config2, lintDiagnostic(getBlockRange(config2), `'default_agent_user' is required for ${agentTypeValue} type agents.`, DiagnosticSeverity.Error, "config-missing-default-agent-user"));
      }
    } else if (agentTypeLower === "agentforceemployeeagent" || agentTypeLower === "agentforce employee agent") {
      if (defaultAgentUser) {
        const dauNode = config2.default_agent_user;
        const dauCst = dauNode.__cst;
        const dauRange = dauCst?.range ?? getBlockRange(config2);
        attachDiagnostic(dauNode, lintDiagnostic(dauRange, `'default_agent_user' is ignored for ${agentTypeValue} type agents.`, DiagnosticSeverity.Warning, "config-ignored-default-agent-user"));
      }
    }
  }
};
function configValidationRule() {
  return new ConfigValidationPass();
}

// ../../dialect/agentforce/dist/lint/passes/variable-validation.js
function getDeclRange(decl) {
  const cst = decl.__cst;
  return cst?.range ?? {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
var VariableValidationPass = class {
  id = storeKey("variable-validation");
  description = "Validates variable names and linked variable constraints";
  requires = [typeMapKey];
  run(store, root) {
    const typeMap = store.get(typeMapKey);
    if (!typeMap)
      return;
    const varsMap = root.variables;
    if (!varsMap || !isNamedMap(varsMap))
      return;
    for (const [name, decl] of varsMap) {
      if (!decl || typeof decl !== "object")
        continue;
      const node = decl;
      const range = getDeclRange(node);
      const properties = node.properties;
      this.validateName(name, node, range);
      const info = typeMap.variables.get(name);
      this.validateSourceProperty(name, node, range, info?.modifier, properties);
      if (info?.modifier === "linked") {
        this.validateLinkedVariable(name, node, range, info.type);
      }
    }
  }
  validateName(name, node, range) {
    if (name.startsWith("_")) {
      attachDiagnostic(node, lintDiagnostic(range, `Variable name '${name}' cannot start with an underscore.`, DiagnosticSeverity.Error, "invalid-variable-name"));
    }
    const endsWith__c = name.endsWith("__c");
    if (name.endsWith("_") && !endsWith__c) {
      attachDiagnostic(node, lintDiagnostic(range, `Variable name '${name}' cannot end with an underscore (except __c suffix).`, DiagnosticSeverity.Error, "invalid-variable-name"));
    }
    if (name.includes("__")) {
      if (!endsWith__c) {
        attachDiagnostic(node, lintDiagnostic(range, `Variable name '${name}' cannot contain consecutive underscores (except __c suffix).`, DiagnosticSeverity.Error, "invalid-variable-name"));
      } else if (name.slice(0, -3).includes("__")) {
        attachDiagnostic(node, lintDiagnostic(range, `Variable name '${name}' cannot contain consecutive underscores (except __c suffix).`, DiagnosticSeverity.Error, "invalid-variable-name"));
      }
    }
  }
  validateSourceProperty(name, node, range, modifier, properties) {
    const hasSource = properties?.["source"] != null;
    if (modifier === "mutable" && hasSource) {
      attachDiagnostic(node, lintDiagnostic(range, `Mutable variable '${name}' cannot have a source property. Only linked variables can have a source.`, DiagnosticSeverity.Error, "mutable-variable-cannot-have-source"));
    }
    if (modifier === "linked" && !hasSource) {
      attachDiagnostic(node, lintDiagnostic(range, `Linked variable '${name}' must have a source property (e.g., source: @MessagingSession.Id).`, DiagnosticSeverity.Error, "linked-variable-missing-source"));
    }
  }
  validateLinkedVariable(name, node, range, typeText) {
    if (typeText.startsWith("list[") || typeText.startsWith("list(")) {
      attachDiagnostic(node, lintDiagnostic(range, `Context variable '${name}' cannot be a list.`, DiagnosticSeverity.Error, "linked-variable-cannot-be-list"));
    }
    if (typeText === "object") {
      attachDiagnostic(node, lintDiagnostic(range, `Context variable '${name}' cannot be an object.`, DiagnosticSeverity.Error, "linked-variable-cannot-be-object"));
    }
    const obj = node;
    if (obj.defaultValue != null) {
      attachDiagnostic(node, lintDiagnostic(range, `Context variable '${name}' cannot have a default value.`, DiagnosticSeverity.Error, "linked-variable-cannot-have-default"));
    }
  }
};
function variableValidationRule() {
  return new VariableValidationPass();
}

// ../../dialect/agentforce/dist/lint/passes/complex-data-type.js
function getTypeText2(decl) {
  const type = decl.type;
  if (!type)
    return null;
  const cst = type.__cst;
  return cst?.node?.text?.trim() ?? null;
}
function isObjectType(typeText) {
  return typeText === "object" || typeText === "list[object]";
}
function getDeclRange2(decl) {
  const cst = decl.__cst;
  return cst?.range ?? {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function hasStringField(properties, fieldName) {
  if (!properties)
    return false;
  const field = properties[fieldName];
  if (!field || typeof field !== "object")
    return false;
  const obj = field;
  return typeof obj.value === "string" && obj.value.trim().length > 0;
}
var ComplexDataTypePass = class {
  id = storeKey("complex-data-type-warning");
  description = "Warns when object-type action inputs/outputs lack complex_data_type_name or schema";
  requires = [schemaContextKey];
  run(store, root) {
    const ctx = store.get(schemaContextKey);
    if (!ctx)
      return;
    const rootObj = root;
    const allKeys = /* @__PURE__ */ new Set([
      ...resolveNamespaceKeys("topic", ctx),
      ...resolveNamespaceKeys("subagent", ctx)
    ]);
    for (const topicKey of allKeys) {
      const topicMap = rootObj[topicKey];
      if (!topicMap || !isNamedMap(topicMap))
        continue;
      for (const [, block] of topicMap) {
        if (!block || typeof block !== "object")
          continue;
        const topic = block;
        const actionsMap = topic.actions;
        if (!actionsMap || !isNamedMap(actionsMap))
          continue;
        for (const [actionName, actBlock] of actionsMap) {
          if (!actBlock || typeof actBlock !== "object")
            continue;
          const act = actBlock;
          this.checkInputs(act.inputs, actionName);
          this.checkOutputs(act.outputs, actionName);
        }
      }
    }
  }
  checkInputs(inputs, actionName) {
    if (!inputs || !isNamedMap(inputs))
      return;
    for (const [paramName, decl] of inputs) {
      if (!decl || typeof decl !== "object")
        continue;
      const obj = decl;
      const typeText = getTypeText2(obj);
      if (!typeText || !isObjectType(typeText))
        continue;
      const props = obj.properties;
      if (!hasStringField(props, "complex_data_type_name") && !hasStringField(props, "schema")) {
        attachDiagnostic(obj, lintDiagnostic(getDeclRange2(obj), `Action input '${paramName}' in '${actionName}' has type '${typeText}' but lacks 'complex_data_type_name' or 'schema'. Consider specifying the object schema for better type validation.`, DiagnosticSeverity.Warning, "object-type-missing-schema"));
      }
    }
  }
  checkOutputs(outputs, actionName) {
    if (!outputs || !isNamedMap(outputs))
      return;
    for (const [outputName, decl] of outputs) {
      if (!decl || typeof decl !== "object")
        continue;
      const obj = decl;
      const typeText = getTypeText2(obj);
      if (!typeText || !isObjectType(typeText))
        continue;
      const props = obj.properties;
      if (!hasStringField(props, "complex_data_type_name")) {
        attachDiagnostic(obj, lintDiagnostic(getDeclRange2(obj), `Action output '${outputName}' in '${actionName}' has type '${typeText}' but lacks 'complex_data_type_name'. Consider specifying the object schema for better type validation.`, DiagnosticSeverity.Warning, "object-type-missing-schema"));
      }
    }
  }
};
function complexDataTypeWarningRule() {
  return new ComplexDataTypePass();
}

// ../../dialect/agentforce/dist/lint/passes/index.js
function defaultRules2() {
  return [
    ...defaultRules(),
    actionTargetSchemeRule(),
    hyperclassifierExtractor(),
    hyperclassifierConstraintsRule(),
    connectionValidationRule(),
    systemMessageVariablesRule(),
    boundInputsRule(),
    noTransitionRule(),
    connectedAgentTargetPass(),
    templateReferenceValidationPass(),
    configValidationRule(),
    variableValidationRule(),
    complexDataTypeWarningRule()
  ];
}

// ../../dialect/agentforce/dist/pkg-meta.js
var DIALECT_NAME2 = "agentforce";
var DIALECT_VERSION2 = "2.7.13";

// ../../dialect/agentforce/dist/index.js
var agentforceDialect = {
  name: DIALECT_NAME2,
  displayName: "Agentforce",
  description: "Agentforce dialect with Salesforce-specific blocks and rules",
  version: DIALECT_VERSION2,
  schemaInfo: AgentforceSchemaInfo,
  createRules: defaultRules2,
  source: "agentforce-lint"
};

// ../../dialect/agentfabric/dist/schema.js
var AFConfigBlock2 = Block("AFConfigBlock", {
  agent_name: StringValue.describe("Unique agent identifier.").required(),
  label: StringValue.describe("Human-readable display name for the agent."),
  description: StringValue.describe("Description of the agent."),
  default_llm: ReferenceValue.describe("Default LLM (@llm.<name>) used at compile time for orchestration, reasoning, and generate nodes that omit an explicit llm field. The linter reports an error if this is omitted while any such node also omits llm.").allowedNamespaces(["llm"])
}).describe("Agent-level configuration.").example(`config:
  agent_name: "employee-onboarding"
  label: "Employee Onboarding Agent"
  description: "An Agent that performs employee onboarding"
  default_llm: @llm.open-api-llm`);
var llmBaseFields = {
  target: StringValue.describe("Connection URI (llm://<name>) referencing an LLM connection.").required(),
  kind: StringValue.describe("LLM provider discriminator.").required(),
  model: StringValue.describe("The model name to use.").required(),
  temperature: NumberValue.describe("Controls randomness in output."),
  top_p: NumberValue.describe("Nucleus sampling parameter."),
  max_output_tokens: NumberValue.describe("Maximum number of tokens to generate."),
  headers: ExpressionValue.describe("Optional headers map for this LLM provider."),
  timeout: NumberValue.describe("Optional timeout in seconds for requests to this LLM provider."),
  api_key: StringValue.describe("Optional API key for this LLM provider.")
};
var openaiLlmVariantFields = {
  reasoning_effort: StringValue.describe("Constrains effort on reasoning for OpenAI reasoning models.").enum(["NONE", "MINIMAL", "LOW", "MEDIUM", "HIGH"]),
  top_logprobs: NumberValue.describe("Number of most likely tokens to return at each position (OpenAI).")
};
var geminiLlmVariantFields = {
  thinking_level: StringValue.describe("Level of thinking tokens for Gemini models.").enum(["LOW", "HIGH"]),
  thinking_budget: NumberValue.describe("Thinking budget in tokens for Gemini models."),
  response_logprobs: StringValue.describe("Whether to return log probabilities for Gemini.")
};
var OPENAI_LLM_KIND_KEYS = ["openai", "OpenAI", "openAI", "OPENAI"];
var GEMINI_LLM_KIND_KEYS = ["gemini", "Gemini", "GEMINI"];
var LLMEntryBlockFactory = NamedBlock("LLMEntryBlock", llmBaseFields).discriminant("kind");
for (const k of OPENAI_LLM_KIND_KEYS) {
  LLMEntryBlockFactory = LLMEntryBlockFactory.variant(k, openaiLlmVariantFields);
}
for (const k of GEMINI_LLM_KIND_KEYS) {
  LLMEntryBlockFactory = LLMEntryBlockFactory.variant(k, geminiLlmVariantFields);
}
var LLMEntryBlock = LLMEntryBlockFactory.describe("LLM configuration entry.");
var LLMBlock = CollectionBlock(LLMEntryBlock).describe("Named LLM configurations referenced by agentic nodes.");
var ActionDefInputBlock = NamedBlock("ActionDefInputBlock", {}).describe("Action definition input parameter.");
var ActionDefBlock = ActionBlock.pick([
  "description",
  "label",
  "target",
  "inputs"
]).extend({
  target: StringValue.describe("Connection URI using protocol-specific schemes: a2a://<name> or mcp://<name>.").required(),
  kind: StringValue.describe('Action type discriminator: "a2a:send_message" or "mcp:tool".').required(),
  http_headers: ExpressionValue.describe("Optional per-action HTTP headers map applied to outgoing action calls."),
  inputs: CollectionBlock(ActionDefInputBlock).describe("Bindable input arguments for the action.")
}, {
  symbol: { kind: SymbolKind.Method },
  scopeAlias: "action",
  capabilities: ["invocationTarget"]
}).discriminant("kind").variant("mcp:tool", {
  tool_name: StringValue.describe("The MCP tool name to call. Required for mcp:tool kind.").required()
}).variant("a2a:send_message", {}).describe("Action definition (A2A or MCP).");
var ActionDefinitionsBlock = CollectionBlock(ActionDefBlock).describe("Named action definitions available to nodes.");
var TriggerBlock = NamedBlock("TriggerBlock", {
  kind: StringValue.describe('Trigger protocol discriminator. Currently only "a2a" is supported.').required(),
  target: StringValue.describe("Broker reference URI (brokers://<broker-name>/<interface>).").required(),
  on_message: ProcedureValue.describe("Procedure executed when a message is received. Must contain a transition to the initial node.").required()
}).discriminant("kind").variant("a2a", {}).describe("Trigger that initiates graph execution on incoming messages.");
var TriggersBlock = CollectionBlock(TriggerBlock).describe("Named trigger definitions. At most one trigger per broker interface segment (e.g. only one `a2a` trigger for `brokers://<name>/a2a`).");
function createOutputJsonSchemaFields(options) {
  const fields = {
    type: StringValue.describe(options?.typeDescription ?? "Data type: string, number, integer, boolean, array, object.").required(),
    description: StringValue.describe(options?.descriptionDescription ?? "Description of this property."),
    pattern: StringValue.describe("Regex pattern constraint (string)."),
    minLength: NumberValue.describe("Minimum length (string)."),
    maxLength: NumberValue.describe("Maximum length (string)."),
    minimum: NumberValue.describe("Minimum value (number/integer)."),
    maximum: NumberValue.describe("Maximum value (number/integer)."),
    exclusiveMinimum: NumberValue.describe("Exclusive minimum value (number/integer)."),
    exclusiveMaximum: NumberValue.describe("Exclusive maximum value (number/integer)."),
    minItems: NumberValue.describe("Minimum number of array items."),
    maxItems: NumberValue.describe("Maximum number of array items."),
    enum: ExpressionValue.describe("Allowed value list.")
  };
  if (options?.includeRequired) {
    fields.required = ExpressionValue.describe("Required property names when type is object.");
  }
  if (options?.includeDefault) {
    fields.default = ExpressionValue.describe("Default value.");
  }
  return fields;
}
var OutputPropertyBlock = NamedBlock("OutputPropertyBlock", {
  ...createOutputJsonSchemaFields({ includeRequired: true }),
  items: Block("OutputArrayItemsBlock", {
    ...createOutputJsonSchemaFields({
      typeDescription: "Data type for array items: string, number, integer, boolean, array, object.",
      descriptionDescription: "Description of this item schema.",
      includeRequired: true
    }),
    properties: CollectionBlock(NamedBlock("OutputNestedPropertyBlock", createOutputJsonSchemaFields({ includeDefault: true }))).describe("Nested object properties map."),
    default: ExpressionValue.describe("Default value.")
  }).describe("Schema for each array item."),
  properties: CollectionBlock(NamedBlock("OutputObjectPropertyBlock", createOutputJsonSchemaFields({ includeDefault: true }))).describe("Nested object properties map."),
  default: ExpressionValue.describe("Default value.")
}).describe("Output structure property definition.");
var OutputStructureBlock = Block("OutputStructureBlock", {
  properties: CollectionBlock(OutputPropertyBlock).describe("Map of property names to their schema definitions.")
}).describe("Schema defining the expected structure of agent output.");
var DialectReasoningActionBlock2 = ReasoningActionBlock.extend({}, { colinear: ExpressionValue.resolvedType("invocationTarget") }).describe("Action reference within a node, referencing an action_definition.");
var NodeActionsBlock = CollectionBlock(DialectReasoningActionBlock2).describe("Named action bindings within a node.");
var NodeSystemSectionBlock = SystemBlock.pick([
  "instructions"
]).describe("Node system section.");
var NodeReasoningSectionBlock = ReasoningBlock.pick([
  "instructions"
]).extend({
  actions: NodeActionsBlock.describe("Available actions for this node."),
  outputs: OutputStructureBlock.describe("Schema for structured output.")
}).describe("Node reasoning section.");
var SubagentBlock2 = SubagentBlock.omit("actions", "before_reasoning", "after_reasoning").extend({
  llm: ReferenceValue.describe("Override the default LLM setting.").allowedNamespaces(["llm"]),
  reasoning: NodeReasoningSectionBlock.describe("Node-level reasoning configuration.").required(),
  max_number_of_loops: NumberValue.describe("Maximum reasoning loop iterations."),
  max_consecutive_errors: NumberValue.describe("Maximum consecutive errors before stopping."),
  task_timeout_secs: NumberValue.describe("Timeout in seconds for total node execution."),
  on_exit: ProcedureValue.describe("Procedure executed when node completes. Must contain a transition to statement.").required()
}, {
  capabilities: ["transitionTarget"],
  symbol: { kind: SymbolKind.Namespace }
}).describe("Subagent node with generic agent loop and tools.");
var OrchestratorBlock = SubagentBlock2.clone().describe("Orchestrator node specializing subagent semantics for multi-agent orchestration.");
var GeneratorBlock = NamedBlock("GeneratorBlock", {
  description: StringValue.describe("Description of what this node does."),
  label: StringValue.describe("Human-readable display name."),
  llm: ReferenceValue.describe("Override the default LLM setting.").allowedNamespaces(["llm"]),
  system: NodeSystemSectionBlock.describe("Optional node-level system.instructions override for this generator call."),
  prompt: ProcedureValue.describe("Required session-specific prompt/instructions for this generator node.").required(),
  outputs: OutputStructureBlock.describe("Optional structured output schema for generator results."),
  on_exit: ProcedureValue.describe("Procedure executed when node completes. Must contain a transition to statement.").required()
}, {
  capabilities: ["transitionTarget"],
  symbol: { kind: SymbolKind.Namespace }
}).describe("Generator node for single LLM call with no tools or agent loop.");
var ExecutorBlock = NamedBlock("ExecutorBlock", {
  description: StringValue.describe("Description of what this node does."),
  label: StringValue.describe("Human-readable display name."),
  do: ProcedureValue.describe("Deterministic steps: `set @variables.<name> = <expr>` and/or `run @actions.<action_def>` with `with` inputs and optional `set` lines that read `@outputs.<field>` from the action result. For prior graph node results use `@<node_type>.<node_name>.output` (for example `@generate.summary.output`). Use @request.* for trigger payload and @variables.* for declared variables.").required(),
  on_exit: ProcedureValue.describe("Procedure executed when node completes. Optional for terminal execute nodes; when present, should contain a transition to statement.")
}, {
  capabilities: ["transitionTarget"],
  symbol: { kind: SymbolKind.Namespace }
}).describe("Executor node for deterministic tool invocations and variable setting.");
var ROUTER_TARGET_NAMESPACES = [
  "orchestrator",
  "subagent",
  "generator",
  "executor",
  "router",
  "echo"
];
var RouterRouteBlock = Block("RouterRouteBlock", {
  target: ReferenceValue.describe("Transition target reference, e.g. @orchestrator.someNode.").allowedNamespaces(ROUTER_TARGET_NAMESPACES).required(),
  when: ExpressionValue.describe("Condition expression that enables this route.").required(),
  label: StringValue.describe("Optional UI label for this route.")
});
var RouterOtherwiseBlock = Block("RouterOtherwiseBlock", {
  target: ReferenceValue.describe("Default transition target when no route condition matches.").allowedNamespaces(ROUTER_TARGET_NAMESPACES).required()
});
var RouterBlock = NamedBlock("RouterBlock", {
  description: StringValue.describe("Description of what this node does."),
  label: StringValue.describe("Human-readable display name."),
  routes: Sequence(RouterRouteBlock).describe("Ordered conditional routes. Each route has target + when, and optional label for UI.").minItems(1).required(),
  otherwise: RouterOtherwiseBlock.describe("Required fallback transition when no route condition matches.")
}, {
  capabilities: ["transitionTarget"],
  symbol: { kind: SymbolKind.Namespace }
}).describe("Router node for deterministic routing based on conditions. Exits are defined by routes[].target and otherwise.target, not by a block-level on_exit.");
var EchoBlock = NamedBlock("EchoBlock", {
  description: StringValue.describe("Description of what this node does."),
  label: StringValue.describe("Human-readable display name."),
  kind: StringValue.describe('Response type discriminator. Currently only "a2a:response".').required(),
  message: ExpressionValue.describe("Message expression for the response."),
  task: ExpressionValue.describe("Task expression for the A2A response (alternative to message)."),
  artifacts: ExpressionValue.describe("Artifacts expression for the response."),
  metadata: ExpressionValue.describe("Metadata expression for the response."),
  on_exit: ProcedureValue.describe("Procedure executed when node completes.")
}, {
  capabilities: ["transitionTarget"],
  symbol: { kind: SymbolKind.Namespace }
}).discriminant("kind").variant("a2a:response", {}).describe("Echo node that sends a response back to the client.");
var AgentFabricSchema = {
  system: SystemBlock,
  config: AFConfigBlock2,
  variables: VariablesBlock,
  llm: LLMBlock,
  action_definitions: ActionDefinitionsBlock,
  trigger: NamedCollectionBlock(TriggerBlock),
  orchestrator: NamedCollectionBlock(OrchestratorBlock),
  subagent: NamedCollectionBlock(SubagentBlock2),
  generator: NamedCollectionBlock(GeneratorBlock),
  executor: NamedCollectionBlock(ExecutorBlock),
  router: NamedCollectionBlock(RouterBlock),
  echo: NamedCollectionBlock(EchoBlock)
};
var AgentFabricSchemaAliases = {
  ...AgentScriptSchemaAliases
};
var AgentFabricSchemaInfo = {
  schema: AgentFabricSchema,
  aliases: AgentFabricSchemaAliases,
  globalScopes: {
    request: /* @__PURE__ */ new Set(["payload", "interface", "headers"])
  },
  namespacedFunctions: {
    a2a: /* @__PURE__ */ new Set(["task", "message", "textPart", "parts"])
  }
};
var agentFabricSchemaContext = createSchemaContext(AgentFabricSchemaInfo);

// ../../dialect/agentfabric/dist/compiler/utils.js
function normalizeId(name) {
  return name ? name.replace(/-/g, "_") : name;
}

// ../../dialect/agentfabric/dist/lint/passes/rules/shared.js
var AGENTFABRIC_LINT_SOURCE = "agentfabric-lint";
var ERROR_SEVERITY = 1;
function attachError(node, message, code) {
  if (!Array.isArray(node.__diagnostics))
    return;
  const range = node.__cst && node.__cst.range ? node.__cst.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
  attachDiagnostic(node, {
    range,
    message,
    severity: ERROR_SEVERITY,
    code,
    source: AGENTFABRIC_LINT_SOURCE
  });
}
function asStatements(value) {
  if (value == null || typeof value !== "object")
    return [];
  const proc = value;
  if (!Array.isArray(proc.statements))
    return [];
  return proc.statements.filter((stmt) => stmt != null && typeof stmt === "object");
}
function collectStatementKinds(procedure) {
  return asStatements(procedure).map((stmt) => stmt.__kind).filter((kind) => typeof kind === "string");
}
function hasSingleFixedTransition(procedure) {
  const statements = asStatements(procedure);
  if (statements.length !== 1)
    return false;
  const stmt = statements[0];
  if (stmt.__kind !== "TransitionStatement")
    return false;
  if (!Array.isArray(stmt.clauses) || stmt.clauses.length !== 1)
    return false;
  const clause = stmt.clauses[0];
  return clause?.__kind === "ToClause";
}
function extractStringValue(value) {
  if (typeof value === "string")
    return value;
  if (value == null || typeof value !== "object")
    return void 0;
  const record = value;
  if (typeof record.value === "string")
    return record.value;
  if (typeof record.text === "string")
    return record.text;
  return void 0;
}
function extractWhenString(value) {
  const direct = extractStringValue(value);
  if (direct !== void 0 && direct.trim().length > 0)
    return direct;
  if (value && typeof value === "object")
    return "__expr__";
  return void 0;
}
function schemaFieldKeys(entry) {
  return Object.keys(entry).filter((k) => !k.startsWith("__"));
}
function hasOwnNonNull(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== void 0 && obj[key] !== null;
}
var SWITCH_TARGET_NAMESPACES = /* @__PURE__ */ new Set([
  "orchestrator",
  "subagent",
  "generator",
  "executor",
  "router",
  "echo"
]);
function extractSwitchTarget(value) {
  const candidates = [value];
  if (value && typeof value === "object") {
    const rec = value;
    if (rec.value !== void 0)
      candidates.push(rec.value);
  }
  for (const candidate of candidates) {
    const ref = decomposeAtMemberExpression(candidate);
    if (ref && SWITCH_TARGET_NAMESPACES.has(ref.namespace)) {
      return normalizeId(ref.property);
    }
    const s = extractStringValue(candidate);
    if (!s)
      continue;
    const m = s.match(/^@(\w+)\.([\w-]+)$/);
    if (!m)
      continue;
    if (!SWITCH_TARGET_NAMESPACES.has(m[1]))
      continue;
    return normalizeId(m[2]);
  }
  return void 0;
}
function asObjectList(value) {
  if (Array.isArray(value)) {
    return value.filter((v) => v != null && typeof v === "object");
  }
  if (value && typeof value === "object" && Symbol.iterator in value) {
    const out = [];
    for (const item of value) {
      const candidate = Array.isArray(item) && item.length === 2 ? item[1] : item;
      if (candidate && typeof candidate === "object") {
        out.push(candidate);
      }
    }
    return out;
  }
  if (value && typeof value === "object") {
    const rec = value;
    if (Array.isArray(rec.items)) {
      return rec.items.filter((v) => v != null && typeof v === "object");
    }
  }
  return [];
}
function configHasDefaultLlm(root) {
  const config2 = root.config;
  if (config2 == null || typeof config2 !== "object")
    return false;
  return hasOwnNonNull(config2, "default_llm");
}

// ../../dialect/agentfabric/dist/lint/passes/rules/agentic-llm-rules.js
function checkAgenticLlmRules(root) {
  if (configHasDefaultLlm(root))
    return;
  const groups = [root.orchestrator, root.subagent, root.generator];
  for (const group of groups) {
    if (!isNamedMap(group))
      continue;
    for (const [, entry] of group) {
      if (entry == null || typeof entry !== "object")
        continue;
      const record = entry;
      if (hasOwnNonNull(record, "llm"))
        continue;
      attachError(entry, "Specify `llm` on this node or set `config.default_llm` for the agent.", "agentic-llm-required");
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/connection-rules.js
function checkConnectionUriRules(root) {
  const llmEntries = root.llm;
  if (isNamedMap(llmEntries)) {
    for (const [, entry] of llmEntries) {
      if (entry == null || typeof entry !== "object")
        continue;
      const target = extractStringValue(entry.target);
      if (target && !target.startsWith("llm://")) {
        attachError(entry, "llm.target must use the 'llm://' URI scheme.", "connection-uri");
      }
    }
  }
  const actionDefs = root.action_definitions;
  if (isNamedMap(actionDefs)) {
    for (const [, entry] of actionDefs) {
      if (entry == null || typeof entry !== "object")
        continue;
      const kind = extractStringValue(entry.kind);
      const target = extractStringValue(entry.target);
      const expectedScheme = kind === "mcp:tool" ? "mcp://" : kind === "a2a:send_message" ? "a2a://" : void 0;
      if (target && expectedScheme && !target.startsWith(expectedScheme)) {
        attachError(entry, `action_definitions.target must use the '${expectedScheme}' URI scheme for kind '${kind}'.`, "connection-uri");
      }
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/echo-rules.js
function checkEchoRules(root) {
  const echos = root.echo;
  if (!isNamedMap(echos))
    return;
  for (const [name, entry] of echos) {
    if (entry == null || typeof entry !== "object")
      continue;
    const echoEntry = entry;
    const normalizedName = normalizeId(name);
    const hasTask = hasOwnNonNull(echoEntry, "task");
    const hasMessage = hasOwnNonNull(echoEntry, "message");
    if (!hasTask && !hasMessage) {
      attachError(echoEntry, `echo '${normalizedName}' must define either 'task' or 'message'.`, "echo-task-or-message-required");
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/on-exit-rules.js
function checkOnExitRules(root) {
  const nodeGroups = [
    root.orchestrator,
    root.subagent,
    root.generator,
    root.executor,
    root.echo
  ];
  for (const group of nodeGroups) {
    if (!isNamedMap(group))
      continue;
    for (const [, entry] of group) {
      if (entry == null || typeof entry !== "object")
        continue;
      const onExit = entry.on_exit;
      if (onExit === void 0)
        continue;
      const invalid = asStatements(onExit).some((stmt) => stmt.__kind !== "TransitionStatement");
      if (invalid) {
        attachError(entry, "on_exit may only contain 'transition ...' statements.", "on-exit-transition-only");
      }
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/output-structure-rules.js
function extractValidatedOutputType(prop, node, path) {
  const type = extractStringValue(prop.type);
  const allowedTypes = /* @__PURE__ */ new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "array",
    "object"
  ]);
  if (!type || !allowedTypes.has(type)) {
    attachError(node, `${path}: 'type' is required and must be one of string, number, integer, boolean, array, object.`, "output-structure-type");
    return void 0;
  }
  return type;
}
function isUnsupportedOutputKeyword(key) {
  const unsupported = [
    "additionalProperties",
    "anyOf",
    "oneOf",
    "allOf",
    "$ref",
    "$defs"
  ];
  return unsupported.includes(key);
}
function reportUnsupportedOutputKeywords(prop, node, path) {
  const unsupported = [
    "additionalProperties",
    "anyOf",
    "oneOf",
    "allOf",
    "$ref",
    "$defs"
  ];
  for (const key of unsupported) {
    if (Object.prototype.hasOwnProperty.call(prop, key)) {
      attachError(node, `${path}: '${key}' is not supported in output_structure.`, "output-structure-unsupported");
    }
  }
}
function allowedOutputFieldsForType(type) {
  const common = /* @__PURE__ */ new Set(["type", "description", "default", "enum"]);
  const stringOnly = /* @__PURE__ */ new Set(["pattern", "minLength", "maxLength"]);
  const numberOnly = /* @__PURE__ */ new Set([
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum"
  ]);
  const arrayOnly = /* @__PURE__ */ new Set(["items", "minItems", "maxItems"]);
  const objectOnly = /* @__PURE__ */ new Set(["properties", "required"]);
  const allowed = new Set(common);
  if (type === "string")
    stringOnly.forEach((k) => allowed.add(k));
  if (type === "number" || type === "integer")
    numberOnly.forEach((k) => allowed.add(k));
  if (type === "array")
    arrayOnly.forEach((k) => allowed.add(k));
  if (type === "object")
    objectOnly.forEach((k) => allowed.add(k));
  return allowed;
}
function validateOutputProperty(prop, node, path) {
  const type = extractValidatedOutputType(prop, node, path);
  if (!type)
    return;
  reportUnsupportedOutputKeywords(prop, node, path);
  const allowed = allowedOutputFieldsForType(type);
  for (const key of schemaFieldKeys(prop)) {
    if (isUnsupportedOutputKeyword(key))
      continue;
    if (!allowed.has(key)) {
      attachError(node, `${path}: field '${key}' is not valid for type '${type}'.`, "output-structure-field");
    }
  }
  if (type === "array" && !hasOwnNonNull(prop, "items")) {
    attachError(node, `${path}: array type requires 'items'.`, "output-structure-items-required");
  }
  if (type === "object") {
    const p = prop.properties;
    if (!isNamedMap(p)) {
      attachError(node, `${path}: object type requires 'properties'.`, "output-structure-properties-required");
    } else {
      for (const [childName, childDef] of p) {
        if (childDef && typeof childDef === "object") {
          validateOutputProperty(childDef, node, `${path}.properties.${childName}`);
        }
      }
    }
  }
}
function checkOutputStructureRules(root) {
  const validateGroup = (group, outputSelector, pathPrefix) => {
    if (!isNamedMap(group))
      return;
    for (const [, entry] of group) {
      if (entry == null || typeof entry !== "object")
        continue;
      const rec = entry;
      const os = outputSelector(rec);
      if (os == null || typeof os !== "object")
        continue;
      const props = os.properties;
      if (!isNamedMap(props))
        continue;
      for (const [propName, propDef] of props) {
        validateOutputProperty(propDef, entry, `${pathPrefix}.${propName}`);
      }
    }
  };
  validateGroup(root.orchestrator, (rec) => rec.reasoning?.outputs, "reasoning.outputs");
  validateGroup(root.subagent, (rec) => rec.reasoning?.outputs, "reasoning.outputs");
  validateGroup(root.generator, (rec) => rec.outputs, "outputs");
}

// ../../dialect/agentfabric/dist/lint/passes/rules/reasoning-instructions-rules.js
function hasNonEmptyTextOrProcedure(value) {
  if (value == null)
    return false;
  const s = extractStringValue(value);
  if (s !== void 0)
    return s.trim().length > 0;
  if (typeof value === "object")
    return true;
  return false;
}
function hasReasoningInstructions(entry) {
  const reasoning = entry.reasoning;
  if (reasoning == null || typeof reasoning !== "object")
    return false;
  const instructions = reasoning.instructions;
  return hasNonEmptyTextOrProcedure(instructions);
}
function checkReasoningInstructionsRules(root) {
  const requireForGroups = [
    ["orchestrator", root.orchestrator],
    ["subagent", root.subagent]
  ];
  for (const [groupName, group] of requireForGroups) {
    if (!isNamedMap(group))
      continue;
    for (const [name, entry] of group) {
      if (entry == null || typeof entry !== "object")
        continue;
      const record = entry;
      if (hasReasoningInstructions(record))
        continue;
      attachError(entry, `${groupName} '${name}' must set reasoning.instructions.`, "reasoning-instructions-required");
    }
  }
  if (isNamedMap(root.generator)) {
    for (const [name, entry] of root.generator) {
      if (entry == null || typeof entry !== "object")
        continue;
      const prompt = entry.prompt;
      if (hasNonEmptyTextOrProcedure(prompt))
        continue;
      attachError(entry, `generator '${name}' must set prompt.`, "generator-prompt-required");
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/switch-rules.js
function reportDeprecatedSwitchChoices(switchEntry, normalizedName) {
  if (switchEntry.choices !== void 0) {
    attachError(switchEntry, `router '${normalizedName}' uses deprecated 'choices'. Use 'routes' and required 'otherwise' instead.`, "switch-choices-deprecated");
  }
}
function validateSwitchOnExit(switchEntry) {
  const onExit = switchEntry.on_exit;
  if (onExit !== void 0 && collectStatementKinds(onExit).length > 0) {
    attachError(switchEntry, "router nodes must not define on_exit transitions.", "switch-on-exit");
  }
}
function validateSwitchRoutes(switchEntry, normalizedName) {
  const routes = asObjectList(switchEntry.routes);
  if (routes.length === 0) {
    attachError(switchEntry, `router '${normalizedName}' must define at least one route under 'routes'.`, "switch-routes-required");
    return;
  }
  for (const r of routes) {
    if (!extractSwitchTarget(r.target)) {
      attachError(switchEntry, `router '${normalizedName}' has a route with invalid target. Use @<node_type>.<node_name>.`, "switch-route-target");
    }
    if (!extractWhenString(r.when)) {
      attachError(switchEntry, `router '${normalizedName}' has a route missing non-empty 'when'.`, "switch-route-when");
    }
  }
}
function validateSwitchElse(switchEntry, normalizedName) {
  const otherwiseEntry = switchEntry.otherwise;
  if (!otherwiseEntry || typeof otherwiseEntry !== "object") {
    attachError(switchEntry, `router '${normalizedName}' must define required 'otherwise.target'.`, "switch-else-required");
    return;
  }
  if (!extractSwitchTarget(otherwiseEntry.target)) {
    attachError(switchEntry, `router '${normalizedName}' has invalid otherwise.target. Use @<node_type>.<node_name>.`, "switch-else-target");
  }
}
function checkSwitchRules(_store, root) {
  const switches = root.router;
  if (!isNamedMap(switches))
    return;
  for (const [name, entry] of switches) {
    if (entry == null || typeof entry !== "object")
      continue;
    const switchEntry = entry;
    const normalizedName = normalizeId(name);
    reportDeprecatedSwitchChoices(switchEntry, normalizedName);
    validateSwitchOnExit(switchEntry);
    validateSwitchRoutes(switchEntry, normalizedName);
    validateSwitchElse(switchEntry, normalizedName);
  }
}

// ../../dialect/agentfabric/dist/lint/passes/rules/trigger-rules.js
function checkTriggerRules(root) {
  const triggers = root.trigger;
  if (!isNamedMap(triggers))
    return;
  const byKind = /* @__PURE__ */ new Map();
  for (const [, entry] of triggers) {
    if (entry == null || typeof entry !== "object")
      continue;
    const kind = extractStringValue(entry.kind);
    if (!kind)
      continue;
    const key = kind.toLowerCase();
    const list = byKind.get(key);
    if (list)
      list.push(entry);
    else
      byKind.set(key, [entry]);
  }
  for (const [kindKey, entries] of byKind) {
    if (entries.length <= 1)
      continue;
    for (const node of entries) {
      attachError(node, `Only one trigger is allowed per kind; multiple triggers use kind '${kindKey}'.`, "trigger-duplicate-kind");
    }
  }
  for (const [, entry] of triggers) {
    if (entry == null || typeof entry !== "object")
      continue;
    const trigger = entry;
    const onMessage = trigger.on_message;
    const kinds = collectStatementKinds(onMessage);
    if (kinds.includes("IfStatement") || kinds.includes("RunStatement") || !hasSingleFixedTransition(onMessage)) {
      attachError(trigger, "trigger.on_message must contain exactly one unconditional 'transition to ...' statement.", "trigger-on-message-transition");
    }
  }
}

// ../../dialect/agentfabric/dist/lint/passes/agentfabric-semantic.js
var AgentFabricSemanticPass = class {
  id = storeKey("agentfabric-semantic");
  description = "AgentFabric-specific semantic lint validations";
  finalize(store, root) {
    checkTriggerRules(root);
    checkConnectionUriRules(root);
    checkOutputStructureRules(root);
    checkReasoningInstructionsRules(root);
    checkOnExitRules(root);
    checkSwitchRules(store, root);
    checkEchoRules(root);
    checkAgenticLlmRules(root);
  }
};
function agentFabricSemanticPass() {
  return new AgentFabricSemanticPass();
}

// ../../dialect/agentfabric/dist/lint/passes/suppress-tools-namespace-undefined-reference.js
function shouldSuppressDiagnostic(diag) {
  if (!diag || typeof diag !== "object")
    return false;
  const record = diag;
  const code = record.code;
  const message = record.message;
  if (typeof message !== "string")
    return false;
  if (code === "undefined-reference") {
    if (message.includes("'@actions' cannot be used as a reference")) {
      return true;
    }
    if (message.includes("is not defined in actions")) {
      return true;
    }
  }
  if (code === "constraint-resolved-type") {
    if (message.includes("Cannot invoke '@actions.")) {
      return true;
    }
  }
  return false;
}
function traverseAndFilter(node, seen) {
  if (node == null || typeof node !== "object")
    return;
  if (seen.has(node))
    return;
  seen.add(node);
  const obj = node;
  const diagnostics = obj.__diagnostics;
  if (Array.isArray(diagnostics)) {
    obj.__diagnostics = diagnostics.filter((d) => !shouldSuppressDiagnostic(d));
  }
  recurseAstChildren(node, (_key, child) => {
    traverseAndFilter(child, seen);
  });
}
var SuppressActionsNamespaceUndefinedReferencePass = class {
  id = storeKey("agentfabric-suppress-actions-undefined-reference");
  description = "Suppress undefined-reference diagnostics for @actions namespace in AgentFabric";
  run(_store, root) {
    traverseAndFilter(root, /* @__PURE__ */ new WeakSet());
  }
};
function suppressActionsNamespaceUndefinedReferencePass() {
  return new SuppressActionsNamespaceUndefinedReferencePass();
}

// ../../dialect/agentfabric/dist/lint/passes/index.js
var expressionOptions = {
  functions: /* @__PURE__ */ new Set([
    "len",
    "max",
    "min",
    "uuid",
    "now",
    "strip",
    "startswith",
    "endswith",
    "abs",
    "round",
    "sum",
    "parse_json"
  ]),
  namespacedFunctions: AgentFabricSchemaInfo.namespacedFunctions
};
function defaultRules3() {
  return [
    // Base passes from @agentscript/language
    symbolTableAnalyzer(),
    duplicateKeyPass(),
    requiredFieldPass(),
    singularCollectionPass(),
    constraintValidationPass(),
    positionIndexPass(),
    unreachableCodePass(),
    emptyBlockPass(),
    expressionValidationPass(expressionOptions),
    agentFabricSemanticPass(),
    // Validation
    undefinedReferencePass(),
    suppressActionsNamespaceUndefinedReferencePass()
  ];
}

// ../../dialect/agentfabric/dist/pkg-meta.js
var DIALECT_NAME3 = "agentfabric";
var DIALECT_VERSION3 = "0.1.11";

// ../../dialect/agentfabric/dist/compiler/compiler-context.js
var DiagnosticSeverity2;
(function(DiagnosticSeverity3) {
  DiagnosticSeverity3[DiagnosticSeverity3["Error"] = 1] = "Error";
  DiagnosticSeverity3[DiagnosticSeverity3["Warning"] = 2] = "Warning";
  DiagnosticSeverity3[DiagnosticSeverity3["Information"] = 3] = "Information";
  DiagnosticSeverity3[DiagnosticSeverity3["Hint"] = 4] = "Hint";
})(DiagnosticSeverity2 || (DiagnosticSeverity2 = {}));

// ../../dialect/agentfabric/dist/compiler/unified-agent-specification.js
var ObjectTypes;
(function(ObjectTypes2) {
  ObjectTypes2["ACTION"] = "action";
  ObjectTypes2["AGENT"] = "agent";
  ObjectTypes2["EXTERNAL_AGENT"] = "external-agent";
  ObjectTypes2["HANDOFF"] = "handoff";
  ObjectTypes2["ROUTER"] = "router";
  ObjectTypes2["MCP_ACTION"] = "mcp-action";
})(ObjectTypes || (ObjectTypes = {}));
var SubgraphPersistence;
(function(SubgraphPersistence2) {
  SubgraphPersistence2["EPHEMERAL"] = "ephemeral";
  SubgraphPersistence2["PERSISTENT"] = "persistent";
})(SubgraphPersistence || (SubgraphPersistence = {}));
var SubgraphInitStateMode;
(function(SubgraphInitStateMode2) {
  SubgraphInitStateMode2["COPY_PARENT"] = "copy_parent";
  SubgraphInitStateMode2["BLANK_SLATE"] = "blank_slate";
})(SubgraphInitStateMode || (SubgraphInitStateMode = {}));
var SubgraphInitMemoryMode;
(function(SubgraphInitMemoryMode2) {
  SubgraphInitMemoryMode2["COPY_PARENT"] = "copy_parent";
  SubgraphInitMemoryMode2["BLANK_SLATE"] = "blank_slate";
})(SubgraphInitMemoryMode || (SubgraphInitMemoryMode = {}));
var SubgraphResultMode;
(function(SubgraphResultMode2) {
  SubgraphResultMode2["TOOL_RESULT"] = "tool_result";
  SubgraphResultMode2["FINAL_RESULT"] = "final_result";
})(SubgraphResultMode || (SubgraphResultMode = {}));
var SubgraphStateApplyMode;
(function(SubgraphStateApplyMode2) {
  SubgraphStateApplyMode2["NONE"] = "none";
  SubgraphStateApplyMode2["ALL"] = "all";
  SubgraphStateApplyMode2["ALLOWLIST"] = "allowlist";
})(SubgraphStateApplyMode || (SubgraphStateApplyMode = {}));

// ../../dialect/agentfabric/dist/compiler/compile-execute-do.js
var NAMESPACED_FUNCTION_NAMES = new Set(Object.keys(AgentFabricSchemaInfo.namespacedFunctions));

// ../../dialect/agentfabric/dist/index.js
var agentfabricDialect = {
  name: DIALECT_NAME3,
  displayName: "AgentFabric",
  description: "AgentFabric dialect for workflow-based agent definitions",
  version: DIALECT_VERSION3,
  schemaInfo: AgentFabricSchemaInfo,
  createRules: defaultRules3,
  source: "agentfabric-lint"
};

// ../lsp/dist/dialect-registry.js
var defaultDialects = [
  agentforceDialect,
  agentscriptDialect,
  agentfabricDialect
];

// ../parser-javascript/dist/cst-node.js
var EMPTY_CHILDREN = Object.freeze([]);
var CSTNode = class {
  type;
  /** Whether this is a "named" node (true) or anonymous punctuation/keyword (false). */
  isNamed;
  isError;
  isMissing;
  startOffset;
  endOffset;
  // Flat position storage — avoids object allocations per node.
  // Also exposed as startPosition/endPosition getters for compat.
  startRow;
  startCol;
  endRow;
  endCol;
  /** Lazy children array — null for leaf nodes, allocated on first appendChild. */
  _children = null;
  parent = null;
  /** Index of this node within its parent's children array. -1 if no parent. */
  _childIndex = -1;
  /** Field name → child indices. Lazy: null until first field is added. */
  _fields = null;
  /** Reverse map: child index → field name. Built lazily. */
  _childFieldNames = null;
  /** Cached named children. */
  _namedChildren = null;
  /** The original source string, shared across all nodes in a tree. */
  _source;
  constructor(type, source, startOffset, endOffset, startPosition, endPosition, isNamed = true, isError = false, isMissing = false) {
    this.type = type;
    this._source = source;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.startRow = startPosition.row;
    this.startCol = startPosition.column;
    this.endRow = endPosition.row;
    this.endCol = endPosition.column;
    this.isNamed = isNamed;
    this.isError = isError;
    this.isMissing = isMissing;
  }
  get text() {
    return this._source.slice(this.startOffset, this.endOffset);
  }
  get startPosition() {
    return { row: this.startRow, column: this.startCol };
  }
  set startPosition(pos) {
    this.startRow = pos.row;
    this.startCol = pos.column;
  }
  get endPosition() {
    return { row: this.endRow, column: this.endCol };
  }
  set endPosition(pos) {
    this.endRow = pos.row;
    this.endCol = pos.column;
  }
  get children() {
    return this._children ?? EMPTY_CHILDREN;
  }
  set children(value) {
    this._children = value;
  }
  get namedChildren() {
    if (!this._namedChildren) {
      this._namedChildren = this.children.filter((c) => c.isNamed);
    }
    return this._namedChildren;
  }
  get previousSibling() {
    if (!this.parent || this._childIndex <= 0)
      return null;
    return this.parent.children[this._childIndex - 1];
  }
  get nextSibling() {
    if (!this.parent)
      return null;
    const siblings = this.parent.children;
    return this._childIndex < siblings.length - 1 ? siblings[this._childIndex + 1] : null;
  }
  childForFieldName(name) {
    if (!this._fields)
      return null;
    const indices = this._fields.get(name);
    if (!indices || indices.length === 0)
      return null;
    return this.children[indices[0]] ?? null;
  }
  childrenForFieldName(name) {
    if (!this._fields)
      return [];
    const indices = this._fields.get(name);
    if (!indices)
      return [];
    return indices.map((i) => this.children[i]).filter(Boolean);
  }
  /** True if this node or any descendant has an error or missing node. */
  get hasError() {
    if (this.isError || this.isMissing)
      return true;
    return this.children.some((c) => c.hasError);
  }
  /** Get the field name for a child at a given index. */
  fieldNameForChild(index) {
    if (!this._fields)
      return null;
    if (!this._childFieldNames) {
      this._childFieldNames = /* @__PURE__ */ new Map();
      for (const [fieldName, indices] of this._fields) {
        for (const idx2 of indices) {
          this._childFieldNames.set(idx2, fieldName);
        }
      }
    }
    return this._childFieldNames.get(index) ?? null;
  }
  /** Add a child node, optionally associating it with a field name. */
  appendChild(child, fieldName) {
    if (!this._children)
      this._children = [];
    const idx2 = this._children.length;
    child.parent = this;
    child._childIndex = idx2;
    this._children.push(child);
    this.endRow = child.endRow;
    this.endCol = child.endCol;
    this.endOffset = child.endOffset;
    if (fieldName) {
      if (!this._fields)
        this._fields = /* @__PURE__ */ new Map();
      let arr = this._fields.get(fieldName);
      if (!arr) {
        arr = [];
        this._fields.set(fieldName, arr);
      }
      arr.push(idx2);
    }
  }
  /** @deprecated No-op: appendChild() tracks end position incrementally. */
  finalize() {
  }
  /** Serialize to s-expression format for testing (named nodes only, no text). */
  toSExp() {
    return nodeToSExp(this);
  }
  /**
   * Serialize to verbose s-expression format that includes ALL nodes
   * (both named and anonymous) with truncated text content.
   * Matches the source-of-truth format in sot/source.s-expression.
   */
  toVerboseSExp() {
    return nodeToVerboseSExp(this, 0);
  }
};
function nodeToSExp(node) {
  const parts = [];
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (!child.isNamed && !child.isError && !child.isMissing)
      continue;
    const fieldName = node.fieldNameForChild(i);
    const childStr = child.children.length > 0 || child.isError ? nodeToSExp(child) : child.isMissing ? `(MISSING ${child.type})` : `(${child.type})`;
    if (fieldName) {
      parts.push(`${fieldName}: ${childStr}`);
    } else {
      parts.push(childStr);
    }
  }
  if (node.isError) {
    if (parts.length === 0) {
      return `(ERROR)`;
    }
    return `(ERROR ${parts.join(" ")})`;
  }
  if (node.isMissing) {
    return `(MISSING ${node.type})`;
  }
  if (parts.length === 0) {
    return `(${node.type})`;
  }
  return `(${node.type} ${parts.join(" ")})`;
}
function nodeToVerboseSExp(node, depth) {
  const indent = "  ".repeat(depth);
  if (node.isMissing) {
    return `${indent}(MISSING ${JSON.stringify(node.type)})`;
  }
  if (node.isError && node.children.length === 0) {
    return `${indent}(ERROR)`;
  }
  if (node.children.length === 0) {
    const rawText = node.text;
    const truncated = rawText.length > 20 ? rawText.slice(0, 20) + "\u2026" : rawText;
    const escaped = JSON.stringify(truncated);
    return `${indent}(${node.type} ${escaped})`;
  }
  const childLines = [];
  for (const child of node.children) {
    childLines.push(nodeToVerboseSExp(child, depth + 1));
  }
  return `${indent}(${node.type}
${childLines.join("\n")})`;
}

// ../parser-javascript/dist/token.js
var TokenKind;
(function(TokenKind2) {
  TokenKind2["NEWLINE"] = "NEWLINE";
  TokenKind2["INDENT"] = "INDENT";
  TokenKind2["DEDENT"] = "DEDENT";
  TokenKind2["EOF"] = "EOF";
  TokenKind2["ID"] = "ID";
  TokenKind2["NUMBER"] = "NUMBER";
  TokenKind2["STRING"] = "STRING";
  TokenKind2["STRING_CONTENT"] = "STRING_CONTENT";
  TokenKind2["ESCAPE_SEQUENCE"] = "ESCAPE_SEQUENCE";
  TokenKind2["DATETIME"] = "DATETIME";
  TokenKind2["TEMPLATE_CONTENT"] = "TEMPLATE_CONTENT";
  TokenKind2["PLUS"] = "PLUS";
  TokenKind2["MINUS"] = "MINUS";
  TokenKind2["STAR"] = "STAR";
  TokenKind2["SLASH"] = "SLASH";
  TokenKind2["DOT"] = "DOT";
  TokenKind2["COMMA"] = "COMMA";
  TokenKind2["COLON"] = "COLON";
  TokenKind2["EQ"] = "EQ";
  TokenKind2["EQEQ"] = "EQEQ";
  TokenKind2["NEQ"] = "NEQ";
  TokenKind2["LT"] = "LT";
  TokenKind2["GT"] = "GT";
  TokenKind2["LTE"] = "LTE";
  TokenKind2["GTE"] = "GTE";
  TokenKind2["ARROW"] = "ARROW";
  TokenKind2["ELLIPSIS"] = "ELLIPSIS";
  TokenKind2["PERCENT"] = "PERCENT";
  TokenKind2["PIPE"] = "PIPE";
  TokenKind2["AT"] = "AT";
  TokenKind2["LPAREN"] = "LPAREN";
  TokenKind2["RPAREN"] = "RPAREN";
  TokenKind2["LBRACKET"] = "LBRACKET";
  TokenKind2["RBRACKET"] = "RBRACKET";
  TokenKind2["LBRACE"] = "LBRACE";
  TokenKind2["RBRACE"] = "RBRACE";
  TokenKind2["TEMPLATE_EXPR_START"] = "TEMPLATE_EXPR_START";
  TokenKind2["DASH_SPACE"] = "DASH_SPACE";
  TokenKind2["DQUOTE"] = "DQUOTE";
  TokenKind2["COMMENT"] = "COMMENT";
  TokenKind2["ERROR_TOKEN"] = "ERROR_TOKEN";
})(TokenKind || (TokenKind = {}));

// ../parser-javascript/dist/highlighter.js
function highlight(root) {
  const captures = [];
  walkNode(root, captures);
  return captures;
}
function capture(node, name, captures) {
  captures.push({
    name,
    text: node.text,
    startRow: node.startRow,
    startCol: node.startCol,
    endRow: node.endRow,
    endCol: node.endCol
  });
}
function walkNode(node, captures) {
  switch (node.type) {
    case "comment":
      capture(node, "comment", captures);
      return;
    // Don't recurse into comments
    case "number":
      capture(node, "number", captures);
      return;
    case "string":
      capture(node, "string", captures);
      for (const child of node.children) {
        if (child.type === "escape_sequence") {
          capture(child, "string.escape", captures);
        }
      }
      return;
    case "string_content":
      capture(node, "string", captures);
      return;
    case "escape_sequence":
      capture(node, "string.escape", captures);
      return;
    case "template_content":
      capture(node, "string", captures);
      return;
    case "ellipsis":
      capture(node, "constant.builtin", captures);
      return;
    case "id":
      captureId(node, captures);
      return;
    case "at_id":
      captureAtId(node, captures);
      return;
    case "template_expression":
      captureTemplateExpression(node, captures);
      return;
    case "variable_declaration":
      captureVariableDeclaration(node, captures);
      return;
  }
  if (!node.isNamed && node.children.length === 0) {
    captureAnonymous(node, captures);
    return;
  }
  for (const child of node.children) {
    walkNode(child, captures);
  }
}
function isRootLevelKey(keyNode) {
  const mappingElement = keyNode.parent;
  if (mappingElement?.type !== "mapping_element")
    return false;
  const mapping = mappingElement.parent;
  if (mapping?.type !== "mapping")
    return false;
  return mapping.parent?.type === "source_file";
}
function captureId(node, captures) {
  const parent = node.parent;
  if (node.text === "True" || node.text === "False" || node.text === "None") {
    capture(node, "constant.builtin", captures);
    return;
  }
  if (parent?.type === "at_id") {
    capture(node, "module", captures);
    return;
  }
  if (parent?.type === "key") {
    if (isRootLevelKey(parent)) {
      const namedSiblings = parent.namedChildren;
      if (namedSiblings.length > 0 && namedSiblings[0] === node) {
        capture(node, "keyword.block", captures);
      } else {
        capture(node, "keyword.block.name", captures);
      }
    } else {
      capture(node, "key", captures);
    }
    return;
  }
  if (parent?.type === "member_expression") {
    const parentChildren = parent.namedChildren;
    if (parentChildren.length > 0 && parentChildren[parentChildren.length - 1] === node) {
      capture(node, "variable", captures);
      return;
    }
  }
  if (parent?.type === "with_statement") {
    const fieldName = parent.fieldNameForChild(node._childIndex);
    if (fieldName === "param") {
      capture(node, "variable", captures);
      return;
    }
  }
  capture(node, "variable", captures);
}
function captureAtId(node, captures) {
  for (const child of node.children) {
    if (child.type === "@" || child.text === "@") {
      capture(child, "decorator", captures);
    } else if (child.type === "id") {
      capture(child, "module", captures);
    }
  }
}
function captureTemplateExpression(node, captures) {
  for (const child of node.children) {
    if (child.text === "{!") {
      capture(child, "punctuation.template", captures);
    } else if (child.text === "}") {
      capture(child, "punctuation.template", captures);
    } else {
      walkNode(child, captures);
    }
  }
}
function captureVariableDeclaration(node, captures) {
  for (const child of node.children) {
    if (!child.isNamed && (child.text === "mutable" || child.text === "linked")) {
      capture(child, "keyword.modifier", captures);
    } else {
      walkNode(child, captures);
    }
  }
}
function captureAnonymous(node, captures) {
  const text = node.text;
  switch (text) {
    case "if":
    case "elif":
    case "else":
    case "run":
    case "with":
    case "set":
    case "transition":
    case "available":
    case "when":
    case "and":
    case "or":
    case "not":
    case "is":
    case "to":
      capture(node, "keyword", captures);
      return;
    case "mutable":
    case "linked":
      capture(node, "keyword.modifier", captures);
      return;
    case "True":
    case "False":
    case "None":
      capture(node, "constant.builtin", captures);
      return;
  }
  switch (text) {
    case "==":
    case "!=":
    case "<":
    case ">":
    case "<=":
    case ">=":
    case "+":
    case "*":
    case "/":
    case "=":
      capture(node, "operator", captures);
      return;
    case "-":
      if (node.parent?.type === "sequence_element") {
        capture(node, "punctuation.special", captures);
      } else {
        capture(node, "operator", captures);
      }
      return;
  }
  switch (text) {
    case ":":
    case ".":
    case ",":
      capture(node, "punctuation.delimiter", captures);
      return;
    case "[":
    case "]":
    case "{":
    case "}":
      capture(node, "punctuation.bracket", captures);
      return;
    case "|":
    case "->":
    case "- ":
      capture(node, "punctuation.special", captures);
      return;
    case "@":
      capture(node, "decorator", captures);
      return;
    case '"':
      capture(node, "string", captures);
      return;
  }
}

// ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../parser-javascript/dist/lexer.js
var CH_TAB = 9;
var CH_LF = 10;
var CH_CR = 13;
var CH_SPACE = 32;
var CH_BANG = 33;
var CH_DQUOTE = 34;
var CH_HASH = 35;
var CH_DASH = 45;
var CH_DOT = 46;
var CH_0 = 48;
var CH_9 = 57;
var CH_LT = 60;
var CH_EQ = 61;
var CH_GT = 62;
var CH_A = 65;
var CH_Z = 90;
var CH_BACKSLASH = 92;
var CH_UNDERSCORE = 95;
var CH_a = 97;
var CH_z = 122;
var CH_LBRACE = 123;
var CH_NUL = 0;
function isIdStart(c) {
  return c >= CH_A && c <= CH_Z || c >= CH_a && c <= CH_z || c === CH_UNDERSCORE;
}
function isIdCont(c) {
  return isIdStart(c) || c >= CH_0 && c <= CH_9;
}
function isDigit(c) {
  return c >= CH_0 && c <= CH_9;
}
function isHorizontalWs(c) {
  return c === CH_SPACE || c === CH_TAB;
}
var SINGLE_CHAR_TOKENS = new Array(128).fill(0);
SINGLE_CHAR_TOKENS[43] = TokenKind.PLUS;
SINGLE_CHAR_TOKENS[CH_DASH] = TokenKind.MINUS;
SINGLE_CHAR_TOKENS[42] = TokenKind.STAR;
SINGLE_CHAR_TOKENS[47] = TokenKind.SLASH;
SINGLE_CHAR_TOKENS[CH_DOT] = TokenKind.DOT;
SINGLE_CHAR_TOKENS[44] = TokenKind.COMMA;
SINGLE_CHAR_TOKENS[58] = TokenKind.COLON;
SINGLE_CHAR_TOKENS[61] = TokenKind.EQ;
SINGLE_CHAR_TOKENS[60] = TokenKind.LT;
SINGLE_CHAR_TOKENS[CH_GT] = TokenKind.GT;
SINGLE_CHAR_TOKENS[124] = TokenKind.PIPE;
SINGLE_CHAR_TOKENS[64] = TokenKind.AT;
SINGLE_CHAR_TOKENS[40] = TokenKind.LPAREN;
SINGLE_CHAR_TOKENS[41] = TokenKind.RPAREN;
SINGLE_CHAR_TOKENS[91] = TokenKind.LBRACKET;
SINGLE_CHAR_TOKENS[93] = TokenKind.RBRACKET;
SINGLE_CHAR_TOKENS[CH_LBRACE] = TokenKind.LBRACE;
SINGLE_CHAR_TOKENS[125] = TokenKind.RBRACE;
var Lexer = class {
  source;
  offset = 0;
  row = 0;
  col = 0;
  tokens = [];
  indentStack = [0];
  /** True when the current line started with `|` (template line). */
  onTemplateLine = false;
  /** Indent level of the line containing `|`. Content deeper than this is template content. */
  templateBaseIndent = -1;
  /** True when inside a `{!...}` template expression. */
  inTemplateExpr = false;
  /** Nested brace depth inside a template expression (for `{` inside `{!...}`). */
  templateExprBraceDepth = 0;
  constructor(source) {
    this.source = source;
  }
  tokenize() {
    this.tokens = [];
    const estimate = this.source.length / 8 | 0;
    if (estimate > 64) {
      this.tokens.length = estimate;
      this.tokens.length = 0;
    }
    this.offset = 0;
    this.row = 0;
    this.col = 0;
    this.indentStack = [0];
    while (this.hasMore) {
      this.tokenizeLine();
    }
    while (this.indentStack.length > 1) {
      this.indentStack.pop();
      this.emitVirtual(TokenKind.DEDENT);
    }
    this.emitVirtual(TokenKind.EOF);
    return this.tokens;
  }
  tokenizeLine() {
    const indentLength = this.consumeIndentation();
    if (this.consumeNewline()) {
      return;
    }
    const c = this.peekCharCode();
    if (c === CH_HASH && (!this.onTemplateLine || indentLength <= this.templateBaseIndent)) {
      const currentIndent2 = this.indentStack[this.indentStack.length - 1];
      if (indentLength > currentIndent2) {
        const nextContentIndent = this.peekNextContentIndent();
        if (nextContentIndent < indentLength) {
          if (this.tokens.length > 0) {
            this.emitVirtual(TokenKind.NEWLINE);
          }
          return this.tokenizeComment();
        }
      } else if (indentLength < currentIndent2) {
        const nextContentIndent = this.peekNextContentIndent();
        if (nextContentIndent > indentLength) {
          this.emitIndentation(nextContentIndent);
          return this.tokenizeComment();
        }
      }
      this.emitIndentation(indentLength);
      return this.tokenizeComment();
    }
    const currentIndent = this.indentStack[this.indentStack.length - 1];
    if (this.onTemplateLine && indentLength > this.templateBaseIndent && currentIndent > this.templateBaseIndent && indentLength !== currentIndent) {
      this.emitIndentation(currentIndent);
    } else {
      this.emitIndentation(indentLength);
    }
    if (c === CH_DASH) {
      const nc = this.peekCharCode(1);
      const atEOF = this.offset + 1 >= this.source.length;
      if (nc === CH_SPACE || this.atNewline(1) || atEOF) {
        this.emit(TokenKind.DASH_SPACE, nc === CH_SPACE ? "- " : "-");
      }
    }
    while (this.hasMore) {
      const c2 = this.peekCharCode();
      if (this.consumeNewline()) {
        return;
      }
      if (c2 === CH_CR) {
        invariant(!this.atNewline());
        this.advance();
        continue;
      }
      if (isHorizontalWs(c2)) {
        this.advance();
        continue;
      }
      if (c2 === CH_BACKSLASH) {
        if (this.atNewline(1)) {
          this.advance();
          invariant(this.consumeNewline());
          while (isHorizontalWs(this.peekCharCode())) {
            this.advance();
          }
          continue;
        }
      }
      if (c2 === CH_HASH) {
        return this.tokenizeComment();
      }
      this.tokenizeToken();
    }
  }
  emitIndentation(indentLength) {
    const currentIndent = this.indentStack[this.indentStack.length - 1];
    if (indentLength > currentIndent) {
      this.indentStack.push(indentLength);
      this.emitVirtual(TokenKind.INDENT);
    } else if (indentLength < currentIndent) {
      if (indentLength <= this.templateBaseIndent) {
        this.onTemplateLine = false;
        this.inTemplateExpr = false;
        this.templateExprBraceDepth = 0;
      }
      while (this.indentStack.length > 1 && this.indentStack[this.indentStack.length - 1] > indentLength) {
        this.indentStack.pop();
        this.emitVirtual(TokenKind.DEDENT);
      }
      this.emitVirtual(TokenKind.NEWLINE);
    } else {
      if (indentLength <= this.templateBaseIndent) {
        this.onTemplateLine = false;
        this.inTemplateExpr = false;
        this.templateExprBraceDepth = 0;
      }
      if (this.tokens.length > 0) {
        this.emitVirtual(TokenKind.NEWLINE);
      }
    }
  }
  tokenizeToken() {
    const c = this.peekCharCode();
    if (isDigit(c)) {
      if (this.tryDatetime()) {
        return;
      }
      this.tokenizeNumber();
      return;
    }
    if (isIdStart(c)) {
      this.tokenizeId();
      return;
    }
    if (!this.onTemplateLine || this.inTemplateExpr) {
      if (c === CH_DQUOTE) {
        this.tokenizeString();
        return;
      }
    }
    if (c === CH_LBRACE && this.peekCharCode(1) === CH_BANG) {
      this.inTemplateExpr = true;
      this.templateExprBraceDepth = 0;
      this.emit(TokenKind.TEMPLATE_EXPR_START, "{!");
      return;
    }
    if (c === CH_DOT) {
      if (this.peekCharCode(1) === CH_DOT && this.peekCharCode(2) === CH_DOT) {
        this.emit(TokenKind.ELLIPSIS, "...");
        return;
      }
      if (isDigit(this.peekCharCode(1))) {
        const prev = this.tokens[this.tokens.length - 1];
        const isMemberAccess = prev !== void 0 && (prev.kind === TokenKind.ID || prev.kind === TokenKind.NUMBER || prev.kind === TokenKind.RPAREN || prev.kind === TokenKind.RBRACKET);
        if (!isMemberAccess) {
          this.tokenizeNumber();
          return;
        }
      }
    }
    if (c === CH_DASH) {
      if (this.peekCharCode(1) === CH_GT) {
        return this.emit(TokenKind.ARROW, "->");
      }
    }
    const nc = this.peekCharCode(1);
    if (nc === CH_EQ) {
      if (c === CH_EQ) {
        return this.emit(TokenKind.EQEQ, "==");
      }
      if (c === CH_BANG) {
        return this.emit(TokenKind.NEQ, "!=");
      }
      if (c === CH_LT) {
        return this.emit(TokenKind.LTE, "<=");
      }
      if (c === CH_GT) {
        return this.emit(TokenKind.GTE, ">=");
      }
    }
    const kind = c < 128 ? SINGLE_CHAR_TOKENS[c] : 0;
    if (kind) {
      this.emitSpan(kind, 1);
      if (kind === TokenKind.PIPE) {
        this.onTemplateLine = true;
        this.templateBaseIndent = this.indentStack[this.indentStack.length - 1];
      }
      if (this.inTemplateExpr) {
        if (kind === TokenKind.LBRACE) {
          this.templateExprBraceDepth++;
        } else if (kind === TokenKind.RBRACE) {
          if (this.templateExprBraceDepth > 0) {
            this.templateExprBraceDepth--;
          } else {
            this.inTemplateExpr = false;
          }
        }
      }
      return;
    }
    this.emitSpan(TokenKind.ERROR_TOKEN, 1);
  }
  tokenizeId() {
    let i = 0;
    for (; ; i++) {
      const c = this.peekCharCode(i);
      if (!isIdCont(c))
        break;
    }
    this.emitSpan(TokenKind.ID, i);
  }
  tokenizeNumber() {
    let tokenLength = 0;
    const leadingDot = this.peekCharCode(tokenLength) === CH_DOT;
    if (leadingDot) {
      tokenLength++;
    }
    while (isDigit(this.peekCharCode(tokenLength))) {
      tokenLength++;
    }
    if (!leadingDot && this.peekCharCode(tokenLength) === CH_DOT) {
      tokenLength++;
    }
    while (isDigit(this.peekCharCode(tokenLength))) {
      tokenLength++;
    }
    this.emitSpan(TokenKind.NUMBER, tokenLength);
  }
  tryDatetime() {
    const remaining = this.source.length - this.offset;
    if (remaining < 10)
      return false;
    if (this.source.charCodeAt(this.offset + 4) !== CH_DASH || this.source.charCodeAt(this.offset + 7) !== CH_DASH) {
      return false;
    }
    const slice = this.source.slice(this.offset, this.offset + 30);
    const match = slice.match(/^\d{4}-\d{2}-\d{2}(T\d{1,2}(:\d{2})?(:\d{2})?(\.\d+)?Z?)?/);
    if (!match)
      return false;
    const matchText = match[0];
    if (matchText.length < 10)
      return false;
    this.emit(TokenKind.DATETIME, matchText);
    return true;
  }
  tokenizeString() {
    const start = this.position;
    const startOffset = this.offset;
    const quoteCode = this.peekCharCode();
    this.advance();
    while (this.hasMore) {
      const c = this.peekCharCode();
      if (c === quoteCode) {
        this.advance();
        const text2 = this.source.slice(startOffset, this.offset);
        this.tokens.push(this.makeToken(TokenKind.STRING, text2, start, this.position, startOffset));
        return;
      }
      if (c === CH_BACKSLASH) {
        this.advance(2);
        continue;
      }
      if (this.atNewline()) {
        break;
      }
      if (c === CH_CR) {
        invariant(!this.atNewline());
        this.advance();
        continue;
      }
      if (c === CH_NUL) {
        break;
      }
      this.advance();
    }
    const text = this.source.slice(startOffset, this.offset);
    this.tokens.push(this.makeToken(TokenKind.STRING, text, start, this.position, startOffset));
  }
  tokenizeComment() {
    const start = this.position;
    const startOffset = this.offset;
    while (this.hasMore && !this.atNewline()) {
      this.advance();
    }
    const text = this.source.slice(startOffset, this.offset);
    this.tokens.push(this.makeToken(TokenKind.COMMENT, text, start, this.position, startOffset));
    this.consumeNewline();
  }
  consumeIndentation() {
    let indentLength = 0;
    while (this.hasMore) {
      const c = this.peekCharCode();
      if (c === CH_SPACE) {
        indentLength += 1;
        this.advance();
      } else if (c === CH_TAB) {
        indentLength += 3;
        this.advance();
      } else {
        break;
      }
    }
    return indentLength;
  }
  /**
   * Scan ahead (without advancing) past comment/blank lines to find the indent
   * of the next line with real (non-comment) content. Returns -1 if only
   * comments, blanks, or EOF remain. Matches tree-sitter scanner behavior which
   * skips past comment-only lines when computing INDENT/DEDENT.
   */
  peekNextContentIndent() {
    const startPosition = this.position;
    const startOffset = this.offset;
    while (this.hasMore) {
      if (this.consumeNewline())
        break;
      this.advance();
    }
    while (this.hasMore) {
      const lineIndent = this.consumeIndentation();
      if (this.consumeNewline())
        continue;
      const c = this.peekCharCode();
      if (c === CH_HASH) {
        while (this.hasMore) {
          if (this.consumeNewline())
            break;
          this.advance();
        }
        continue;
      }
      this.offset = startOffset;
      this.row = startPosition.row;
      this.col = startPosition.column;
      return lineIndent;
    }
    this.offset = startOffset;
    this.row = startPosition.row;
    this.col = startPosition.column;
    return -1;
  }
  // --- Utility methods ---
  peekCharCode(additiveOffset = 0) {
    return this.source.charCodeAt(this.offset + additiveOffset);
  }
  get hasMore() {
    return this.offset < this.source.length && this.offset >= 0;
  }
  /**
   * Attempt to advance n characters.
   * @returns how many characters were advanced.
   */
  advance(n = 1) {
    n = Math.max(0, Math.min(n, this.source.length - this.offset));
    this.col += n;
    for (let i = 0; i < n; i++) {
      if (this.peekCharCode(i) === CH_LF) {
        this.row++;
        this.col = n - i - 1;
      }
    }
    this.offset += n;
    return n;
  }
  /**
   * Attempt to consume a newline.
   * @returns whether a newline was consumed.
   */
  consumeNewline() {
    const newChars = this.atNewline();
    if (newChars > 0) {
      invariant(this.advance(newChars));
      return true;
    }
    return false;
  }
  /**
   * Checks if the current position is at a newline.
   * @param additiveOffset
   * @returns 0 if not at a newline, 1 if at an LF newline, 2 if at a CR LF newline.
   */
  atNewline(additiveOffset = 0) {
    const firstChar = this.peekCharCode(additiveOffset);
    if (firstChar === CH_LF)
      return 1;
    if (firstChar === CH_CR && this.peekCharCode(additiveOffset + 1) === CH_LF)
      return 2;
    return 0;
  }
  get position() {
    return { row: this.row, column: this.col };
  }
  emitSpan(kind, length) {
    const text = this.source.slice(this.offset, this.offset + length);
    return this.emit(kind, text);
  }
  emit(kind, text) {
    const startPosition = this.position;
    const startOffset = this.offset;
    invariant(text === this.source.slice(startOffset, startOffset + text.length), `expected '${text}' but got ${this.source.slice(startOffset, startOffset + text.length)} at offset ${startOffset}`);
    this.advance(text.length);
    this.tokens.push(this.makeToken(kind, text, startPosition, this.position, startOffset));
  }
  emitVirtual(kind) {
    return this.emit(kind, "");
  }
  makeToken(kind, text, start, end, startOffset) {
    return { kind, text, start, end, startOffset };
  }
};

// ../parser-javascript/dist/errors.js
function makeErrorNode(source, children, startOffset, endOffset, startPosition, endPosition) {
  const node = new CSTNode("ERROR", source, startOffset, endOffset, startPosition, endPosition, true, true);
  for (const child of children) {
    node.appendChild(child);
  }
  return node;
}
function isSyncPoint(kind) {
  return kind === TokenKind.NEWLINE || kind === TokenKind.DEDENT || kind === TokenKind.EOF;
}

// ../parser-javascript/dist/expressions.js
var VALID_ESCAPES = /* @__PURE__ */ new Set(['"', "'", "\\", "n", "r", "t", "0"]);
var KEY_STOP_KEYWORDS = /* @__PURE__ */ new Set([
  "if",
  "elif",
  "else",
  "run",
  "set",
  "with",
  "to",
  "transition",
  "available",
  "and",
  "or",
  "not",
  "is",
  "True",
  "False",
  "None",
  "mutable",
  "linked",
  "empty"
]);
function makeMissingArgument(ctx) {
  const offset = ctx.peekOffset();
  const pos = ctx.peek().start;
  const missingId = new CSTNode("id", ctx.source, offset, offset, pos, pos, true, false, true);
  const atom = new CSTNode("atom", ctx.source, offset, offset, pos, pos);
  atom.appendChild(missingId);
  const expr = new CSTNode("expression", ctx.source, offset, offset, pos, pos);
  expr.appendChild(atom);
  return expr;
}
function makeEmptyError(ctx) {
  const tok = ctx.peek();
  const offset = ctx.peekOffset();
  return new CSTNode("ERROR", ctx.source, offset, offset, tok.start, tok.start, true, true);
}
function parseExpression(ctx, minPrec = 0) {
  let left = parsePrefix(ctx);
  if (!left)
    return null;
  while (true) {
    const nextKind = ctx.peek().kind;
    if (nextKind === TokenKind.NEWLINE || nextKind === TokenKind.DEDENT || nextKind === TokenKind.EOF)
      break;
    const prec = infixPrecedence(ctx);
    if (prec < minPrec)
      break;
    const result = parseInfix(ctx, left, prec);
    if (!result)
      break;
    left = result;
  }
  return left;
}
function parsePrefix(ctx) {
  const tok = ctx.peek();
  if (tok.kind === TokenKind.ID && tok.text === "not") {
    return parseUnary(ctx, "not", 3);
  }
  if (tok.kind === TokenKind.PLUS || tok.kind === TokenKind.MINUS) {
    const op = tok.text;
    return parseUnary(ctx, op, 7);
  }
  if (tok.kind === TokenKind.LPAREN) {
    return parseParenthesized(ctx);
  }
  return parseAtom(ctx);
}
function parseUnary(ctx, _op, prec) {
  const startTok = ctx.peek();
  const node = ctx.startNode("unary_expression");
  ctx.addAnonymousChild(node, ctx.consume());
  const operand = parseExpression(ctx, prec + 1);
  if (operand) {
    node.appendChild(wrapExpression(ctx, operand));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseParenthesized(ctx) {
  const startTok = ctx.peek();
  const node = ctx.startNode("parenthesized_expression");
  ctx.addAnonymousChild(node, ctx.consume());
  const expr = parseExpression(ctx, 0);
  if (expr) {
    node.appendChild(wrapExpression(ctx, expr), "expression");
  } else if (ctx.peek().kind === TokenKind.RPAREN) {
    node.appendChild(makeMissingArgument(ctx), "expression");
  }
  if (ctx.peek().kind === TokenKind.RPAREN) {
    ctx.addAnonymousChild(node, ctx.consume());
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseAtom(ctx) {
  const tok = ctx.peek();
  if (tok.kind === TokenKind.ID && (tok.text === "True" || tok.text === "False" || tok.text === "None")) {
    const node = ctx.startNode("atom");
    ctx.addAnonymousChild(node, ctx.consume());
    ctx.finishNode(node, tok);
    return node;
  }
  if (tok.kind === TokenKind.ID && tok.text === "empty") {
    const node = ctx.startNode("empty_keyword");
    ctx.addAnonymousChild(node, ctx.consume());
    ctx.finishNode(node, tok);
    return node;
  }
  if (tok.kind === TokenKind.AT) {
    return parseAtId(ctx);
  }
  if (tok.kind === TokenKind.ID) {
    return ctx.consumeNamed("id");
  }
  if (tok.kind === TokenKind.NUMBER) {
    return ctx.consumeNamed("number");
  }
  if (tok.kind === TokenKind.DATETIME) {
    return ctx.consumeNamed("datetime_literal");
  }
  if (tok.kind === TokenKind.STRING) {
    return parseString(ctx);
  }
  if (tok.kind === TokenKind.ELLIPSIS) {
    return ctx.consumeNamed("ellipsis");
  }
  if (tok.kind === TokenKind.LBRACKET) {
    return parseList(ctx);
  }
  if (tok.kind === TokenKind.LBRACE) {
    return parseDictionary(ctx);
  }
  return null;
}
function parseAtId(ctx) {
  const startTok = ctx.peek();
  const node = ctx.startNode("at_id");
  ctx.addAnonymousChild(node, ctx.consume());
  if (ctx.peek().kind === TokenKind.ID) {
    node.appendChild(ctx.consumeNamed("id"));
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseString(ctx) {
  const tok = ctx.peek();
  const startTok = tok;
  const node = ctx.startNode("string");
  const text = tok.text;
  const tokenOffset = ctx.peekOffset();
  ctx.consume();
  const baseRow = startTok.start.row;
  const baseCol = startTok.start.column;
  node.appendChild(new CSTNode('"', ctx.source, tokenOffset, tokenOffset + 1, { row: baseRow, column: baseCol }, { row: baseRow, column: baseCol + 1 }, false));
  let i = 1;
  const quoteChar = text[0];
  const hasClosingQuote = text.length > 1 && text[text.length - 1] === quoteChar;
  const contentEnd = hasClosingQuote ? text.length - 1 : text.length;
  let contentStart = i;
  while (i < contentEnd) {
    if (text[i] === "\\" && i + 1 < contentEnd && VALID_ESCAPES.has(text[i + 1])) {
      if (i > contentStart) {
        node.appendChild(new CSTNode("string_content", ctx.source, tokenOffset + contentStart, tokenOffset + i, { row: baseRow, column: baseCol + contentStart }, { row: baseRow, column: baseCol + i }));
      }
      const escLen = 2;
      node.appendChild(new CSTNode("escape_sequence", ctx.source, tokenOffset + i, tokenOffset + i + escLen, { row: baseRow, column: baseCol + i }, { row: baseRow, column: baseCol + i + escLen }));
      i += escLen;
      contentStart = i;
    } else if (text[i] === "\\" && i + 1 < contentEnd && !VALID_ESCAPES.has(text[i + 1])) {
      if (i > contentStart) {
        node.appendChild(new CSTNode("string_content", ctx.source, tokenOffset + contentStart, tokenOffset + i, { row: baseRow, column: baseCol + contentStart }, { row: baseRow, column: baseCol + i }));
      }
      const escStart = i;
      i += 2;
      while (i < contentEnd && /[a-zA-Z0-9_]/.test(text[i])) {
        i++;
      }
      const errNode = new CSTNode("ERROR", ctx.source, tokenOffset + escStart, tokenOffset + i, { row: baseRow, column: baseCol + escStart }, { row: baseRow, column: baseCol + i }, true, true);
      node.appendChild(errNode);
      contentStart = i;
    } else {
      i++;
    }
  }
  if (i > contentStart) {
    node.appendChild(new CSTNode("string_content", ctx.source, tokenOffset + contentStart, tokenOffset + i, { row: baseRow, column: baseCol + contentStart }, { row: baseRow, column: baseCol + i }));
  }
  if (hasClosingQuote) {
    node.appendChild(new CSTNode(quoteChar, ctx.source, tokenOffset + text.length - 1, tokenOffset + text.length, { row: baseRow, column: baseCol + text.length - 1 }, { row: baseRow, column: baseCol + text.length }, false));
  } else {
    const missingOffset = tokenOffset + text.length;
    const missingPos = { row: baseRow, column: baseCol + text.length };
    node.appendChild(new CSTNode(quoteChar, ctx.source, missingOffset, missingOffset, missingPos, missingPos, false, false, true));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseList(ctx) {
  const startTok = ctx.peek();
  const node = ctx.startNode("list");
  ctx.addAnonymousChild(node, ctx.consume());
  let _listIndentDepth = 0;
  while (ctx.peek().kind !== TokenKind.RBRACKET && ctx.peek().kind !== TokenKind.EOF) {
    if (ctx.peek().kind === TokenKind.NEWLINE) {
      ctx.consume();
      continue;
    }
    if (ctx.peek().kind === TokenKind.INDENT) {
      _listIndentDepth++;
      ctx.consume();
      continue;
    }
    if (ctx.peek().kind === TokenKind.DEDENT) {
      _listIndentDepth--;
      ctx.consume();
      continue;
    }
    const expr = parseExpression(ctx, 0);
    if (expr) {
      node.appendChild(wrapExpression(ctx, expr));
    } else {
      break;
    }
    if (ctx.peek().kind === TokenKind.COMMA) {
      ctx.addAnonymousChild(node, ctx.consume());
    } else {
      break;
    }
  }
  while (ctx.peek().kind === TokenKind.NEWLINE || ctx.peek().kind === TokenKind.INDENT || ctx.peek().kind === TokenKind.DEDENT) {
    ctx.consume();
  }
  if (ctx.peek().kind === TokenKind.RBRACKET) {
    ctx.addAnonymousChild(node, ctx.consume());
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseDictionary(ctx) {
  const startTok = ctx.peek();
  const node = ctx.startNode("dictionary");
  ctx.addAnonymousChild(node, ctx.consume());
  while (ctx.peek().kind !== TokenKind.RBRACE && ctx.peek().kind !== TokenKind.EOF) {
    if (ctx.peek().kind === TokenKind.NEWLINE || ctx.peek().kind === TokenKind.INDENT || ctx.peek().kind === TokenKind.DEDENT) {
      ctx.consume();
      continue;
    }
    const pair = parseDictionaryPair(ctx);
    if (pair) {
      node.appendChild(pair);
    } else {
      break;
    }
    if (ctx.peek().kind === TokenKind.COMMA) {
      ctx.addAnonymousChild(node, ctx.consume());
    } else {
      break;
    }
  }
  if (ctx.peek().kind === TokenKind.RBRACE) {
    ctx.addAnonymousChild(node, ctx.consume());
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseDictionaryPair(ctx) {
  const startTok = ctx.peek();
  if (!isKeyStart(ctx))
    return null;
  const node = ctx.startNode("dictionary_pair");
  const key = parseKey(ctx);
  if (key)
    node.appendChild(key, "key");
  if (ctx.peek().kind === TokenKind.COLON) {
    ctx.addAnonymousChild(node, ctx.consume());
  }
  const value = parseExpression(ctx, 0);
  if (value)
    node.appendChild(wrapExpression(ctx, value), "value");
  ctx.finishNode(node, startTok);
  return node;
}
var INFIX_PREC_BY_KIND = /* @__PURE__ */ new Map([
  [TokenKind.LPAREN, 8],
  [TokenKind.DOT, 8],
  [TokenKind.LBRACKET, 8],
  [TokenKind.EQEQ, 4],
  [TokenKind.NEQ, 4],
  [TokenKind.LT, 4],
  [TokenKind.GT, 4],
  [TokenKind.LTE, 4],
  [TokenKind.GTE, 4],
  [TokenKind.PLUS, 5],
  [TokenKind.MINUS, 5],
  [TokenKind.STAR, 6],
  [TokenKind.SLASH, 6]
]);
var INFIX_KEYWORD_PREC = /* @__PURE__ */ new Map([
  ["if", 0],
  ["or", 1],
  ["and", 2],
  ["is", 4]
]);
function infixPrecedence(ctx) {
  const tok = ctx.peek();
  if (tok.kind === TokenKind.ID)
    return INFIX_KEYWORD_PREC.get(tok.text) ?? -2;
  return INFIX_PREC_BY_KIND.get(tok.kind) ?? -2;
}
function parseInfix(ctx, left, prec) {
  const tok = ctx.peek();
  if (tok.kind === TokenKind.LPAREN && prec === 8) {
    return parseCall(ctx, left);
  }
  if (tok.kind === TokenKind.DOT && prec === 8) {
    return parseMember(ctx, left);
  }
  if (tok.kind === TokenKind.LBRACKET && prec === 8) {
    return parseSubscript(ctx, left);
  }
  if (tok.kind === TokenKind.ID && tok.text === "if") {
    return parseTernary(ctx, left);
  }
  if (tok.kind === TokenKind.ID && tok.text === "is") {
    return parseIsExpression(ctx, left);
  }
  return parseBinaryOrComparison(ctx, left, prec);
}
function parseCall(ctx, func) {
  const startTok = ctx.peek();
  const node = ctx.startNodeAt("call_expression", func);
  node.appendChild(wrapExpression(ctx, func), "function");
  ctx.addAnonymousChild(node, ctx.consume());
  while (ctx.peek().kind !== TokenKind.RPAREN && !ctx.isAtSyncPoint()) {
    const arg = parseExpression(ctx, 0);
    if (arg) {
      node.appendChild(wrapExpression(ctx, arg), "argument");
    } else {
      break;
    }
    if (ctx.peek().kind === TokenKind.COMMA) {
      ctx.addAnonymousChild(node, ctx.consume());
      if (ctx.peek().kind === TokenKind.RPAREN) {
        node.appendChild(makeMissingArgument(ctx), "argument");
        break;
      }
    } else {
      break;
    }
  }
  if (ctx.peek().kind === TokenKind.RPAREN) {
    ctx.addAnonymousChild(node, ctx.consume());
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseMember(ctx, object) {
  const startTok = ctx.peek();
  const node = ctx.startNodeAt("member_expression", object);
  node.appendChild(wrapExpression(ctx, object));
  ctx.addAnonymousChild(node, ctx.consume());
  if (ctx.peek().kind === TokenKind.ID) {
    node.appendChild(ctx.consumeNamed("id"));
  } else if (ctx.peek().kind === TokenKind.NUMBER) {
    const numNode = ctx.consumeNamed("number");
    const errNode = new CSTNode("ERROR", ctx.source, numNode.startOffset, numNode.endOffset, numNode.startPosition, numNode.endPosition, true, true);
    errNode.appendChild(numNode);
    node.appendChild(errNode);
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseSubscript(ctx, object) {
  const startTok = ctx.peek();
  const node = ctx.startNodeAt("subscript_expression", object);
  node.appendChild(wrapExpression(ctx, object));
  ctx.addAnonymousChild(node, ctx.consume());
  const index = parseExpression(ctx, 0);
  if (index) {
    node.appendChild(wrapExpression(ctx, index));
  }
  if (ctx.peek().kind === TokenKind.RBRACKET) {
    ctx.addAnonymousChild(node, ctx.consume());
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseTernary(ctx, consequence) {
  const startTok = ctx.peek();
  const node = ctx.startNodeAt("ternary_expression", consequence);
  node.appendChild(wrapExpression(ctx, consequence), "consequence");
  ctx.addAnonymousChild(node, ctx.consume());
  const condition = parseExpression(ctx, 1);
  if (condition) {
    node.appendChild(wrapExpression(ctx, condition), "condition");
  }
  if (ctx.peek().kind === TokenKind.ID && ctx.peek().text === "else") {
    ctx.addAnonymousChild(node, ctx.consume());
    const alt = parseExpression(ctx, 0);
    if (alt) {
      node.appendChild(wrapExpression(ctx, alt), "alternative");
    }
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseIsExpression(ctx, left) {
  const startTok = ctx.peek();
  const isNot = ctx.peekAt(1).kind === TokenKind.ID && ctx.peekAt(1).text === "not";
  const nodeType = "comparison_expression";
  const node = ctx.startNodeAt(nodeType, left);
  node.appendChild(wrapExpression(ctx, left));
  ctx.addAnonymousChild(node, ctx.consume());
  if (isNot) {
    ctx.addAnonymousChild(node, ctx.consume());
  }
  const right = parseExpression(ctx, 5);
  if (right) {
    node.appendChild(wrapExpression(ctx, right));
  }
  ctx.finishNode(node, startTok);
  return node;
}
function parseBinaryOrComparison(ctx, left, prec) {
  const tok = ctx.peek();
  const startTok = tok;
  const isComparison = tok.kind === TokenKind.EQEQ || tok.kind === TokenKind.NEQ || tok.kind === TokenKind.LT || tok.kind === TokenKind.GT || tok.kind === TokenKind.LTE || tok.kind === TokenKind.GTE || tok.kind === TokenKind.EQ;
  const nodeType = isComparison ? "comparison_expression" : "binary_expression";
  const node = ctx.startNodeAt(nodeType, left);
  node.appendChild(wrapExpression(ctx, left));
  ctx.addAnonymousChild(node, ctx.consume());
  const right = parseExpression(ctx, prec + 1);
  if (right) {
    node.appendChild(wrapExpression(ctx, right));
  } else {
    node.appendChild(makeEmptyError(ctx));
  }
  ctx.finishNode(node, startTok);
  return node;
}
var SKIP_WRAP_TYPES = /* @__PURE__ */ new Set(["expression", "ERROR"]);
var ATOM_TYPES = /* @__PURE__ */ new Set([
  "id",
  "number",
  "string",
  "datetime_literal",
  "at_id",
  "list",
  "dictionary",
  "ellipsis"
]);
function wrapExpression(ctx, inner) {
  if (SKIP_WRAP_TYPES.has(inner.type)) {
    return inner;
  }
  let wrapped = inner;
  if (ATOM_TYPES.has(inner.type)) {
    const atom = new CSTNode("atom", ctx.source, inner.startOffset, inner.endOffset, inner.startPosition, inner.endPosition);
    atom.appendChild(inner);
    wrapped = atom;
  }
  const expr = new CSTNode("expression", ctx.source, wrapped.startOffset, wrapped.endOffset, wrapped.startPosition, wrapped.endPosition);
  expr.appendChild(wrapped);
  return expr;
}
function isKeyStart(ctx) {
  const tok = ctx.peek();
  return isKeyTokenStart(tok.kind);
}
function isKeyTokenStart(kind) {
  return kind === TokenKind.ID || kind === TokenKind.STRING || kind === TokenKind.NUMBER;
}
function isKeyTokenContinuation(kind) {
  return isKeyTokenStart(kind) || kind === TokenKind.MINUS || kind === TokenKind.DOT;
}
function parseKey(ctx) {
  if (!isKeyStart(ctx))
    return null;
  const startTok = ctx.peek();
  const node = ctx.startNode("key");
  if (ctx.peek().kind === TokenKind.NUMBER) {
    const numNode = ctx.consumeNamed("number");
    const errNode = new CSTNode("ERROR", ctx.source, numNode.startOffset, numNode.endOffset, numNode.startPosition, numNode.endPosition, true, true);
    node.appendChild(errNode);
    if (ctx.peek().kind === TokenKind.ID) {
      node.appendChild(ctx.consumeNamed("id"));
    }
  } else if (ctx.peek().kind === TokenKind.STRING) {
    node.appendChild(parseString(ctx));
  } else {
    node.appendChild(ctx.consumeNamed("id"));
  }
  if (ctx.peek().kind === TokenKind.ID && !ctx.isAtSyncPoint() && ctx.peek().start.row === startTok.start.row) {
    const nextText = ctx.peek().text;
    if (!KEY_STOP_KEYWORDS.has(nextText)) {
      node.appendChild(ctx.consumeNamed("id"));
    }
  }
  ctx.finishNode(node, startTok);
  return node;
}

// ../parser-javascript/dist/parser.js
var MAX_KEY_LOOKAHEAD = 10;
var Parser = class {
  source;
  tokens;
  pos = 0;
  _eof;
  constructor(source) {
    this.source = source;
    const lexer = new Lexer(source);
    this.tokens = lexer.tokenize();
  }
  parse() {
    const root = this.parseSourceFile();
    return root;
  }
  // --- ParserContext implementation ---
  peek() {
    return this.tokens[this.pos] ?? this.eofToken();
  }
  peekAt(offset) {
    return this.tokens[this.pos + offset] ?? this.eofToken();
  }
  consume() {
    const tok = this.tokens[this.pos] ?? this.eofToken();
    if (this.pos < this.tokens.length)
      this.pos++;
    return tok;
  }
  consumeNamed(type) {
    const tok = this.consume();
    const offset = tok.startOffset;
    return new CSTNode(type, this.source, offset, offset + tok.text.length, tok.start, tok.end);
  }
  currentOffset() {
    const idx2 = this.pos > 0 ? this.pos - 1 : 0;
    return (this.tokens[idx2] ?? this.eofToken()).startOffset;
  }
  peekOffset() {
    return this.peek().startOffset;
  }
  isAtSyncPoint() {
    return isSyncPoint(this.peek().kind);
  }
  startNode(type) {
    const tok = this.peek();
    const offset = tok.startOffset;
    return new CSTNode(type, this.source, offset, offset, tok.start, tok.end);
  }
  startNodeAt(type, existingChild) {
    return new CSTNode(type, this.source, existingChild.startOffset, existingChild.endOffset, existingChild.startPosition, existingChild.endPosition);
  }
  finishNode(_node, _startTok) {
  }
  addAnonymousChild(parent, token) {
    const offset = token.startOffset;
    const child = new CSTNode(token.text, this.source, offset, offset + token.text.length, token.start, token.end, false);
    parent.appendChild(child);
  }
  // --- Top-level parsing ---
  parseSourceFile() {
    const startTok = this.peek();
    const node = this.startNode("source_file");
    this.skipNewlines();
    let outerIndent = false;
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      outerIndent = true;
    }
    if (this.peek().kind !== TokenKind.EOF) {
      while (this.peek().kind === TokenKind.COMMENT) {
        node.appendChild(this.consumeNamed("comment"));
        if (this.peek().kind === TokenKind.NEWLINE)
          this.consume();
      }
      this.skipNewlines();
      if (this.peek().kind === TokenKind.DASH_SPACE) {
        const seq = this.parseSequence();
        if (seq)
          node.appendChild(seq);
      } else if (!this.isAtEnd()) {
        const content = this.parseMappingOrExpression();
        if (content)
          node.appendChild(content);
      }
      this.skipNewlines();
      while (this.peek().kind === TokenKind.COMMENT) {
        node.appendChild(this.consumeNamed("comment"));
        if (this.peek().kind === TokenKind.NEWLINE)
          this.consume();
        this.skipNewlines();
      }
      while (!this.isAtEnd()) {
        if (this.peek().kind === TokenKind.NEWLINE || this.peek().kind === TokenKind.DEDENT) {
          this.consume();
          continue;
        }
        if (this.peek().kind === TokenKind.COMMENT) {
          node.appendChild(this.consumeNamed("comment"));
          continue;
        }
        const err = this.synchronize();
        if (err) {
          node.appendChild(err);
        } else {
          this.consume();
        }
      }
    } else if (outerIndent && this.peek().kind === TokenKind.DEDENT) {
      this.consume();
    }
    this.finishNode(node, startTok);
    node.startOffset = 0;
    node.startPosition = { row: 0, column: 0 };
    node.endOffset = this.source.length;
    node.endPosition = this.eofToken().end;
    return node;
  }
  parseMappingOrExpression() {
    if (this.isMappingStart()) {
      return this.parseMapping();
    }
    const expr = parseExpression(this, 0);
    if (!expr)
      return null;
    if (this.peek().kind === TokenKind.EQ) {
      const node = this.startNodeAt("assignment_expression", expr);
      node.appendChild(wrapExpression(this, expr), "left");
      this.addAnonymousChild(node, this.consume());
      const right = parseExpression(this, 0);
      if (right)
        node.appendChild(wrapExpression(this, right), "right");
      node.finalize();
      return node;
    }
    return wrapExpression(this, expr);
  }
  /**
   * Lookahead to determine if the current position starts a mapping (key-value
   * pairs) rather than an expression.
   *
   * Keys are at most a few tokens (1-3 words, possibly with hyphens/dots), so
   * we only need a small lookahead window. The limit exists as a safety cap —
   * it should never be reached on valid input.
   */
  isMappingStart() {
    const tok = this.peek();
    if (tok.kind === TokenKind.COMMENT)
      return true;
    if (tok.kind === TokenKind.PIPE)
      return true;
    if (tok.kind === TokenKind.ID && this.isStatementStart())
      return true;
    if (!isKeyTokenStart(tok.kind))
      return false;
    const startRow = tok.start.row;
    for (let i = 1; i < MAX_KEY_LOOKAHEAD; i++) {
      const t = this.peekAt(i);
      if (t.kind === TokenKind.COLON || t.kind === TokenKind.INDENT || t.kind === TokenKind.ARROW || t.kind === TokenKind.AT)
        return true;
      if (t.kind === TokenKind.EOF || t.start.row !== startRow)
        return false;
      if (!isKeyTokenContinuation(t.kind))
        return false;
    }
    return false;
  }
  // --- Mapping ---
  parseMapping() {
    const startTok = this.peek();
    const node = this.startNode("mapping");
    while (!this.isAtEnd()) {
      this.skipNewlines();
      const tok = this.peek();
      if (tok.kind === TokenKind.DEDENT || tok.kind === TokenKind.EOF)
        break;
      if (tok.kind === TokenKind.COMMENT && this.isTrailingCommentOnly()) {
        break;
      }
      const item = this.parseMappingItem();
      if (item) {
        node.appendChild(item);
      } else {
        const err = this.synchronize();
        if (err) {
          node.appendChild(err);
        } else if (!this.isAtEnd() && this.peek().kind !== TokenKind.DEDENT) {
          this.consume();
        }
      }
    }
    this.finishNode(node, startTok);
    return node;
  }
  parseMappingItem() {
    const tok = this.peek();
    if (tok.kind === TokenKind.ID) {
      switch (tok.text) {
        case "if":
          return this.parseIfStatement();
        case "run":
          return this.parseRunStatement();
        case "set":
          return this.parseSetStatement();
        case "transition":
          return this.parseTransitionStatement();
        case "with": {
          if (this.peekAt(1).kind !== TokenKind.COLON) {
            return this.parseWithStatement();
          }
          break;
        }
        case "available": {
          if (this.peekAt(1).kind === TokenKind.ID && this.peekAt(1).text === "when") {
            return this.parseAvailableWhenStatement();
          }
          break;
        }
      }
    }
    if (tok.kind === TokenKind.PIPE) {
      return this.parseTemplate();
    }
    if (tok.kind === TokenKind.COMMENT) {
      return this.consumeNamed("comment");
    }
    if (tok.kind === TokenKind.ID && (tok.text === "else" || tok.text === "elif" || tok.text === "for")) {
      return this.parseOrphanBlock();
    }
    if (isKeyStart(this)) {
      return this.parseMappingElement();
    }
    return null;
  }
  parseMappingElement() {
    const startTok = this.peek();
    const node = this.startNode("mapping_element");
    const key = parseKey(this);
    if (key)
      node.appendChild(key, "key");
    if (this.peek().kind === TokenKind.COLON) {
      this.addAnonymousChild(node, this.consume());
      if (this.peek().kind === TokenKind.COMMENT) {
        node.appendChild(this.consumeNamed("comment"));
      }
      if (this.peek().kind === TokenKind.ARROW) {
        this.parseArrowBody(node);
      } else {
        const colinear = this.tryParseColinearValue();
        if (colinear) {
          if (colinear.errorPrefix) {
            node.appendChild(colinear.errorPrefix);
          }
          node.appendChild(colinear.value, "colinear_value");
        }
        if (this.peek().kind === TokenKind.COMMENT) {
          node.appendChild(this.consumeNamed("comment"));
        }
        if (colinear) {
          const err = this.synchronizeRow(startTok.start.row);
          if (err)
            node.appendChild(err);
        } else if (!this.isAtSyncPoint() && this.peek().kind !== TokenKind.INDENT && this.peek().kind !== TokenKind.COMMENT && this.peek().kind !== TokenKind.ID && this.peek().kind !== TokenKind.STRING) {
          const err = this.synchronize();
          if (err)
            node.appendChild(err);
        }
        if (colinear && colinear.value.type === "expression_with_to" && !colinear.value.childForFieldName("with_to_statement_list") && this.peek().kind === TokenKind.INDENT && this.peekAt(1).kind === TokenKind.ID && this.peekAt(1).text === "to") {
          this.consume();
          const withToList = this.tryParseWithToStatementList();
          if (withToList) {
            colinear.value.appendChild(withToList, "with_to_statement_list");
            node.endOffset = colinear.value.endOffset;
            node.endPosition = colinear.value.endPosition;
          }
          if (this.peek().kind === TokenKind.DEDENT)
            this.consume();
        } else if (this.peek().kind === TokenKind.INDENT) {
          this.consume();
          this.consumeLeadingComments(node);
          const blockValue = this.parseBlockValue();
          if (blockValue)
            node.appendChild(blockValue, "block_value");
          this.consumeTrailingComments(node);
          this.recoverToBlockEnd(node);
          if (this.peek().kind === TokenKind.DEDENT)
            this.consume();
        }
      }
    } else if (this.peek().kind === TokenKind.INDENT) {
      node.appendChild(this.makeMissing(":"));
      this.consume();
      this.consumeLeadingComments(node);
      const blockValue = this.parseBlockValue();
      if (blockValue)
        node.appendChild(blockValue, "block_value");
      this.recoverToBlockEnd(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    } else if (this.peek().kind === TokenKind.ARROW) {
      node.appendChild(this.makeMissing(":"));
      this.parseArrowBody(node);
    } else if (key && (this.peek().kind === TokenKind.ID || this.peek().kind === TokenKind.AT) && this.peek().start.row === startTok.start.row) {
      node.appendChild(this.makeMissing(":"));
      const colinear = this.tryParseColinearValue();
      if (colinear) {
        if (colinear.errorPrefix) {
          node.appendChild(colinear.errorPrefix);
        }
        node.appendChild(colinear.value, "colinear_value");
      }
      if (this.peek().kind === TokenKind.COMMENT) {
        node.appendChild(this.consumeNamed("comment"));
      }
      if (colinear) {
        const err = this.synchronizeRow(startTok.start.row);
        if (err)
          node.appendChild(err);
      }
      if (this.peek().kind === TokenKind.INDENT) {
        this.consume();
        this.consumeLeadingComments(node);
        const blockValue = this.parseBlockValue();
        if (blockValue)
          node.appendChild(blockValue, "block_value");
        this.consumeTrailingComments(node);
        this.recoverToBlockEnd(node);
        if (this.peek().kind === TokenKind.DEDENT)
          this.consume();
      }
    }
    if (this.peek().kind === TokenKind.NEWLINE) {
      this.consume();
    }
    this.finishNode(node, startTok);
    return node;
  }
  /** Consume `->` and its indented procedure body (shared by normal and missing-colon paths). */
  parseArrowBody(node) {
    this.addAnonymousChild(node, this.consume());
    if (this.peek().kind === TokenKind.COMMENT) {
      node.appendChild(this.consumeNamed("comment"));
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      this.consumeLeadingComments(node);
      const proc = this.parseProcedure();
      if (proc)
        node.appendChild(proc, "block_value");
      this.consumeTrailingComments(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    } else {
      const emptyProc = this.startNode("procedure");
      emptyProc.appendChild(this.makeEmptyError());
      this.finishNode(emptyProc, this.peek());
      node.appendChild(emptyProc, "block_value");
    }
  }
  tryParseColinearValue() {
    const tok = this.peek();
    if (tok.kind === TokenKind.PIPE) {
      return { value: this.parseTemplateAsColinear() };
    }
    if (tok.kind === TokenKind.ID && (tok.text === "mutable" || tok.text === "linked")) {
      return { value: this.parseVariableDeclaration() };
    }
    const expr = parseExpression(this, 0);
    if (!expr)
      return null;
    if ((expr.type === "number" || expr.type === "id" && /^[0-9]/.test(expr.text)) && this.peek().kind === TokenKind.ID && this.peek().start.row === expr.startRow) {
      const errNode = makeErrorNode(this.source, [wrapExpression(this, expr)], expr.startOffset, expr.endOffset, expr.startPosition, expr.endPosition);
      const realValue = this.tryParseColinearValue();
      if (realValue) {
        return { value: realValue.value, errorPrefix: errNode };
      }
    }
    const withToList = this.tryParseWithToStatementList();
    if (withToList) {
      const ewt2 = this.startNodeAt("expression_with_to", expr);
      ewt2.appendChild(wrapExpression(this, expr), "expression");
      ewt2.appendChild(withToList, "with_to_statement_list");
      ewt2.finalize();
      return { value: ewt2 };
    }
    if (this.peek().kind === TokenKind.EQ) {
      const assign = this.startNodeAt("assignment_expression", expr);
      assign.appendChild(wrapExpression(this, expr), "left");
      this.addAnonymousChild(assign, this.consume());
      const right = parseExpression(this, 0);
      if (right)
        assign.appendChild(wrapExpression(this, right), "right");
      assign.finalize();
      return { value: assign };
    }
    const ewt = this.startNodeAt("expression_with_to", expr);
    ewt.appendChild(wrapExpression(this, expr), "expression");
    return { value: ewt };
  }
  parseVariableDeclaration() {
    const startTok = this.peek();
    const node = this.startNode("variable_declaration");
    this.addAnonymousChild(node, this.consume());
    if (this.peek().kind === TokenKind.ID && (this.peek().text === "mutable" || this.peek().text === "linked")) {
      const errExpr = parseExpression(this, 0);
      if (errExpr) {
        const wrapped = wrapExpression(this, errExpr);
        const errNode = makeErrorNode(this.source, [wrapped], wrapped.startOffset, wrapped.endOffset, wrapped.startPosition, wrapped.endPosition);
        node.appendChild(errNode);
      }
    }
    const typeExpr = parseExpression(this, 0);
    if (typeExpr)
      node.appendChild(wrapExpression(this, typeExpr), "type");
    if (this.peek().kind === TokenKind.EQ) {
      this.addAnonymousChild(node, this.consume());
      const defaultExpr = parseExpression(this, 0);
      if (defaultExpr)
        node.appendChild(wrapExpression(this, defaultExpr), "default");
    }
    this.finishNode(node, startTok);
    return node;
  }
  // --- Block value ---
  parseBlockValue() {
    const tok = this.peek();
    if (tok.kind === TokenKind.DASH_SPACE) {
      return this.parseSequence();
    }
    if (tok.kind === TokenKind.ID && tok.text === "empty") {
      const emptyNode = this.startNode("empty_keyword");
      this.addAnonymousChild(emptyNode, this.consume());
      this.finishNode(emptyNode, tok);
      return emptyNode;
    }
    if (this.isMappingStart()) {
      return this.parseMapping();
    }
    return this.parseAtomBlockValue();
  }
  isStatementStart() {
    const tok = this.peek();
    if (tok.kind !== TokenKind.ID)
      return false;
    switch (tok.text) {
      case "if":
      case "run":
      case "set":
      case "transition":
        return true;
      case "with":
        return this.peekAt(1).kind !== TokenKind.COLON;
      case "available":
        return this.peekAt(1).kind === TokenKind.ID && this.peekAt(1).text === "when";
      default:
        return false;
    }
  }
  parseAtomBlockValue() {
    const expr = parseExpression(this, 0);
    if (!expr)
      return null;
    if (ATOM_TYPES.has(expr.type)) {
      const atom = new CSTNode("atom", this.source, expr.startOffset, expr.endOffset, expr.startPosition, expr.endPosition);
      atom.appendChild(expr);
      return atom;
    }
    return expr;
  }
  // --- Sequence ---
  parseSequence() {
    const startTok = this.peek();
    const node = this.startNode("sequence");
    while (this.peek().kind === TokenKind.DASH_SPACE) {
      const elem = this.parseSequenceElement();
      if (elem)
        node.appendChild(elem);
      this.skipNewlines();
    }
    while (!this.isAtEnd() && this.peek().kind !== TokenKind.DEDENT && this.peek().kind !== TokenKind.DASH_SPACE) {
      this.skipNewlines();
      if (this.isAtEnd() || this.peek().kind === TokenKind.DEDENT)
        break;
      const item = this.parseMappingItem();
      if (item) {
        const errNode = makeErrorNode(this.source, [item], item.startOffset, item.endOffset, item.startPosition, item.endPosition);
        node.appendChild(errNode);
      } else {
        const err = this.synchronize();
        if (err) {
          node.appendChild(err);
        } else {
          this.consume();
        }
      }
    }
    this.finishNode(node, startTok);
    return node;
  }
  parseSequenceElement() {
    const startTok = this.peek();
    const node = this.startNode("sequence_element");
    this.addAnonymousChild(node, this.consume());
    if (this.isColinearMappingElement()) {
      const mappingElem = this.parseColinearMappingElement();
      if (mappingElem)
        node.appendChild(mappingElem, "colinear_mapping_element");
      if (this.peek().kind === TokenKind.NEWLINE)
        this.consume();
      if (this.peek().kind === TokenKind.INDENT) {
        this.consume();
        const blockValue = this.parseMapping();
        if (blockValue)
          node.appendChild(blockValue, "block_value");
        if (this.peek().kind === TokenKind.DEDENT)
          this.consume();
      }
    } else if (this.peek().kind === TokenKind.NEWLINE || this.peek().kind === TokenKind.EOF || this.peek().kind === TokenKind.INDENT) {
      if (this.peek().kind === TokenKind.NEWLINE)
        this.consume();
      if (this.peek().kind === TokenKind.INDENT) {
        this.consume();
        const blockValue = this.parseMapping();
        if (blockValue)
          node.appendChild(blockValue, "block_value");
        if (this.peek().kind === TokenKind.DEDENT)
          this.consume();
      }
    } else {
      const colinear = this.tryParseColinearValue();
      if (colinear) {
        if (colinear.errorPrefix)
          node.appendChild(colinear.errorPrefix);
        node.appendChild(colinear.value, "colinear_value");
      }
      if (this.peek().kind === TokenKind.COMMENT) {
        node.appendChild(this.consumeNamed("comment"));
      }
      if (this.peek().kind === TokenKind.NEWLINE)
        this.consume();
    }
    this.finishNode(node, startTok);
    return node;
  }
  isColinearMappingElement() {
    if (!isKeyStart(this))
      return false;
    const tok = this.peek();
    const lookahead = 1;
    if (this.peekAt(lookahead).kind === TokenKind.ID && this.peekAt(lookahead).start.row === tok.start.row) {
      const afterSecond = this.peekAt(lookahead + 1);
      if (afterSecond.kind === TokenKind.COLON && afterSecond.start.row === tok.start.row) {
        return true;
      }
    }
    const next = this.peekAt(lookahead);
    return next.kind === TokenKind.COLON && next.start.row === tok.start.row;
  }
  parseColinearMappingElement() {
    const startTok = this.peek();
    const node = this.startNode("mapping_element");
    const key = parseKey(this);
    if (key)
      node.appendChild(key, "key");
    if (this.peek().kind === TokenKind.COLON) {
      this.addAnonymousChild(node, this.consume());
    }
    const colinear = this.tryParseColinearValue();
    if (colinear) {
      if (colinear.errorPrefix)
        node.appendChild(colinear.errorPrefix);
      node.appendChild(colinear.value, "colinear_value");
    }
    this.finishNode(node, startTok);
    return node;
  }
  // --- Statements ---
  parseProcedure() {
    const startTok = this.peek();
    const node = this.startNode("procedure");
    while (!this.isAtEnd() && this.peek().kind !== TokenKind.DEDENT) {
      this.skipNewlines();
      if (this.isAtEnd() || this.peek().kind === TokenKind.DEDENT)
        break;
      if (this.peek().kind === TokenKind.COMMENT && this.isTrailingCommentOnly()) {
        break;
      }
      const stmt = this.parseStatement();
      if (stmt) {
        node.appendChild(stmt);
      } else {
        const err = this.synchronize();
        if (err) {
          node.appendChild(err);
        } else if (!this.isAtEnd() && this.peek().kind !== TokenKind.DEDENT) {
          this.consume();
        }
      }
    }
    if (node.namedChildren.length === 0) {
      node.appendChild(this.makeEmptyError());
    }
    this.finishNode(node, startTok);
    return node;
  }
  parseStatement() {
    const tok = this.peek();
    if (tok.kind === TokenKind.ID) {
      switch (tok.text) {
        case "if":
          return this.parseIfStatement();
        case "run":
          return this.parseRunStatement();
        case "set":
          return this.parseSetStatement();
        case "transition":
          return this.parseTransitionStatement();
        case "with":
          return this.parseWithStatement();
        case "available": {
          if (this.peekAt(1).kind === TokenKind.ID && this.peekAt(1).text === "when") {
            return this.parseAvailableWhenStatement();
          }
          break;
        }
        case "else":
        case "elif":
        case "for":
          return this.parseOrphanBlock();
      }
    }
    if (tok.kind === TokenKind.PIPE) {
      return this.parseTemplate();
    }
    if (tok.kind === TokenKind.COMMENT) {
      const comment2 = this.consumeNamed("comment");
      if (this.peek().kind === TokenKind.NEWLINE)
        this.consume();
      return comment2;
    }
    const expr = parseExpression(this, 0);
    if (expr) {
      const wrapped = wrapExpression(this, expr);
      if (this.peek().kind === TokenKind.NEWLINE)
        this.consume();
      return wrapped;
    }
    return null;
  }
  parseIfStatement() {
    const startTok = this.peek();
    const node = this.startNode("if_statement");
    this.addAnonymousChild(node, this.consume());
    let condition = parseExpression(this, 0);
    if (condition && this.peek().kind === TokenKind.EQ) {
      const eqTok = this.consume();
      const right = parseExpression(this, 5);
      if (right) {
        const cmp = this.startNodeAt("comparison_expression", condition);
        cmp.appendChild(wrapExpression(this, condition));
        const eqChild = new CSTNode("=", this.source, eqTok.startOffset, eqTok.startOffset + 1, eqTok.start, eqTok.end, false);
        const eqErr = makeErrorNode(this.source, [eqChild], eqTok.startOffset, eqTok.startOffset + 1, eqTok.start, eqTok.end);
        cmp.appendChild(eqErr);
        cmp.appendChild(wrapExpression(this, right));
        cmp.finalize();
        condition = cmp;
      }
    }
    if (condition)
      node.appendChild(wrapExpression(this, condition), "condition");
    if (condition && this.peek().kind !== TokenKind.COLON && !this.isAtSyncPoint() && this.peek().kind !== TokenKind.INDENT) {
      const condRow = startTok.start.row;
      const err = this.synchronizeRowUntilColon(condRow);
      if (err)
        node.appendChild(err);
    }
    if (this.peek().kind === TokenKind.COLON) {
      this.addAnonymousChild(node, this.consume());
    } else if (this.peek().kind === TokenKind.INDENT) {
      node.appendChild(this.makeEmptyError());
    } else {
      node.appendChild(this.makeEmptyError());
    }
    if (this.peek().kind === TokenKind.COMMENT) {
      node.appendChild(this.consumeNamed("comment"));
    }
    {
      const colonRow = startTok.start.row;
      const inlineErr = this.synchronizeRow(colonRow);
      if (inlineErr)
        node.appendChild(inlineErr);
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      const proc = this.parseProcedure();
      if (proc)
        node.appendChild(proc, "consequence");
      this.consumeTrailingComments(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    } else if (this.peek().kind === TokenKind.NEWLINE || this.isAtSyncPoint()) {
      node.appendChild(this.makeEmptyError());
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    while (this.peek().kind === TokenKind.ID && this.peek().text === "elif") {
      const elif = this.parseElifClause();
      if (elif)
        node.appendChild(elif, "alternative");
    }
    if (this.peek().kind === TokenKind.ID && this.peek().text === "else") {
      const elseClause = this.parseElseClause();
      if (elseClause)
        node.appendChild(elseClause, "alternative");
    }
    this.finishNode(node, startTok);
    return node;
  }
  parseElifClause() {
    const startTok = this.peek();
    const node = this.startNode("elif_clause");
    this.addAnonymousChild(node, this.consume());
    const condition = parseExpression(this, 0);
    if (condition)
      node.appendChild(wrapExpression(this, condition), "condition");
    if (condition && this.peek().kind !== TokenKind.COLON && !this.isAtSyncPoint() && this.peek().kind !== TokenKind.INDENT) {
      const condRow = startTok.start.row;
      const err = this.synchronizeRowUntilColon(condRow);
      if (err)
        node.appendChild(err);
    }
    if (this.peek().kind === TokenKind.COLON) {
      this.addAnonymousChild(node, this.consume());
    }
    if (this.peek().kind === TokenKind.COMMENT) {
      node.appendChild(this.consumeNamed("comment"));
    }
    {
      const colonRow = startTok.start.row;
      const inlineErr = this.synchronizeRow(colonRow);
      if (inlineErr)
        node.appendChild(inlineErr);
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      const proc = this.parseProcedure();
      if (proc)
        node.appendChild(proc, "consequence");
      this.consumeTrailingComments(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseElseClause() {
    const startTok = this.peek();
    const node = this.startNode("else_clause");
    this.addAnonymousChild(node, this.consume());
    if (this.peek().kind === TokenKind.COLON) {
      this.addAnonymousChild(node, this.consume());
    }
    if (this.peek().kind === TokenKind.COMMENT) {
      node.appendChild(this.consumeNamed("comment"));
    }
    {
      const colonRow = startTok.start.row;
      const inlineErr = this.synchronizeRow(colonRow);
      if (inlineErr)
        node.appendChild(inlineErr);
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      const proc = this.parseProcedure();
      if (proc)
        node.appendChild(proc, "consequence");
      this.consumeTrailingComments(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseRunStatement() {
    const startTok = this.peek();
    const node = this.startNode("run_statement");
    this.addAnonymousChild(node, this.consume());
    if (!this.isAtSyncPoint()) {
      const target = parseExpression(this, 0);
      if (target) {
        node.appendChild(wrapExpression(this, target), "target");
      } else {
        this.addMissingTarget(node);
      }
    } else {
      this.addMissingTarget(node);
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      this.consumeLeadingComments(node);
      const proc = this.parseProcedure();
      if (proc) {
        const hasWithError = proc.namedChildren.some((c) => c.isError && c.children.some((cc) => cc.type === "with"));
        if (hasWithError) {
          for (const child of proc.namedChildren) {
            node.appendChild(child);
          }
        } else {
          node.appendChild(proc, "block_value");
        }
      }
      this.consumeTrailingComments(node);
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseSetStatement() {
    const startTok = this.peek();
    const node = this.startNode("set_statement");
    this.addAnonymousChild(node, this.consume());
    const target = parseExpression(this, 5);
    if (this.peek().kind === TokenKind.EQEQ) {
      const eqTok = this.consume();
      const rhs = parseExpression(this, 0);
      if (target && rhs) {
        const cmp = this.startNodeAt("comparison_expression", wrapExpression(this, target));
        cmp.appendChild(wrapExpression(this, target));
        cmp.appendChild(new CSTNode(eqTok.text, this.source, eqTok.startOffset, eqTok.startOffset + 2, eqTok.start, eqTok.end, false));
        cmp.appendChild(wrapExpression(this, rhs));
        cmp.finalize();
        const wrappedCmp = wrapExpression(this, cmp);
        if (this.peek().kind === TokenKind.NEWLINE)
          this.consume();
        return makeErrorNode(this.source, [wrappedCmp], wrappedCmp.startOffset, wrappedCmp.endOffset, wrappedCmp.startPosition, wrappedCmp.endPosition);
      }
    }
    if (target)
      node.appendChild(wrapExpression(this, target), "target");
    if (this.peek().kind === TokenKind.EQ) {
      this.addAnonymousChild(node, this.consume());
      const value = parseExpression(this, 0);
      if (value)
        node.appendChild(wrapExpression(this, value), "value");
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseTransitionStatement() {
    const startTok = this.peek();
    const node = this.startNode("transition_statement");
    this.addAnonymousChild(node, this.consume());
    const withToList = this.tryParseWithToStatementList();
    if (withToList) {
      node.appendChild(withToList, "with_to_statement_list");
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseWithStatement() {
    const startTok = this.peek();
    if (this.peekAt(1).kind !== TokenKind.ID && this.peekAt(1).kind !== TokenKind.STRING) {
      const withTok = this.consume();
      const kwOffset = this.currentOffset();
      const withChild = new CSTNode("with", this.source, kwOffset, kwOffset + 4, withTok.start, withTok.end, false);
      return makeErrorNode(this.source, [withChild], kwOffset, kwOffset + 4, withTok.start, withTok.end);
    }
    const node = this.startNode("with_statement");
    this.addAnonymousChild(node, this.consume());
    this.parseWithParams(node);
    if (this.peek().kind === TokenKind.COMMENT) {
      node.appendChild(this.consumeNamed("comment"));
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  parseWithParams(node) {
    while (!this.isAtSyncPoint()) {
      if (this.peek().kind === TokenKind.ID || this.peek().kind === TokenKind.STRING) {
        if (this.peek().kind === TokenKind.STRING) {
          node.appendChild(parseString(this), "param");
        } else {
          node.appendChild(this.consumeNamed("id"), "param");
        }
      } else {
        const err = this.synchronize();
        if (err)
          node.appendChild(err);
        return;
      }
      if (this.peek().kind === TokenKind.EQ) {
        this.addAnonymousChild(node, this.consume());
      } else {
        node.appendChild(this.makeMissing("="));
      }
      const value = parseExpression(this, 0);
      if (value)
        node.appendChild(wrapExpression(this, value), "value");
      if (this.peek().kind === TokenKind.COMMA) {
        this.addAnonymousChild(node, this.consume());
      } else {
        break;
      }
    }
  }
  parseAvailableWhenStatement() {
    const startTok = this.peek();
    const node = this.startNode("available_when_statement");
    this.addAnonymousChild(node, this.consume());
    this.addAnonymousChild(node, this.consume());
    const condition = parseExpression(this, 0);
    if (condition)
      node.appendChild(wrapExpression(this, condition), "condition");
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    this.finishNode(node, startTok);
    return node;
  }
  // --- Template ---
  /**
   * Parse a template starting with `|`.
   * Consumes tokens from the lexer stream, treating everything as template content
   * except `{!...}` breaks which are parsed as template expressions.
   */
  parseTemplate() {
    const startTok = this.peek();
    const node = this.startNode("template");
    const pipeOffset = this.peekOffset();
    let lineStart = pipeOffset;
    while (lineStart > 0 && this.source.charCodeAt(lineStart - 1) !== 10) {
      lineStart--;
    }
    let templateOuterIndent = 0;
    for (let i = lineStart; i < pipeOffset; i++) {
      const ch = this.source.charCodeAt(i);
      if (ch === 32)
        templateOuterIndent += 1;
      else if (ch === 9)
        templateOuterIndent += 3;
      else
        break;
    }
    const pipeToken = this.consume();
    this.addAnonymousChild(node, pipeToken);
    const hasContentOnSameLine = !this.isAtEnd() && this.peek().kind !== TokenKind.NEWLINE && this.peek().kind !== TokenKind.INDENT && this.peek().kind !== TokenKind.DEDENT && this.peek().kind !== TokenKind.EOF;
    if (hasContentOnSameLine) {
      const afterPipeOffset = pipeToken.startOffset + 1;
      this.gatherTemplateContentLine(node, afterPipeOffset);
    }
    if (this.peek().kind === TokenKind.NEWLINE) {
      this.consume();
    }
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      let indentDepth = 1;
      while (!this.isAtEnd()) {
        const tok = this.peek();
        if (tok.kind === TokenKind.DEDENT) {
          indentDepth--;
          this.consume();
          if (indentDepth <= 0) {
            if (this.templateContinues(templateOuterIndent)) {
              indentDepth = 0;
              continue;
            }
            break;
          }
        } else if (tok.kind === TokenKind.INDENT) {
          indentDepth++;
          this.consume();
        } else if (tok.kind === TokenKind.NEWLINE) {
          this.consume();
        } else {
          if (indentDepth <= 0 && !this.templateContinues(templateOuterIndent)) {
            break;
          }
          const lastChild = node.children.length > 0 ? node.children[node.children.length - 1] : null;
          const gapOffset = lastChild && lastChild.endOffset < this.peekOffset() ? lastChild.endOffset : void 0;
          const gapPos = gapOffset !== void 0 ? lastChild.endPosition : void 0;
          this.gatherTemplateContentLine(node, gapOffset, gapPos);
        }
      }
    }
    this.mergeTemplateContent(node);
    this.finishNode(node, startTok);
    return node;
  }
  /**
   * Check if the template continues with under-indented content.
   * After a DEDENT brings us to depth 0, if the next meaningful token
   * is content (not EOF, not DEDENT, not a mapping key pattern), the
   * template has continuation lines.
   */
  templateContinues(templateOuterIndent) {
    let i = 0;
    while (this.peekAt(i).kind === TokenKind.NEWLINE)
      i++;
    const tok = this.peekAt(i);
    if (tok.kind === TokenKind.EOF || tok.kind === TokenKind.DEDENT)
      return false;
    if (tok.start.column > templateOuterIndent)
      return true;
    if (tok.kind === TokenKind.PIPE)
      return false;
    if (tok.kind === TokenKind.ID || tok.kind === TokenKind.STRING) {
      const after = this.peekAt(i + 1);
      if (after.kind === TokenKind.COLON)
        return false;
      if (after.kind === TokenKind.ID) {
        const afterAfter = this.peekAt(i + 2);
        if (afterAfter.kind === TokenKind.COLON)
          return false;
      }
    }
    if (tok.kind === TokenKind.ID) {
      switch (tok.text) {
        case "if":
        case "elif":
        case "else":
        case "run":
        case "set":
        case "transition":
          return false;
        case "with":
          if (this.peekAt(i + 1).kind !== TokenKind.COLON)
            return false;
          break;
        case "available":
          if (this.peekAt(i + 1).kind === TokenKind.ID && this.peekAt(i + 1).text === "when")
            return false;
          break;
      }
    }
    if (tok.kind === TokenKind.DASH_SPACE)
      return false;
    if (tok.kind === TokenKind.COMMENT)
      return false;
    return true;
  }
  parseTemplateAsColinear() {
    return this.parseTemplate();
  }
  /** Merge consecutive template_content children into single nodes. */
  mergeTemplateContent(template) {
    const merged = [];
    let i = 0;
    while (i < template.children.length) {
      const child = template.children[i];
      if (child.type === "template_content") {
        let end = i + 1;
        while (end < template.children.length && template.children[end].type === "template_content") {
          end++;
        }
        if (end > i + 1) {
          const first = template.children[i];
          const last = template.children[end - 1];
          const mergedNode = new CSTNode("template_content", this.source, first.startOffset, last.endOffset, first.startPosition, last.endPosition);
          mergedNode.parent = template;
          merged.push(mergedNode);
          i = end;
        } else {
          merged.push(child);
          i++;
        }
      } else {
        merged.push(child);
        i++;
      }
    }
    template.children = merged;
  }
  /**
   * Gather tokens on the current line as template content.
   * Recognizes {! ... } as template expression breaks.
   * Everything else (including inter-token whitespace) becomes template_content.
   * Uses source-level offsets so whitespace between tokens is preserved.
   */
  gatherTemplateContentLine(parent, initialOffset, initialPos) {
    let contentStartOffset = initialOffset ?? this.peekOffset();
    let contentStartPos = initialPos ?? this.peek().start;
    let lastConsumedEndOffset = contentStartOffset;
    let lastConsumedEndPos = contentStartPos;
    while (!this.isAtEnd()) {
      const tok = this.peek();
      if (tok.kind === TokenKind.NEWLINE || tok.kind === TokenKind.DEDENT || tok.kind === TokenKind.INDENT || tok.kind === TokenKind.EOF) {
        break;
      }
      if (tok.kind === TokenKind.TEMPLATE_EXPR_START) {
        const exprOffset = this.peekOffset();
        if (exprOffset > contentStartOffset) {
          parent.appendChild(new CSTNode("template_content", this.source, contentStartOffset, exprOffset, contentStartPos, tok.start));
        }
        const exprNode = this.parseTemplateExpression();
        parent.appendChild(exprNode);
        contentStartOffset = exprNode.endOffset;
        contentStartPos = exprNode.endPosition;
        lastConsumedEndOffset = exprNode.endOffset;
        lastConsumedEndPos = exprNode.endPosition;
        continue;
      }
      const tokOffset = this.peekOffset();
      lastConsumedEndOffset = tokOffset + tok.text.length;
      lastConsumedEndPos = tok.end;
      this.consume();
    }
    if (lastConsumedEndOffset > contentStartOffset) {
      parent.appendChild(new CSTNode("template_content", this.source, contentStartOffset, lastConsumedEndOffset, contentStartPos, lastConsumedEndPos));
    }
  }
  parseTemplateExpression() {
    const startTok = this.peek();
    const node = this.startNode("template_expression");
    this.addAnonymousChild(node, this.consume());
    const expr = parseExpression(this, 0);
    if (expr) {
      node.appendChild(wrapExpression(this, expr), "expression");
    } else {
      node.appendChild(this.makeEmptyError());
    }
    if (this.peek().kind !== TokenKind.RBRACE && !this.isAtSyncPoint()) {
      const err = this.synchronize();
      if (err)
        node.appendChild(err);
    }
    if (this.peek().kind === TokenKind.RBRACE) {
      this.addAnonymousChild(node, this.consume());
    } else {
      node.appendChild(this.makeMissing("}"));
    }
    this.finishNode(node, startTok);
    return node;
  }
  // --- With/To statement list ---
  tryParseWithToStatementList() {
    const tok = this.peek();
    if (tok.kind !== TokenKind.ID)
      return null;
    if (tok.text !== "with" && tok.text !== "to")
      return null;
    const startTok = tok;
    const node = this.startNode("with_to_statement_list");
    while (!this.isAtSyncPoint()) {
      if (this.peek().kind === TokenKind.ID && this.peek().text === "with") {
        node.appendChild(this.parseInlineWithStatement());
      } else if (this.peek().kind === TokenKind.ID && this.peek().text === "to") {
        node.appendChild(this.parseToStatement());
      } else {
        break;
      }
      if (this.peek().kind === TokenKind.COMMA) {
        this.addAnonymousChild(node, this.consume());
      } else {
        break;
      }
    }
    if (node.children.length === 0)
      return null;
    this.finishNode(node, startTok);
    return node;
  }
  parseInlineWithStatement() {
    const startTok = this.peek();
    const node = this.startNode("with_statement");
    this.addAnonymousChild(node, this.consume());
    this.parseWithParams(node);
    this.finishNode(node, startTok);
    return node;
  }
  parseToStatement() {
    const startTok = this.peek();
    const node = this.startNode("to_statement");
    this.addAnonymousChild(node, this.consume());
    const target = parseExpression(this, 0);
    if (target) {
      node.appendChild(wrapExpression(this, target), "target");
    } else {
      node.appendChild(this.makeEmptyError());
    }
    this.finishNode(node, startTok);
    return node;
  }
  // --- Error recovery ---
  /**
   * Synchronize: skip tokens until NEWLINE, DEDENT, or EOF.
   * Returns an ERROR node wrapping the skipped content.
   */
  /** Create an empty ERROR node at the current position. */
  makeEmptyError() {
    const offset = this.peekOffset();
    const pos = this.peek().start;
    return new CSTNode("ERROR", this.source, offset, offset, pos, pos, true, true);
  }
  /** Insert a missing target: `target: (expression (atom (ERROR)))` */
  addMissingTarget(node) {
    const errAtom = this.makeEmptyError();
    const atom = new CSTNode("atom", this.source, errAtom.startOffset, errAtom.endOffset, errAtom.startPosition, errAtom.endPosition);
    atom.appendChild(errAtom);
    const expr = new CSTNode("expression", this.source, atom.startOffset, atom.endOffset, atom.startPosition, atom.endPosition);
    expr.appendChild(atom);
    node.appendChild(expr, "target");
  }
  /** Create a MISSING node — an expected token/node that wasn't found in source. */
  makeMissing(type) {
    const offset = this.peekOffset();
    const pos = this.peek().start;
    return new CSTNode(type, this.source, offset, offset, pos, pos, true, false, true);
  }
  /**
   * Parse a standalone else/elif/for (without a preceding if, or unsupported).
   * Wraps the entire block in an ERROR node, preserving parsed statements inside.
   */
  parseOrphanBlock() {
    const startOffset = this.peekOffset();
    const startPos = this.peek().start;
    const children = [];
    const keywordTok = this.consume();
    const kwOffset = this.currentOffset();
    children.push(new CSTNode(keywordTok.text, this.source, kwOffset, kwOffset + keywordTok.text.length, keywordTok.start, keywordTok.end, false));
    while (!this.isAtSyncPoint() && !this.isAtEnd() && this.peek().kind !== TokenKind.COLON) {
      this.consume();
    }
    if (this.peek().kind === TokenKind.COLON)
      this.consume();
    if (this.peek().kind === TokenKind.INDENT) {
      this.consume();
      const proc = this.parseProcedure();
      if (proc) {
        for (const child of proc.namedChildren) {
          children.push(child);
        }
      }
      while (this.peek().kind === TokenKind.COMMENT || this.peek().kind === TokenKind.NEWLINE) {
        if (this.peek().kind === TokenKind.COMMENT) {
          children.push(this.consumeNamed("comment"));
        } else {
          this.consume();
        }
      }
      if (this.peek().kind === TokenKind.DEDENT)
        this.consume();
    }
    if (this.peek().kind === TokenKind.NEWLINE)
      this.consume();
    const endOffset = children.length > 0 ? children[children.length - 1].endOffset : this.peekOffset();
    const endPos = children.length > 0 ? children[children.length - 1].endPosition : this.peek().start;
    return makeErrorNode(this.source, children, startOffset, endOffset, startPos, endPos);
  }
  /**
   * Consume any leftover tokens in an indented block (before DEDENT) as ERROR
   * nodes. Prevents cascading failures when parseBlockValue() only partially
   * consumes the block content (e.g., unquoted multi-word text).
   */
  recoverToBlockEnd(parent) {
    while (!this.isAtEnd() && this.peek().kind !== TokenKind.DEDENT && this.peek().kind !== TokenKind.EOF) {
      if (this.peek().kind === TokenKind.NEWLINE) {
        this.consume();
        continue;
      }
      if (this.peek().kind === TokenKind.INDENT) {
        this.consume();
        this.recoverToBlockEnd(parent);
        if (this.peek().kind === TokenKind.DEDENT)
          this.consume();
        continue;
      }
      const err = this.synchronize();
      if (err) {
        parent.appendChild(err);
      } else {
        break;
      }
    }
  }
  /**
   * Like synchronize(), but stops at row boundaries and INDENT tokens.
   * Used after colinear values to absorb broken same-line content (e.g.,
   * `go: @utils.transition tz @topic.A2` — captures `tz @topic.A2`)
   * without consuming indented content on the next line.
   */
  /**
   * Like synchronizeRow(), but also stops at COLON tokens.
   * Used after if/elif conditions to absorb extra tokens (e.g.,
   * `if abc == 1 xxx:` — captures `xxx`) without eating the colon
   * that delimits the condition from the consequence block.
   */
  synchronizeRowUntilColon(row) {
    if (this.isAtSyncPoint() || this.isAtEnd())
      return null;
    if (this.peek().kind === TokenKind.INDENT)
      return null;
    if (this.peek().kind === TokenKind.COLON)
      return null;
    if (this.peek().start.row !== row)
      return null;
    const startOffset = this.peekOffset();
    const startPos = this.peek().start;
    const children = [];
    while (!this.isAtSyncPoint() && !this.isAtEnd() && this.peek().kind !== TokenKind.INDENT && this.peek().kind !== TokenKind.COLON && this.peek().start.row === row) {
      const tok = this.consume();
      const offset = this.currentOffset();
      let nodeType = tok.text;
      let isNamed = false;
      switch (tok.kind) {
        case TokenKind.ID:
          nodeType = "id";
          isNamed = true;
          break;
        case TokenKind.NUMBER:
          nodeType = "number";
          isNamed = true;
          break;
        case TokenKind.STRING:
          nodeType = "string";
          isNamed = true;
          break;
        case TokenKind.COMMENT:
          nodeType = "comment";
          isNamed = true;
          break;
      }
      children.push(new CSTNode(nodeType, this.source, offset, offset + tok.text.length, tok.start, tok.end, isNamed));
    }
    if (children.length === 0)
      return null;
    const last = children[children.length - 1];
    return makeErrorNode(this.source, children, startOffset, last.endOffset, startPos, last.endPosition);
  }
  synchronizeRow(row) {
    if (this.isAtSyncPoint() || this.isAtEnd())
      return null;
    if (this.peek().kind === TokenKind.INDENT)
      return null;
    if (this.peek().start.row !== row)
      return null;
    const startOffset = this.peekOffset();
    const startPos = this.peek().start;
    const children = [];
    while (!this.isAtSyncPoint() && !this.isAtEnd() && this.peek().kind !== TokenKind.INDENT && this.peek().start.row === row) {
      const tok = this.consume();
      const offset = this.currentOffset();
      let nodeType = tok.text;
      let isNamed = false;
      switch (tok.kind) {
        case TokenKind.ID:
          nodeType = "id";
          isNamed = true;
          break;
        case TokenKind.NUMBER:
          nodeType = "number";
          isNamed = true;
          break;
        case TokenKind.STRING:
          nodeType = "string";
          isNamed = true;
          break;
        case TokenKind.COMMENT:
          nodeType = "comment";
          isNamed = true;
          break;
      }
      children.push(new CSTNode(nodeType, this.source, offset, offset + tok.text.length, tok.start, tok.end, isNamed));
    }
    if (children.length === 0)
      return null;
    const last = children[children.length - 1];
    return makeErrorNode(this.source, children, startOffset, last.endOffset, startPos, last.endPosition);
  }
  synchronize() {
    if (this.isAtSyncPoint() || this.isAtEnd())
      return null;
    const startOffset = this.peekOffset();
    const startPos = this.peek().start;
    const children = [];
    while (!this.isAtSyncPoint() && !this.isAtEnd()) {
      const tok = this.consume();
      const offset = this.currentOffset();
      let nodeType = tok.text;
      let isNamed = false;
      switch (tok.kind) {
        case TokenKind.ID:
          nodeType = "id";
          isNamed = true;
          break;
        case TokenKind.NUMBER:
          nodeType = "number";
          isNamed = true;
          break;
        case TokenKind.STRING:
          nodeType = "string";
          isNamed = true;
          break;
        case TokenKind.COMMENT:
          nodeType = "comment";
          isNamed = true;
          break;
      }
      children.push(new CSTNode(nodeType, this.source, offset, offset + tok.text.length, tok.start, tok.end, isNamed));
    }
    if (children.length === 0)
      return null;
    const last = children[children.length - 1];
    return makeErrorNode(this.source, children, startOffset, last.endOffset, startPos, last.endPosition);
  }
  // --- Utility ---
  skipNewlines() {
    while (this.peek().kind === TokenKind.NEWLINE) {
      this.consume();
    }
  }
  /** Consume comment tokens (and intervening newlines) and attach to parent node. */
  consumeLeadingComments(parent) {
    while (true) {
      if (this.peek().kind === TokenKind.COMMENT) {
        parent.appendChild(this.consumeNamed("comment"));
        if (this.peek().kind === TokenKind.NEWLINE)
          this.consume();
      } else if (this.peek().kind === TokenKind.NEWLINE) {
        this.consume();
      } else {
        break;
      }
    }
  }
  /** Consume trailing comments (on next lines before DEDENT) and attach to parent node. */
  consumeTrailingComments(parent) {
    while (this.peek().kind === TokenKind.NEWLINE || this.peek().kind === TokenKind.COMMENT) {
      if (this.peek().kind === TokenKind.COMMENT) {
        parent.appendChild(this.consumeNamed("comment"));
      }
      if (this.peek().kind === TokenKind.NEWLINE) {
        this.consume();
      }
    }
  }
  isAtEnd() {
    return this.peek().kind === TokenKind.EOF;
  }
  /** Check if from current position, there are only comments, newlines, and then EOF/DEDENT. */
  isTrailingCommentOnly() {
    let i = 0;
    while (i < 50) {
      const tok = this.peekAt(i);
      if (tok.kind === TokenKind.EOF || tok.kind === TokenKind.DEDENT)
        return true;
      if (tok.kind === TokenKind.COMMENT || tok.kind === TokenKind.NEWLINE) {
        i++;
        continue;
      }
      return false;
    }
    return false;
  }
  eofToken() {
    if (!this._eof) {
      const lastToken = this.tokens[this.tokens.length - 1];
      const pos = lastToken ? lastToken.end : { row: 0, column: 0 };
      this._eof = {
        kind: TokenKind.EOF,
        text: "",
        start: pos,
        end: pos,
        startOffset: this.source.length
      };
    }
    return this._eof;
  }
};

// ../parser-javascript/dist/index.js
function parse(source) {
  const parser = new Parser(source);
  return { rootNode: parser.parse() };
}
function parseAndHighlight(source) {
  const { rootNode } = parse(source);
  return highlight(rootNode);
}

// ../parser/dist/ts-backend.js
function createTsBackend() {
  return {
    parse,
    parseAndHighlight
  };
}

// ../parser/dist/api.js
function createApi(backend) {
  function parse3(source) {
    return backend.parse(source);
  }
  function parseAndHighlight3(source) {
    return backend.parseAndHighlight(source);
  }
  function getParser2() {
    return { parse: (source) => backend.parse(source) };
  }
  function executeQuery2(source, querySource) {
    if (querySource && backend.executeQuery) {
      return backend.executeQuery(source, querySource);
    }
    return backend.parseAndHighlight(source);
  }
  return { parse: parse3, parseAndHighlight: parseAndHighlight3, getParser: getParser2, executeQuery: executeQuery2 };
}

// ../parser/dist/index.js
var { parse: parse2, parseAndHighlight: parseAndHighlight2, getParser, executeQuery } = createApi(createTsBackend());

// ../lsp-server/src/config.ts
function createServerConfig() {
  return {
    dialects: defaultDialects,
    parser: { parse: parse2 },
    queryExecutor: {
      executeQuery(source) {
        return parseAndHighlight2(source);
      }
    },
    enableCompletionProvider: true,
    enableSemanticTokens: true
  };
}

// ../lsp-server/src/index.ts
var config = createServerConfig();
var connection = (0, import_node.createConnection)();
setupServer(connection, config);
connection.console.log("[LSP Server] AgentScript Language Server started");
//# sourceMappingURL=server.mjs.map
