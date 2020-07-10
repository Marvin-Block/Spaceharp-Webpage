<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Database',

    metaInfo: { title: 'S-DB' },

    extends: View,

    mixins: [
      LoadSections([
        'spacesharp-d-b',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
