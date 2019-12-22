(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{374:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("blockquote",[e("p",[t._v("Пример проекта для этой конфигурации доступен на "),e("a",{attrs:{href:"https://github.com/vuejs/vue-test-utils-typescript-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("TypeScript — популярное надмножество JavaScript, которое добавляет типы и классы поверх обычного JS. Vue Test Utils включает типы в распределённый пакет, поэтому он хорошо работает с TypeScript.")]),t._v(" "),e("p",[t._v("В этом руководстве мы рассмотрим, как настроить тестовую конфигурацию для TypeScript-проекта с использованием Jest и Vue Test Utils из базовой настройки Vue CLI TypeScript.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Сначала вам нужно создать проект. Если у вас нет Vue CLI, установите его глобально:")]),t._v(" "),t._m(2),e("p",[t._v("И создайте проект, запустив следующую команду:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕЧАНИЕ")]),t._v(" "),e("p",[t._v("Если вы хотите получить более подробное руководство по настройке Vue с помощью TypeScript, ознакомьтесь с "),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript-Vue-Starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("руководством для начинающих по TypeScript во Vue"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Следующий шаг — добавить Jest в проект.")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Jest — это программа для запуска тестов, разработанный Facebook и направленный на предоставление многофункционального решения для модульного тестирования. Вы можете узнать больше о Jest на его "),e("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("официальной документации"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Установить Jest и Vue Test Utils:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("Теперь у нас есть проект, пришло время написать тест.")]),t._v(" "),t._m(26),t._v(" "),t._m(27),e("p",[t._v("Это все, что нам нужно сделать, чтобы заставить TypeScript и Vue Test Utils работать вместе!")]),t._v(" "),t._m(28),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-test-utils-typescript-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("Пример проекта для этой конфигурации"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),e("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"испоnьзование-с-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-с-typescript"}},[this._v("#")]),this._v(" Использование с TypeScript")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"добавnение-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-typescript"}},[this._v("#")]),this._v(" Добавление TypeScript")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -g @vue/cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ vue create hello-world\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В командной строке выберите "),s("code",[this._v("Manually select features")]),this._v(", выберите "),s("code",[this._v("TypeScript")]),this._v(" и нажмите клавишу ввода. Это создаст проект с уже настроенным для работы TypeScript.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"настройка-jest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#настройка-jest"}},[this._v("#")]),this._v(" Настройка Jest")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save-dev jest @vue/test-utils\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Затем определите команду "),s("code",[this._v("test:unit")]),this._v(" в секции scripts в "),s("code",[this._v("package.json")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test:unit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"обработка-однофайnовых-компонентов-в-jest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#обработка-однофайnовых-компонентов-в-jest"}},[this._v("#")]),this._v(" Обработка однофайловых компонентов в Jest")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Чтобы научить Jest обрабатывать файлы с расширением "),s("code",[this._v(".vue")]),this._v(", нам нужно установить и настроить препроцессор "),s("code",[this._v("vue-jest")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save-dev vue-jest\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Затем создайте блок "),s("code",[this._v("jest")]),this._v(" в "),s("code",[this._v("package.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleFileExtensions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// указываем Jest обрабатывать файлы с расширением `*.vue`")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transform"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// обработка файлов с расширением `*.vue` с помощью `vue-jest`")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('".*\\\\.(vue)$"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-jest"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testURL"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost/"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"настройка-typescript-дnя-jest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#настройка-typescript-дnя-jest"}},[this._v("#")]),this._v(" Настройка TypeScript для Jest")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Чтобы использовать файлы TypeScript в тестах, нам нужно настроить Jest для компиляции TypeScript. Для этого нам нужно установить "),s("code",[this._v("ts-jest")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save-dev ts-jest\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Затем нам нужно указать Jest обрабатывать тестовые файлы TypeScript с помощью "),s("code",[this._v("ts-jest")]),this._v(", добавив запись в "),s("code",[this._v("jest.transform")]),this._v(" в "),s("code",[this._v("package.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transform"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// обработка файлов с расширением `*.ts` с помощью `ts-jest`")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"^.+\\\\.tsx?$"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-jest"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"размещение-тестовых-файnов"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#размещение-тестовых-файnов"}},[this._v("#")]),this._v(" Размещение тестовых файлов")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("По умолчанию Jest будет рекурсивно выбирать все файлы с расширением "),s("code",[this._v(".spec.js")]),this._v(" или "),s("code",[this._v(".test.js")]),this._v(" по всему проекту.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Чтобы запустить тестовые файлы с расширением "),s("code",[this._v(".ts")]),this._v(", нам нужно изменить "),s("code",[this._v("testRegex")]),this._v(" в разделе конфигурации файла "),s("code",[this._v("package.json")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Добавьте следующее в поле "),s("code",[this._v("jest")]),this._v(" в "),s("code",[this._v("package.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testRegex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.(jsx?|tsx?)$"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Jest рекомендует создать каталог "),s("code",[this._v("__tests__")]),this._v(" рядом с тестируемым кодом, но не стесняйтесь структурировать ваши тесты по своему усмотрению. Просто помните, что Jest создаст каталог "),s("code",[this._v("__snapshots__")]),this._v(" рядом с тестовыми файлами, которые выполняют тестирование моментальными снимками.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"написание-модуnьного-теста"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#написание-модуnьного-теста"}},[this._v("#")]),this._v(" Написание модульного теста")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Создайте файл "),s("code",[this._v("src/components/__tests__/HelloWorld.spec.ts")]),this._v(" и добавьте следующий код:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/components/__tests__/HelloWorld.spec.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" shallowMount "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HelloWorld "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../HelloWorld.vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorld.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'отрисовывает props.msg, если они переданы'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("shallowMount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HelloWorld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      propsData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ресурсы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ресурсы"}},[this._v("#")]),this._v(" Ресурсы")])}],!1,null,null,null);s.default=n.exports}}]);