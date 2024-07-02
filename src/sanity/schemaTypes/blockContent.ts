import { defineArrayMember, defineType } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

// import {defineArrayMember, defineType} from "sanity"

// export default defineType({
//     name: "blockContent",
//     title: "Block Content",
//     type: "array",
//     of: [
//         defineArrayMember({
//             title: "Block",
//             type: "block",
//             styles: [
//                 {title: "Normal", value: "normal"},
//                 {title: "H1", value: "h1"},
//                 {title: "H2", value: "h2"},
//                 {title: "H3", value: "h3"},
//                 {title: "H4", value: "h4"},
//                 {title: "Quote", value: "blockquote"},
//             ],
//             lists: [{title: "Bullet", value: "bullet"}],
//             marks: {
//                 decorators: [
//                     {title: "Stong", value: "Strong"},
//                     {title: "Emphasis", value: "em"}
//                 ],
//                 annotations: [
//                     {
//                         title: "URL",
//                         name: "link",
//                         type: "object",
//                         fileds: [
//                             {
//                                 title: "URL",
//                                 name: "href",
//                                 type: "url"
//                             }
//                         ],
//                     },
//                 ],
//             },
//         }),
//         defineArrayMember({
//             type: "image",
//             options: {hotspot: true}
//         }),
//     ],
// })