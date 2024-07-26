import {EyeOpenIcon, BookIcon, CogIcon, StarIcon, AsteriskIcon, HeartIcon, ClockIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Butikkinfo')
        .icon(CogIcon)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Butikkinfo')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Åpningstider')
                .icon(ClockIcon)
                .child(S.document().schemaType('openingHours').documentId('openingHours')),
            ]),
        ),
      S.divider(),
      

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['openingHours', '', ''].includes(listItem.getId()),
      ),
    ])
