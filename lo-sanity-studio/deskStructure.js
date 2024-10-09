import {
  EyeOpenIcon,
  CogIcon,
  HeartIcon,
  ClockIcon,
  HomeIcon,
  InfoOutlineIcon,
  CommentIcon,
  AddIcon,
  SparklesIcon,
  SparkleIcon,
  ActivityIcon,
  ComposeIcon,
} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Butikkinfo')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Butikkinfo')
            .items([
              S.listItem()
                .title('Åpningstider')
                .icon(ClockIcon)
                .child(S.document().schemaType('openingHours').documentId('openingHours')),
            ]),
        ),
      S.divider(),

      S.listItem()
        .title('Hjem')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Hjem')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(InfoOutlineIcon)
                .child(S.document().schemaType('homeMetadata').documentId('homeMetadata')),
              S.listItem()
                .title('Hero')
                .icon(SparkleIcon)
                .child(S.document().schemaType('hero').documentId('hero')),
              S.listItem()
                .title('Midlertidig seksjon')
                .icon(ActivityIcon)
                .child(S.document().schemaType('temporary').documentId('temporary')),
            ]),
        ),

      S.listItem()
        .title('Bestill time')
        .icon(EyeOpenIcon)
        .child(
          S.list()
            .title('Bestill time')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(InfoOutlineIcon)
                .child(S.document().schemaType('eyecheckMetadata').documentId('eyecheckMetadata')),
            ]),
        ),

      S.listItem()
        .title('Våre merker')
        .icon(SparklesIcon)
        .child(
          S.list()
            .title('Merker')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(InfoOutlineIcon)
                .child(
                  S.document()
                    .schemaType('brandsMetadata')
                    .documentId('brandsMetadata')
                    .title('Metadata'),
                ),

              S.listItem().title('Merker').icon(AddIcon).child(S.documentTypeList('ourBrands')),
            ]),
        ),

      S.listItem()
        .title('Om oss')
        .icon(HeartIcon)
        .child(
          S.list()
            .title('Om oss')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(InfoOutlineIcon)
                .child(S.document().schemaType('aboutMetadata').documentId('aboutMetadata')),
              S.listItem()
                .title('Innhold')
                .icon(AddIcon)
                .child(S.document().schemaType('about').documentId('about')),
            ]),
        ),

      S.listItem()
        .title('Kontakt oss')
        .icon(CommentIcon)
        .child(
          S.list()
            .title('Kontakt oss')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(InfoOutlineIcon)
                .child(
                  S.document()
                    .schemaType('contactMetadata')
                    .documentId('contactMetadata')
                    .title('Metadata'),
                ),
            ]),
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'openingHours',
            'homeMetadata',
            'temporary',
            'hero',
            'eyecheckMetadata',
            'brandsMetadata',
            'content',
            'ourBrands',
            'aboutMetadata',
            'about',
            'contactMetadata',
          ].includes(listItem.getId()),
      ),
    ])
