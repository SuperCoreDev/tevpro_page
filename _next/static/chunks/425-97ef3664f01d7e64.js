(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{2893:function(e,a,r){"use strict";var s=r(5893),t=r(1664),l=r.n(t),o=r(9755),i=r.n(o),n=r(2562);let c=e=>{var a,r,t,o;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col overflow-hidden rounded-lg bg-white shadow-lg",children:[e.post.featured&&(0,s.jsxs)("div",{className:"relative overflow-hidden",children:[(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blog,"/").concat(e.post.slug),passHref:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)("div",{className:"inset-x-0 bottom-0 h-7 w-full cursor-pointer bg-tevpro-blue-500 py-1.5 text-center text-xs font-bold text-white",children:"Featured"})})}),(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blog,"/").concat(e.post.slug),passHref:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(i(),{className:"h-full w-full cursor-pointer object-cover",src:e.post.feature_image,alt:"",width:420,height:164})})})]}),!e.post.featured&&(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blog,"/").concat(e.post.slug),passHref:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(i(),{className:"h-full w-full cursor-pointer object-cover",src:e.post.feature_image,alt:"",width:420,height:192})})}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col justify-between bg-white px-6 pb-6 pt-4",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsxs)("p",{className:"text-sm font-medium text-tevpro-blue-600",children:[e.post.primary_tag&&(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blogTag,"/").concat(e.post.primary_tag.slug),passHref:!0,children:(0,s.jsx)("a",{className:"cursor-pointer hover:underline",children:e.post.primary_tag.name})}),!e.post.primary_tag&&(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blogTag,"/").concat(null===(a=null===(r=e.post)||void 0===r?void 0:r.tags[1])||void 0===a?void 0:a.slug),passHref:!0,children:(0,s.jsx)("a",{className:"cursor-pointer hover:underline",children:null===(t=null===(o=e.post)||void 0===o?void 0:o.tags[1])||void 0===t?void 0:t.name})})]}),(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blog,"/").concat(e.post.slug),passHref:!0,children:(0,s.jsx)("a",{className:"mt-2 block decoration-tevpro-blue-500 underline-offset-4 hover:underline",children:(0,s.jsx)("p",{className:"text-xl font-semibold text-gray-900",children:e.post.title})})})]}),(0,s.jsxs)("div",{className:"group mt-6 flex items-center border-t border-gray-100 pt-4",children:[(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blogAuthor,"/").concat(e.post.primary_author.slug),passHref:!0,children:(0,s.jsxs)("a",{children:[(0,s.jsx)("span",{className:"sr-only",children:e.post.primary_author.name}),(0,s.jsx)("div",{className:"inline-flex flex-shrink-0 rounded-full border-2 border-tevpro-blue-50 group-hover:border-tevpro-blue-500",children:e.post.primary_author.profile_image?(0,s.jsx)(i(),{className:"h-10 w-10 rounded-full",src:e.post.primary_author.profile_image,alt:"",width:40,height:40}):(0,s.jsx)(i(),{src:"https://tevpro.com/content/images/2019/04/LOGO-TEVPRO-2_sqaure4-2.png",alt:"",width:40,height:40})})]})})}),(0,s.jsxs)("div",{className:"ml-3",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-gray-900",children:(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(n.Z.blogAuthor,"/").concat(e.post.primary_author.slug),passHref:!0,children:(0,s.jsx)("a",{className:"decoration-tevpro-blue-500 underline-offset-2 group-hover:underline",children:e.post.primary_author.name})})}),(0,s.jsx)("div",{className:"flex space-x-1 text-sm text-gray-500",children:(0,s.jsxs)("span",{children:[e.post.reading_time," min. read"]})})]})]})]})]})})};a.Z=c},6728:function(e,a,r){"use strict";var s=r(5893),t=r(2893);let l=e=>{let{posts:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"relative bg-gray-50 px-4 pt-4 sm:px-6 lg:px-8 ",children:(0,s.jsx)("div",{className:"relative mx-auto max-w-7xl",children:(0,s.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:null==a?void 0:a.map(e=>(0,s.jsx)(t.Z,{post:e},e.title))})})})})};a.Z=l},3741:function(e,a,r){"use strict";var s=r(5893),t=r(1664),l=r.n(t),o=r(2562);let i=e=>{let{posts:a,hasPreviousPage:r=!1,hasNextPage:t=!0,page:i=1,totalPages:n=0}=e;return(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsx)("nav",{className:"bg-gray-50 px-4 py-8",children:(0,s.jsxs)("div",{className:"mx-auto flex max-w-7xl items-center justify-between",children:[(0,s.jsx)("div",{className:"-mt-px flex w-0 flex-1",children:r&&(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(o.Z.blogPage,"/").concat(i-1),children:(0,s.jsx)("a",{className:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",role:"button",children:"Previous"})})}),"Page ",i," of ",n,(0,s.jsx)("div",{className:"-mt-px flex w-0 flex-1 justify-end",children:t&&(0,s.jsx)(l(),{legacyBehavior:!0,href:"".concat(o.Z.blogPage,"/").concat(i+1),children:(0,s.jsx)("a",{className:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",role:"button",children:"Next"})})})]})})})};a.Z=i},4109:function(e,a,r){"use strict";var s=r(5893),t=r(1163),l=r(1304),o=r.n(l),i=r(2562),n=r(6002);let c=e=>{var a;let{tags:r}=e,l=(0,t.useRouter)(),c=e=>{e.preventDefault(),l.push("".concat(i.Z.blogTag,"/").concat(o()(e.target.value.toLowerCase())))},x="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",d="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm";return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mx-auto",children:[(0,s.jsxs)("div",{className:"sm:hidden",children:[(0,s.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,s.jsxs)("select",{id:"tabs",name:"tabs",className:"focus:ring-tevpro-purple-500 focus:border-tevpro-purple-500 block w-full rounded-md border-gray-300 pl-3 pr-10 text-base focus:outline-none sm:text-sm",defaultValue:null===(a=null==r?void 0:r.find(e=>e.current))||void 0===a?void 0:a.name,onChange:c,children:[null==r?void 0:r.map(e=>(0,s.jsx)("option",{children:e.name},e.name)),(0,s.jsx)("option",{children:"View All"},"view-more")]})]}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("nav",{className:"mx-auto -mb-px flex max-w-7xl space-x-8 overflow-x-auto bg-white px-4 sm:px-6 lg:px-8","aria-label":"Tabs",children:[null==r?void 0:r.map(e=>(0,s.jsx)("a",{href:"".concat(i.Z.blogTag,"/").concat(e.slug),className:(0,n.Z)(e.current?"border-tevpro-purple-500 text-tevpro-purple-600":x,d),"aria-current":e.current?"page":void 0,children:e.name},e.name)),(0,s.jsx)("a",{href:i.Z.blogTags,className:(0,n.Z)(x,d),"aria-current":void 0,children:"View All"})]})})})]})})};a.Z=c},6660:function(e,a,r){"use strict";var s=r(5893);r(7294);var t=r(9755),l=r.n(t),o=r(6002);let i=e=>{let{coverImageUrl:a,title:r,subtitle:t,size:i="lg"}=e;return(0,s.jsxs)("div",{className:(0,o.Z)("relative bg-gray-700","lg"===i?"pb-32":""),children:[(0,s.jsxs)("div",{className:"absolute inset-0",children:[a&&(0,s.jsx)(l(),{className:"h-full w-full object-cover",src:a,alt:"",layout:"fill",priority:!0}),(0,s.jsx)("div",{"aria-hidden":"true",className:"from-tevpro-blue-700 to-tevpro-blue-800 absolute inset-0 bg-gradient-to-r mix-blend-multiply"})]}),(0,s.jsxs)("div",{className:(0,o.Z)("relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8","lg"==i?"sm:py-28":"sm:py-32"),children:[(0,s.jsx)("h1",{className:"text-4xl font-extrabold text-white md:text-5xl lg:text-6xl",children:r}),(0,s.jsx)("p",{className:"mt-6 max-w-2xl text-xl text-gray-100 lg:pr-3",children:t})]})]})};a.Z=i},1304:function(e){var a;a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),a=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function r(r,s){if("string"!=typeof r)throw Error("slugify: string argument expected");var t=a[(s="string"==typeof s?{replacement:s}:s||{}).locale]||{},l=void 0===s.replacement?"-":s.replacement,o=void 0===s.trim||s.trim,i=r.normalize().split("").reduce(function(a,r){var o=t[r];return void 0===o&&(o=e[r]),void 0===o&&(o=r),o===l&&(o=" "),a+o.replace(s.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return s.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),o&&(i=i.trim()),i=i.replace(/\s+/g,l),s.lower&&(i=i.toLowerCase()),i}return r.extend=function(a){Object.assign(e,a)},r},e.exports=a(),e.exports.default=a()}}]);