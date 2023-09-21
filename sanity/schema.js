export const schema = {
  types: [{
    name: 'attrezzatura',
    type: 'document',
    title: 'Attrezzatura',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Descrizione'
      },
      {
        name: 'image',
        type: 'array',
        title: 'Immagini',
        of: [{ type: 'image' }]
      },
      {
        name: 'price',
        type: 'number',
        title: 'Prezzo'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        option: {
          source: 'name'
        }
      },
      {
        name: 'categories',
        title: 'Categorie',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  }],
}

