webpackHotUpdate("jvcparry",{

/***/ "./packages/jvcparry-theme/src/components/index.js":
/*!*********************************************************!*\
  !*** ./packages/jvcparry-theme/src/components/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./packages/jvcparry-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ \"./packages/jvcparry-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post */ \"./packages/jvcparry-theme/src/components/post.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading */ \"./packages/jvcparry-theme/src/components/loading.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title */ \"./packages/jvcparry-theme/src/components/title.js\");\n/* harmony import */ var _page_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-error */ \"./packages/jvcparry-theme/src/components/page-error.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Theme is the root React component of our theme. The one we will export\n * in roots.\n */var Theme=(_ref)=>{var{state}=_ref;// Get information about the current URL.\nvar data=state.source.get(state.router.link);state.source.homepage=\"/\";state.source.postsPage=\"/posts\";return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_3__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Main,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:data.isFetching}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:data.isArchive}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:data.isPostType}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_page_error__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:data.isError}))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Theme));var globalStyles= false?undefined:{name:\"1q7ziw2-globalStyles\",styles:\"body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Droid Sans\\\",\\\"Helvetica Neue\\\",Helvetica,Arial,sans-serif;}a,a:visited{color:inherit;text-decoration:none;};label:globalStyles;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhbGllY2xhbXAvZGV2L3BlcnNvbmFsL2p2Y3BhcnJ5L3BhY2thZ2VzL2p2Y3BhcnJ5LXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEd0IiLCJmaWxlIjoiL1VzZXJzL25hdGFsaWVjbGFtcC9kZXYvcGVyc29uYWwvanZjcGFycnkvcGFja2FnZXMvanZjcGFycnktdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcywgY29ubmVjdCwgc3R5bGVkLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSBcIi4vcGFnZS1lcnJvclwiO1xuXG4vKipcbiAqIFRoZW1lIGlzIHRoZSByb290IFJlYWN0IGNvbXBvbmVudCBvZiBvdXIgdGhlbWUuIFRoZSBvbmUgd2Ugd2lsbCBleHBvcnRcbiAqIGluIHJvb3RzLlxuICovXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBzdGF0ZS5zb3VyY2UuaG9tZXBhZ2UgPSBcIi9cIjtcbiAgc3RhdGUuc291cmNlLnBvc3RzUGFnZSA9IFwiL3Bvc3RzXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzOGM1O1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwLjEpLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwKVxuICApO1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var HeadContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"em5r0e40\",label:\"HeadContainer\"})( false?undefined:{name:\"65cbeh\",styles:\"display:flex;align-items:center;flex-direction:column;background-color:#1f38c5;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhbGllY2xhbXAvZGV2L3BlcnNvbmFsL2p2Y3BhcnJ5L3BhY2thZ2VzL2p2Y3BhcnJ5LXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FZ0MiLCJmaWxlIjoiL1VzZXJzL25hdGFsaWVjbGFtcC9kZXYvcGVyc29uYWwvanZjcGFycnkvcGFja2FnZXMvanZjcGFycnktdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcywgY29ubmVjdCwgc3R5bGVkLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSBcIi4vcGFnZS1lcnJvclwiO1xuXG4vKipcbiAqIFRoZW1lIGlzIHRoZSByb290IFJlYWN0IGNvbXBvbmVudCBvZiBvdXIgdGhlbWUuIFRoZSBvbmUgd2Ugd2lsbCBleHBvcnRcbiAqIGluIHJvb3RzLlxuICovXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBzdGF0ZS5zb3VyY2UuaG9tZXBhZ2UgPSBcIi9cIjtcbiAgc3RhdGUuc291cmNlLnBvc3RzUGFnZSA9IFwiL3Bvc3RzXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzOGM1O1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwLjEpLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwKVxuICApO1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Main=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"em5r0e41\",label:\"Main\"})( false?undefined:{name:\"1m9csha\",styles:\"display:flex;justify-content:center;background-image:linear-gradient( 180deg,rgba(66,174,228,0.1),rgba(66,174,228,0) );\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhbGllY2xhbXAvZGV2L3BlcnNvbmFsL2p2Y3BhcnJ5L3BhY2thZ2VzL2p2Y3BhcnJ5LXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFdUIiLCJmaWxlIjoiL1VzZXJzL25hdGFsaWVjbGFtcC9kZXYvcGVyc29uYWwvanZjcGFycnkvcGFja2FnZXMvanZjcGFycnktdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcywgY29ubmVjdCwgc3R5bGVkLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSBcIi4vcGFnZS1lcnJvclwiO1xuXG4vKipcbiAqIFRoZW1lIGlzIHRoZSByb290IFJlYWN0IGNvbXBvbmVudCBvZiBvdXIgdGhlbWUuIFRoZSBvbmUgd2Ugd2lsbCBleHBvcnRcbiAqIGluIHJvb3RzLlxuICovXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBzdGF0ZS5zb3VyY2UuaG9tZXBhZ2UgPSBcIi9cIjtcbiAgc3RhdGUuc291cmNlLnBvc3RzUGFnZSA9IFwiL3Bvc3RzXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzOGM1O1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwLjEpLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwKVxuICApO1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qdmNwYXJyeS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz84YWE0Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImhvbWVwYWdlIiwicG9zdHNQYWdlIiwiZnJvbnRpdHkiLCJkZXNjcmlwdGlvbiIsImdsb2JhbFN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0FyY2hpdmUiLCJpc1Bvc3RUeXBlIiwiaXNFcnJvciIsImNvbm5lY3QiLCJIZWFkQ29udGFpbmVyIiwiTWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cVJBVUE7OztHQUlBLEdBQU1BLE1BQUssQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzNCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQUwsS0FBSyxDQUFDRSxNQUFOLENBQWFJLFFBQWIsQ0FBd0IsR0FBeEIsQ0FDQU4sS0FBSyxDQUFDRSxNQUFOLENBQWFLLFNBQWIsQ0FBeUIsUUFBekIsQ0FFQSxNQUNFLHNIQUVFLDBEQUFDLDhDQUFELE1BRkYsQ0FHRSwwREFBQyw2Q0FBRCxNQUNFLGtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBRVAsS0FBSyxDQUFDUSxRQUFOLENBQWVDLFdBQWpELEVBREYsQ0FFRSxrRUFBTSxJQUFJLENBQUMsSUFBWCxFQUZGLENBSEYsQ0FVRSwwREFBQyxvREFBRCxFQUFRLE1BQU0sQ0FBRUMsWUFBaEIsRUFWRixDQWFFLDBEQUFDLGFBQUQsTUFDRSwwREFBQywrQ0FBRCxNQURGLENBYkYsQ0FtQkUsMERBQUMsSUFBRCxNQUNFLDBEQUFDLG1FQUFELE1BQ0UsMERBQUMsZ0RBQUQsRUFBUyxJQUFJLENBQUVULElBQUksQ0FBQ1UsVUFBcEIsRUFERixDQUVFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFVixJQUFJLENBQUNXLFNBQWpCLEVBRkYsQ0FHRSwwREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRVgsSUFBSSxDQUFDWSxVQUFqQixFQUhGLENBSUUsMERBQUMsb0RBQUQsRUFBVyxJQUFJLENBQUVaLElBQUksQ0FBQ2EsT0FBdEIsRUFKRixDQURGLENBbkJGLENBREYsQ0E4QkQsQ0FwQ0QsQ0FzQ2VDLHVIQUFPLENBQUNoQixLQUFELENBQXRCLEVBRUEsR0FBTVcsYUFBWSxrb0hBQWxCLENBYUEsR0FBTU0sY0FBYSx5bUhBQW5CLENBT0EsR0FBTUMsS0FBSSx5b0hBQVYiLCJmaWxlIjoiLi9wYWNrYWdlcy9qdmNwYXJyeS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tIFwiLi9wYWdlLWVycm9yXCI7XG5cbi8qKlxuICogVGhlbWUgaXMgdGhlIHJvb3QgUmVhY3QgY29tcG9uZW50IG9mIG91ciB0aGVtZS4gVGhlIG9uZSB3ZSB3aWxsIGV4cG9ydFxuICogaW4gcm9vdHMuXG4gKi9cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIHN0YXRlLnNvdXJjZS5ob21lcGFnZSA9IFwiL1wiO1xuICBzdGF0ZS5zb3VyY2UucG9zdHNQYWdlID0gXCIvcG9zdHNcIjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQWRkIHNvbWUgbWV0YXRhZ3MgdG8gdGhlIDxoZWFkPiBvZiB0aGUgSFRNTC4gKi99XG4gICAgICA8VGl0bGUgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzdGF0ZS5mcm9udGl0eS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIEFkZCBzb21lIGdsb2JhbCBzdHlsZXMgZm9yIHRoZSB3aG9sZSBzaXRlLCBsaWtlIGJvZHkgb3IgYSdzLiBcbiAgICAgIE5vdCBjbGFzc2VzIGhlcmUgYmVjYXVzZSB3ZSB1c2UgQ1NTLWluLUpTLiBPbmx5IGdsb2JhbCBIVE1MIHRhZ3MuICovfVxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cblxuICAgICAgey8qIEFkZCB0aGUgaGVhZGVyIG9mIHRoZSBzaXRlLiAqL31cbiAgICAgIDxIZWFkQ29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICA8L0hlYWRDb250YWluZXI+XG5cbiAgICAgIHsvKiBBZGQgdGhlIG1haW4gc2VjdGlvbi4gSXQgcmVuZGVycyBhIGRpZmZlcmVudCBjb21wb25lbnQgZGVwZW5kaW5nXG4gICAgICBvbiB0aGUgdHlwZSBvZiBVUkwgd2UgYXJlIGluLiAqL31cbiAgICAgIDxNYWluPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxMb2FkaW5nIHdoZW49e2RhdGEuaXNGZXRjaGluZ30gLz5cbiAgICAgICAgICA8TGlzdCB3aGVuPXtkYXRhLmlzQXJjaGl2ZX0gLz5cbiAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjM4YzU7XG5gO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAxODBkZWcsXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDAuMSksXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDApXG4gICk7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/jvcparry-theme/src/components/index.js\n");

/***/ })

})