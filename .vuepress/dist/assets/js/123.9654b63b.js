(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{299:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"trigger-eventtype-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trigger-eventtype-options"}},[t._v("#")]),t._v(" trigger(eventType [, options ])")]),t._v(" "),n("p",[n("code",[t._v("Wrapper")]),t._v(" DOM ノードのイベントを発火します。")]),t._v(" "),n("p",[t._v("Trigger は "),n("code",[t._v("options")]),t._v(" オブジェクト形式で行います。"),n("code",[t._v("options")]),t._v(" オブジェクトのプロパティがイベントに追加されます。")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("引数:")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("{string} eventName")]),t._v(" "),n("strong",[t._v("必須")])]),t._v(" "),n("li",[n("code",[t._v("{Object} options")]),t._v(" "),n("strong",[t._v("オプション")])])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("例:")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sinon "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sinon'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Foo "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clickHandler "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sinon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  propsData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickHandler "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clickHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("called"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[n("strong",[t._v("イベントターゲットの設定:")])])]),t._v(" "),n("p",[n("code",[t._v("trigger")]),t._v(" は  "),n("code",[t._v("Event")]),t._v(" オブジェクトを生成して、Wrapper.element にイベントを送ります。"),n("br"),t._v(" "),n("code",[t._v("Event")]),t._v(" オブジェクトの "),n("code",[t._v("target")]),t._v(" 値を編集できません。つまり、 "),n("code",[t._v("target")]),t._v(" を オプションオブジェクトにセットすることはできません。"),n("br"),t._v(" "),n("code",[t._v("target")]),t._v(" の属性を追加するには、 "),n("code",[t._v("trigger")]),t._v(" を実行する前に Wrapper.element の属性にその値をセットする必要があります。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\ninput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);