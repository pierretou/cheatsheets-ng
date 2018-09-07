webpackJsonp([5186681787198],{856:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Simple example"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/* @flow */\nfunction square(n: number) {\n  return n * n\n}\n\nconst four = square(2)\n"}]}]},{type:"comment",value:' {data-line="1,2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Most of what you need to do is to simply add annotations to function arguments!"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/"},children:[{type:"text",value:"flow.org docs"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type inference"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function square(n: number) {\n  const result = n * n\n}\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"result"}]},{type:"text",value:" is inferred to be a number because "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"number * number"}]},{type:"text",value:" will result in a number. There's no need to give it annotations."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type aliases"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Person = {\n  name: string,\n  age: number,\n  isAdmin: boolean,\n  likes: Array<string>\n}\n"}]}]},{type:"comment",value:' {data-line="1,2,3,4,5,6"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function greet(user: Person) {\n  console.log('hello', user.name)\n}\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"greet({ name: 'Miles Davis', ··· })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is the typical way to define the shape of complex objects."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const count: number = 200\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You typically don't need to do this, function args are often enough."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/variables/"},children:[{type:"text",value:"Variable types"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Importing and exporting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import type { Person } from './types'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export type Person = {\n  ···\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/modules"},children:[{type:"text",value:"Module types"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Union types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Action = number | string\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Direction = 'left' | 'right'\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/unions/"},children:[{type:"text",value:"Unions"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Optionals"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Maybe types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Album = {\n  name: ?string\n}\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const a: Album = {} // ✗ Error\nconst a: Album = { name: 'Blue' } // ✓ OK\nconst a: Album = { name: null } // ✓ OK\nconst a: Album = { name: undefined } // ✓ OK\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This makes "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"name"}]},{type:"text",value:" either a string or null."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/primitives/#toc-maybe-types"},children:[{type:"text",value:"Maybe types"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Optional properties"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Album = {\n  name?: string\n}\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const a: Album = {} // ✓ OK\na.name = 'Blue' // ✓ OK\na.name = null // ✓ Error\na.name = undefined // ✓ OK\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This makes an "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Album"}]},{type:"text",value:" valid even if "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"name"}]},{type:"text",value:' is not part of the keys. This is different from "maybe" types.'}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/primitives/#toc-optional-object-properties"},children:[{type:"text",value:"Optional properties"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Objects"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Extra object fields"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Artist = {\n  name: string,\n  label: string\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const a: Artist = {\n  name: 'Miguel Migs',\n  label: 'Naked Music'\n}\n\na.genre = 'House' // ✓ OK\n"}]}]},{type:"comment",value:' {data-line="6"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can add more fields to an object."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/lang/width-subtyping/"},children:[{type:"text",value:"Width subtyping"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Exact object types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Artist = {|\n  name: string,\n  label: string\n|}\n"}]}]},{type:"comment",value:' {data-line="1,4"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const a: Artist = { ··· }\na.genre = 'House' // ✗ Error\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Exact object types prevent extra properties from being added to an object."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/types/objects/#toc-exact-object-types"},children:[{type:"text",value:"Exact object types"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Dynamic keys"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Items = {\n  [key: string]: Item\n}\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/objects.html#objects-as-maps"},children:[{type:"text",value:"Dynamic object keys"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Advanced features"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Primitives"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Type"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"any"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"boolean"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"mixed"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"number"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"string"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"void"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"undefined"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"null"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"null (but not undefined)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{a: Number}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Object with a shape"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[any, number]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Tuples (fixed-length arrays)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Array<T>"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Class<T>"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Function"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Object"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"?number"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Maybe (number, void, null)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"a | b"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Union types"}]}]}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Enums"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Suit = 'Diamonds' | 'Clubs' | 'Hearts' | 'Spades'\n\nconst countries = {\n  US: 'United States',\n  IT: 'Italy',\n  FR: 'France'\n}\n\ntype Country = $Keys<typeof countries>\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/utility-types.html#keyst"},children:[{type:"text",value:"Enums"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type aliases"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Tree = {\n  foo: string,\n  bar: number,\n  qux: (foo: string, bar: number) => boolean\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Generic<T> = {\n  foo: T\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/quick-reference.html#type-aliases"},children:[{type:"text",value:"Type aliases"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Generic classes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"class GenericClass<T> {\n  x: T\n  constructor (x: T) { ... }\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var n: GenericClass<number> = new GenericClass(0)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/quick-reference.html#generics"},children:[{type:"text",value:"Generic classes"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Interfaces"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"interface Jsonable {\n  toJSON(): string;\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"class Foo {\n  toJSON() {\n    return '{}'\n  }\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"new Foo(): Jsonable\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/quick-reference.html#interfaces"},children:[{type:"text",value:"Interfaces"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const callback: () => void = function() {}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function filter<T> (\n  list: Array<T>,\n  callback: (item: T) => boolean\n): Array<T> {\n  ···\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://flow.org/docs/functions.html"},children:[{type:"text",value:"Functions"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Imports"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import type { Person } from '../person'\nimport typeof Config from '../config'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export type Person = { id: string }\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Comment syntax"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/*::\n  export type Foo = { ... }\n*/\n\nfunction add(n /*: number */) { ... }\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"React"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Props = {\n  bar: number\n}\n\ntype State = {\n  open: boolean\n}\n\nclass Foo extends React.Component<Props, State> {\n  // Component code\n}\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Examples"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var myNumbers: Array<number> = [42]\nfunction foo(): any {\n  return 42\n}\nvar b: boolean = false\nvar b: ?boolean = false /* maybe */\nvar b: string | boolean = false\n\nvar a: Class<MyClass> = MyClass\nvar b: MyClass = new a()\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Function signature"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"type Callback = (?Error, string) => any\n\nfunction fetch (callback: Callback) {\n  ···\n}\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.saltycrane.com/flow-type-cheat-sheet/latest/"},children:[{type:"text",value:"Flow website"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(flow.org)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://flow.org/en/docs/getting-started/"},children:[{type:"text",value:"Getting started with Flow"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(flow.org)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.saltycrane.com/flow-type-cheat-sheet/latest/"},children:[{type:"text",value:"Flow type cheatsheet"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(saltycrane.com)"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Flow",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}},{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /bluebird",context:{nodePath:"/bluebird",category:"JavaScript libraries",title:"bluebird.js"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/flow.md absPath of file >>> MarkdownRemark",nodePath:"/flow",nodeType:"sheet",title:"Flow",category:"JavaScript libraries",weight:-3,updated:"2017-09-20T00:00:00.000Z"}}}});
//# sourceMappingURL=path---flow-8621a702691c0092e596.js.map