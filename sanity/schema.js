export const schema = {
  types: [{
    name: 'Attrezzatura',
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
      }
    ]
  }],
}

