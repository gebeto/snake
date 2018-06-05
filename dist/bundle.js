/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Colors.ts":
/*!***********************!*\
  !*** ./src/Colors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Colors = /** @class */ (function () {\n    function Colors() {\n        this.default = \"black\";\n        this.colors = [\n            null,\n            \"red\",\n            \"purple\",\n            \"green\",\n            \"blue\",\n        ];\n    }\n    Colors.getInstance = function () {\n        if (!this.instance) {\n            this.instance = new Colors();\n        }\n        return this.instance;\n    };\n    Colors.prototype.getColor = function (color) {\n        var resultColor = this.colors[color];\n        return resultColor ? resultColor : this.default;\n    };\n    Colors.prototype.getColorIndex = function (color) {\n        return this.colors.indexOf(color.toLowerCase());\n    };\n    return Colors;\n}());\nexports.Colors = Colors;\n\n\n//# sourceURL=webpack:///./src/Colors.ts?");

/***/ }),

/***/ "./src/Game/GameMenu.ts":
/*!******************************!*\
  !*** ./src/Game/GameMenu.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameMenu = /** @class */ (function () {\n    function GameMenu() {\n    }\n    GameMenu.prototype.draw = function (ctx) {\n        ctx.fillRect(0, 0, 100, 100);\n    };\n    return GameMenu;\n}());\nexports.GameMenu = GameMenu;\n\n\n//# sourceURL=webpack:///./src/Game/GameMenu.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/Area.ts":
/*!***********************************!*\
  !*** ./src/Game/GamePlay/Area.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CONFIG = __importStar(__webpack_require__(/*! ../../config */ \"./src/config.ts\"));\nvar Matrix_1 = __webpack_require__(/*! ../../Matrix */ \"./src/Matrix.ts\");\nvar Colors_1 = __webpack_require__(/*! ../../Colors */ \"./src/Colors.ts\");\nvar Area = /** @class */ (function () {\n    function Area() {\n        this.colors = Colors_1.Colors.getInstance();\n        this.matrix = new Matrix_1.Matrix(CONFIG.WIDTH, CONFIG.HEIGHT);\n        this.matrix.grid.push(new Array(CONFIG.WIDTH));\n        this.matrix.grid[this.matrix.grid.length - 1].fill(1);\n    }\n    Area.prototype.draw = function (ctx) {\n        var _this = this;\n        this.matrix.grid.forEach(function (row, rowIndex) {\n            row.forEach(function (item, itemIndex) {\n                if (item) {\n                    ctx.fillStyle = _this.colors.getColor(item);\n                    ctx.fillRect(itemIndex, rowIndex, 1, 1);\n                }\n            });\n        });\n    };\n    Area.prototype.coalesced = function (shape) {\n        var coalesced = this.matrix.coalesced(shape.matrix, shape.x, shape.y + 1);\n        return coalesced;\n    };\n    Area.prototype.merge = function (shape) {\n        this.matrix.merge(shape.matrix, shape.x, shape.y);\n    };\n    Area.prototype.clear = function () {\n        this.matrix.clear();\n    };\n    return Area;\n}());\nexports.Area = Area;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/Area.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/Shapes/AbstractShape.ts":
/*!***************************************************!*\
  !*** ./src/Game/GamePlay/Shapes/AbstractShape.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Colors_1 = __webpack_require__(/*! ../../../Colors */ \"./src/Colors.ts\");\nvar AbstractShape = /** @class */ (function () {\n    function AbstractShape(color, x, y, width, height, grid) {\n        this.colors = Colors_1.Colors.getInstance();\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.matrix = grid;\n    }\n    AbstractShape.prototype.draw = function (ctx) {\n        var _this = this;\n        this.matrix.grid.forEach(function (row, rowIndex) {\n            row.forEach(function (item, itemIndex) {\n                if (item) {\n                    ctx.fillStyle = _this.colors.getColor(item);\n                    ctx.fillRect(_this.x + itemIndex, _this.y + rowIndex, 1, 1);\n                }\n            });\n        });\n    };\n    AbstractShape.prototype.set = function (grid) {\n        var _this = this;\n        this.matrix.grid = grid;\n        grid.forEach(function (row) {\n            row.forEach(function (cell, index, arr) {\n                if (arr[index]) {\n                    arr[index] = _this.color;\n                }\n            });\n        });\n    };\n    return AbstractShape;\n}());\nexports.AbstractShape = AbstractShape;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/Shapes/AbstractShape.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/Shapes/BasicShape.ts":
