export const schema = {
  types: [
    {
      name: 'attrezzatura',
      type: 'document',
      title: 'Attrezzatura',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Nome',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          title: 'Descrizione',
        },
        {
          name: 'images',
          type: 'array',
          title: 'Immagini',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
          name: 'price',
          type: 'number',
          title: 'Prezzo',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // Limita la lunghezza del campo slug
          },
        },
        {
          name: 'priority',
          title: 'Priorità',
          type: 'number'
        },
        {
          name: 'categories',
          title: 'Categorie',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'category' }] }],
        },
      ],
    },
    {
      name: 'category',
      type: 'document',
      title: 'Categoria',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Nome',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          title: 'Descrizione',
        },
      ],
    },
  ],
}