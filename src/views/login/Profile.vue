
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Profile',

    metaInfo: { title: 'Profile' },

    extends: View,

    mixins: [
      LoadSections([
        'profile',
      ]),
    ],
    // 'pro-features', Add pro feature comparison above when done with the module
    props: {
      id: {
        type: String,
        default: 'home',
      },
    },

  }
</script>