/*!************************************************!*\
  !*** ./src/Game/GamePlay/Shapes/BasicShape.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AbstractShape_1 = __webpack_require__(/*! ./AbstractShape */ \"./src/Game/GamePlay/Shapes/AbstractShape.ts\");\nvar BasicShape = /** @class */ (function (_super) {\n    __extends(BasicShape, _super);\n    function BasicShape(color, x, y, width, height, grid) {\n        return _super.call(this, color, x, y, width, height, grid) || this;\n    }\n    return BasicShape;\n}(AbstractShape_1.AbstractShape));\nexports.BasicShape = BasicShape;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/Shapes/BasicShape.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/Shapes/ShapeBuilder.ts":
/*!**************************************************!*\
  !*** ./src/Game/GamePlay/Shapes/ShapeBuilder.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BasicShape_1 = __webpack_require__(/*! ./BasicShape */ \"./src/Game/GamePlay/Shapes/BasicShape.ts\");\nvar Matrix_1 = __webpack_require__(/*! ../../../Matrix */ \"./src/Matrix.ts\");\nvar Colors_1 = __webpack_require__(/*! ../../../Colors */ \"./src/Colors.ts\");\nvar ShapeBuilder = /** @class */ (function () {\n    function ShapeBuilder() {\n        this.shapeParams = this.reset();\n        this.colors = Colors_1.Colors.getInstance();\n    }\n    ShapeBuilder.prototype.reset = function () {\n        return this.shapeParams = {\n            color: \"white\",\n            x: 0,\n            y: 0,\n            rows: []\n        };\n    };\n    ShapeBuilder.prototype.setColor = function (color) {\n        this.shapeParams.color = color;\n        return this;\n    };\n    ShapeBuilder.prototype.setX = function (x) {\n        this.shapeParams.x = x;\n        return this;\n    };\n    ShapeBuilder.prototype.setY = function (y) {\n        this.shapeParams.y = y;\n        return this;\n    };\n    ShapeBuilder.prototype.addRow = function (row) {\n        this.shapeParams.rows.push(row);\n        return this;\n    };\n    ShapeBuilder.prototype.getResult = function () {\n        var _this = this;\n        var rows = this.shapeParams.rows;\n        rows.forEach(function (row) {\n            row.forEach(function (cell, colIndex) {\n                row[colIndex] = row[colIndex] ? _this.colors.getColorIndex(_this.shapeParams.color) : row[colIndex];\n            });\n        });\n        var eqMatrixSize = rows.length;\n        rows.forEach(function (row) {\n            if (row.length > eqMatrixSize) {\n                eqMatrixSize = row.length;\n            }\n        });\n        while (rows.length < eqMatrixSize) {\n            var row = new Array(eqMatrixSize);\n            row.fill(0);\n            rows.push(row);\n        }\n        var grid = new Matrix_1.Matrix(eqMatrixSize, eqMatrixSize, rows);\n        var result = new BasicShape_1.BasicShape(this.shapeParams.color, this.shapeParams.x, this.shapeParams.y, eqMatrixSize, eqMatrixSize, grid);\n        this.reset();\n        return result;\n    };\n    return ShapeBuilder;\n}());\nexports.ShapeBuilder = ShapeBuilder;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/Shapes/ShapeBuilder.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/Shapes/index.ts":
