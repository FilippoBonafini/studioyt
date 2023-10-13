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
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'images',
          type: 'array',
          title: 'Immagini',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'price',
          type: 'number',
          title: 'Prezzo',
          validation: (Rule) => Rule.min(0),
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // Limita la lunghezza del campo slug
            validation: (Rule) => Rule.required(),
          },
        },
        {
          name: 'priority',
          title: 'Priorità',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'categories',
          title: 'Categorie',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'category' }] }],
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'priority',
          title: 'Priorità',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}