
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
        'about-our-product',
        'features',
        'contact-us',
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