/*!*******************************************!*\
  !*** ./src/Game/GamePlay/Shapes/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// import { TShape } from './TShape';\n// import { OShape } from './OShape';\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ShapeBuilder_1 = __webpack_require__(/*! ./ShapeBuilder */ \"./src/Game/GamePlay/Shapes/ShapeBuilder.ts\");\nvar ShapeFactory = /** @class */ (function () {\n    function ShapeFactory() {\n        this.shapeBuilder = new ShapeBuilder_1.ShapeBuilder();\n    }\n    ShapeFactory.prototype.createRandomShape = function () {\n        var shapes = [\n            this.createTShape,\n            this.createOShape,\n            this.createSShape,\n            this.createZShape,\n        ];\n        var createShape = shapes[(Math.random() * shapes.length) | 0];\n        return createShape.call(this);\n    };\n    ShapeFactory.prototype.createOShape = function () {\n        var shape = this.shapeBuilder\n            .setColor(\"purple\")\n            .addRow([1, 1])\n            .addRow([1, 1])\n            .getResult();\n        return shape;\n    };\n    ShapeFactory.prototype.createTShape = function () {\n        var shape = this.shapeBuilder\n            .setColor(\"green\")\n            .addRow([1, 1, 1])\n            .addRow([0, 1, 0])\n            .getResult();\n        return shape;\n    };\n    ShapeFactory.prototype.createSShape = function () {\n        var shape = this.shapeBuilder\n            .setColor(\"blue\")\n            .addRow([0, 1, 1])\n            .addRow([1, 1, 0])\n            .addRow([1, 1, 0])\n            .addRow([1, 1, 0])\n            .getResult();\n        return shape;\n    };\n    ShapeFactory.prototype.createZShape = function () {\n        var shape = this.shapeBuilder\n            .setColor(\"red\")\n            .addRow([1, 1, 0])\n            .addRow([0, 1, 1])\n            .getResult();\n        return shape;\n    };\n    return ShapeFactory;\n}());\nexports.ShapeFactory = ShapeFactory;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/Shapes/index.ts?");

/***/ }),

/***/ "./src/Game/GamePlay/index.ts":
/*!************************************!*\
  !*** ./src/Game/GamePlay/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Area_1 = __webpack_require__(/*! ./Area */ \"./src/Game/GamePlay/Area.ts\");\nvar Shapes_1 = __webpack_require__(/*! ./Shapes/ */ \"./src/Game/GamePlay/Shapes/index.ts\");\nvar Manipulator_1 = __webpack_require__(/*! ../../Manipulator */ \"./src/Manipulator.ts\");\nvar shapeFactory = new Shapes_1.ShapeFactory();\nvar GamePlay = /** @class */ (function () {\n    function GamePlay() {\n        var _this = this;\n        this.prevTime = 0;\n        this.dropCounter = 0;\n        this.dropInterval = 1000;\n        this.manipulator = Manipulator_1.Manipulator.getInstance();\n        this.area = new Area_1.Area();\n        this.currentShape = shapeFactory.createTShape();\n        // this.nextShape = shapeFactory.createTShape();\n        this.nextShape = shapeFactory.createRandomShape();\n        this.manipulator.addEventListener(\"left\", function (e) {\n            if (_this.area.matrix.coalesced(_this.currentShape.matrix, _this.currentShape.x - 1, _this.currentShape.y)) {\n                return;\n            }\n            _this.currentShape.x -= 1;\n        });\n        this.manipulator.addEventListener(\"right\", function (e) {\n            if (_this.area.matrix.coalesced(_this.currentShape.matrix, _this.currentShape.x + 1, _this.currentShape.y)) {\n                return;\n            }\n            _this.currentShape.x += 1;\n        });\n        this.manipulator.addEventListener(\"down\", function (e) {\n            _this.isColision(function () { return _this.merge(); });\n            _this.currentShape.y += 1;\n            _this.dropCounter = 0;\n        });\n        this.manipulator.addEventListener(\"rotate\", function (e) {\n            _this.currentShape.matrix.rotate(e);\n            if (_this.area.matrix.coalesced(_this.currentShape.matrix, _this.currentShape.x, _this.currentShape.y)) {\n                _this.currentShape.matrix.rotate(-e);\n            }\n        });\n    }\n    GamePlay.prototype.isColision = function (trueHandler, falseHandler) {\n        var result = this.area.coalesced(this.currentShape);\n        if (result && (this.currentShape.y === 1 || this.currentShape.y === 0)) {\n            this.area.matrix.clear();\n            result = false;\n        }\n        var handler = (result ? trueHandler : falseHandler);\n        handler && handler();\n        return result;\n    };\n    GamePlay.prototype.merge = function () {\n        this.area.merge(this.currentShape);\n        this.currentShape = this.nextShape;\n        // this.nextShape = shapeFactory.createTShape();\n        this.nextShape = shapeFactory.createRandomShape();\n    };\n    GamePlay.prototype.draw = function (ctx, time) {\n        var _this = this;\n        var deltaTime = time - this.prevTime;\n        this.prevTime = time;\n        this.dropCounter += deltaTime;\n        if (this.dropCounter > this.dropInterval) {\n            this.isColision(function () {\n                _this.merge();\n            }, function () {\n                _this.currentShape.y++;\n                _this.dropCounter = 0;\n            });\n        }\n        this.area.draw(ctx);\n        this.currentShape.draw(ctx);\n    };\n    return GamePlay;\n}());\nexports.GamePlay = GamePlay;\n\n\n//# sourceURL=webpack:///./src/Game/GamePlay/index.ts?");

/***/ }),

/***/ "./src/Game/index.ts":
/*!***************************!*\
  !*** ./src/Game/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GamePlay_1 = __webpack_require__(/*! ./GamePlay */ \"./src/Game/GamePlay/index.ts\");\nexports.GamePlay = GamePlay_1.GamePlay;\nvar GameMenu_1 = __webpack_require__(/*! ./GameMenu */ \"./src/Game/GameMenu.ts\");\nexports.GameMenu = GameMenu_1.GameMenu;\n\n\n//# sourceURL=webpack:///./src/Game/index.ts?");

/***/ }),

/***/ "./src/Manipulator.ts":
/*!****************************!*\
  !*** ./src/Manipulator.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Manipulator = /** @class */ (function () {\n    function Manipulator() {\n        var _this = this;\n        this.handlers = {};\n        document.addEventListener(\"keydown\", function (e) {\n            if (e.keyCode === 65) {\n                _this.dispatchEvent(\"left\", 1);\n            }\n            else if (e.keyCode === 68) {\n                _this.dispatchEvent(\"right\", 1);\n            }\n            else if (e.keyCode === 87) {\n                _this.dispatchEvent(\"up\", 1);\n            }\n            else if (e.keyCode === 83) {\n                _this.dispatchEvent(\"down\", 1);\n            }\n            else if (e.keyCode === 81) {\n                _this.dispatchEvent(\"rotate\", -1);\n            }\n            else if (e.keyCode === 69) {\n                _this.dispatchEvent(\"rotate\", 1);\n            }\n        });\n    }\n    Manipulator.getInstance = function () {\n        if (!this.instance) {\n            this.instance = new Manipulator();\n        }\n        return this.instance;\n    };\n    Manipulator.prototype.addEventListener = function (type, handler) {\n        if (!this.handlers[type]) {\n            this.handlers[type] = [];\n        }\n        this.handlers[type].push(handler);\n    };\n    Manipulator.prototype.dispatchEvent = function (type, data) {\n        console.log(type, data);\n        if (this.handlers[type]) {\n            this.handlers[type].forEach(function (handler) { return handler(data); });\n        }\n    };\n    return Manipulator;\n}());\nexports.Manipulator = Manipulator;\n\n\n//# sourceURL=webpack:///./src/Manipulator.ts?");

/***/ }),

/***/ "./src/Matrix.ts":
/*!***********************!*\
  !*** ./src/Matrix.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Matrix = /** @class */ (function () {\n    function Matrix(width, height, fill) {\n        this.width = width;\n        this.height = height;\n        this.grid = [];\n        this.fillGrid(fill);\n    }\n    Matrix.prototype.fillGrid = function (fill) {\n        for (var y = 0; y < this.height; y++) {\n            var row = new Array(this.width);\n            if (fill) {\n                this.grid.push(fill[y]);\n            }\n            else {\n                row.fill(0);\n                this.grid.push(row);\n            }\n        }\n    };\n    Matrix.prototype.coalesced = function (to, xOffset, yOffset) {\n        for (var y = 0; y < to.grid.length; y++) {\n            for (var x = 0; x < to.grid[y].length; x++) {\n                if (to.grid[y][x] && this.grid[yOffset + y][xOffset + x]) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    Matrix.prototype.merge = function (to, xOffset, yOffset) {\n        for (var y = 0; y < to.grid.length; y++) {\n            for (var x = 0; x < to.grid[y].length; x++) {\n                if (to.grid[y][x]) {\n                    this.grid[yOffset + y][xOffset + x] = to.grid[y][x];\n                }\n            }\n        }\n    };\n    Matrix.prototype.rotate = function (direction) {\n        var _a;\n        for (var y = 0; y < this.grid.length; y++) {\n            for (var x = 0; x < y; x++) {\n                _a = [\n                    this.grid[y][x],\n                    this.grid[x][y]\n                ], this.grid[x][y] = _a[0], this.grid[y][x] = _a[1];\n            }\n        }\n        if (direction > 0) {\n            this.grid.forEach(function (row) { return row.reverse(); });\n        }\n        else {\n            this.grid.reverse();\n        }\n    };\n    Matrix.prototype.clear = function () {\n        this.grid.map(function (row) {\n            row.fill(0);\n        });\n        this.grid[this.grid.length - 1].fill(1);\n    };\n    return Matrix;\n}());\nexports.Matrix = Matrix;\n\n\n//# sourceURL=webpack:///./src/Matrix.ts?");

/***/ }),

/***/ "./src/Scene.ts":
/*!**********************!*\
  !*** ./src/Scene.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CONFIG = __importStar(__webpack_require__(/*! ./config */ \"./src/config.ts\"));\nvar Scene = /** @class */ (function () {\n    function Scene() {\n        this.layers = [];\n        this.animationLoop = AnimationLoop.getInstance();\n        this.animationLoop.appendAction(this.draw.bind(this));\n        this.canvas = document.createElement(\"canvas\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        document.body.appendChild(this.canvas);\n        this.canvas.width = CONFIG.WIDTH * CONFIG.PIXEL_SIZE;\n        this.canvas.height = CONFIG.HEIGHT * CONFIG.PIXEL_SIZE;\n        this.canvas.style.backgroundColor = CONFIG.BACKGROUND_COLOR;\n        this.canvas.style.height = CONFIG.HEIGHT * CONFIG.PIXEL_SIZE + \"px\";\n        this.canvas.style.width = CONFIG.WIDTH * CONFIG.PIXEL_SIZE + \"px\";\n        this.ctx.scale(CONFIG.PIXEL_SIZE, CONFIG.PIXEL_SIZE);\n        this.ctx.fillStyle = CONFIG.SHAPE_COLOR;\n        window.CTX = this.ctx;\n    }\n    Scene.prototype.append = function (drawable) {\n        this.layers.push(drawable);\n    };\n    Scene.prototype.draw = function (time) {\n        var _this = this;\n        this.ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);\n        this.layers.forEach(function (drawable) {\n            drawable.draw(_this.ctx, time);\n        });\n    };\n    return Scene;\n}());\nexports.Scene = Scene;\nvar AnimationLoop = /** @class */ (function () {\n    function AnimationLoop() {\n        this.actions = [];\n    }\n    AnimationLoop.getInstance = function () {\n        if (!this.instance) {\n            this.instance = new AnimationLoop();\n            this.instance.loop();\n        }\n        return this.instance;\n    };\n    AnimationLoop.prototype.appendAction = function (action) {\n        this.actions.push(action);\n    };\n    AnimationLoop.prototype.loop = function (time) {\n        if (time === void 0) { time = 0; }\n        this.actions.forEach(function (action) {\n            action(time);\n        });\n        requestAnimationFrame(this.loop.bind(this));\n    };\n    return AnimationLoop;\n}());\nexports.AnimationLoop = AnimationLoop;\n\n\n//# sourceURL=webpack:///./src/Scene.ts?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.WIDTH = 12;\nexports.HEIGHT = 20;\nexports.PIXEL_SIZE = 20;\nexports.BACKGROUND_COLOR = \"#000000\";\nexports.SHAPE_COLOR = \"#FF00FF\";\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import { GameSingletone } from './Game/';\nvar Game_1 = __webpack_require__(/*! ./Game/ */ \"./src/Game/index.ts\");\nvar Scene_1 = __webpack_require__(/*! ./Scene */ \"./src/Scene.ts\");\nvar Manipulator_1 = __webpack_require__(/*! ./Manipulator */ \"./src/Manipulator.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var scene = new Scene_1.Scene();\n    var game = new Game_1.GamePlay();\n    var manipulator = Manipulator_1.Manipulator.getInstance();\n    scene.append(game);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });