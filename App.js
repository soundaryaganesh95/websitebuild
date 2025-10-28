import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Assuming you use Expo/Vector Icons

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  darkText: '#000000',
  lightText: '#FFFFFF',
  paragraph: '#333333',
};

// --- Navbar Component ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* Replace with your actual image source */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- About Section Component ---
const AboutSection = () => (
  <View style={styles.aboutSection}>
    {/* Removed redundant section-heading as it was not in HTML structure */}

    <View style={styles.aboutContent}>
      <Text style={styles.aboutText}>
        Welcome to <Text style={styles.aboutTextBold}>MAGIZH Builders</Text>, a premium builders in Chennai for luxury apartments, Homes and other buildings. We are also known for our Professional approach to construction and services.
      </Text>
      <Text style={styles.aboutText}>
        As one of the most Reputed builders in Chennai. We pride ourselves on delivering <Text style={styles.aboutTextBold}>Quality homes</Text> to our customers at a great value. We have developed a name in the market as quality builders, Which We aim to uphold further with each home we build. We are also Chennai's Leading flat Promoters.
      </Text>
      <Text style={styles.aboutText}>
        Browse our Completed project to understand our superior service and quality. Then Pick a beautiful home from our current and upcoming Projects section.
      </Text>
    </View>
    
    <TouchableOpacity style={styles.readMoreBtn} onPress={() => console.log('Read More Pressed')}>
      <Text style={styles.readMoreBtnText}>Read More</Text>
    </TouchableOpacity>
    
    <Text style={styles.sectionFooter}>ONGOING PROJECTS</Text>
  </View>
);

// --- Testimonials Section Component ---
const TestimonialsSection = () => (
    <View style={styles.testimonialsSection}>
        <Text style={styles.testimonialsHeading}>Testimonials</Text>
    </View>
);

// --- Footer Component ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={styles.footerCol}>
        <View style={styles.footerLogo}>
          {/* Replace with your actual image source */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { backgroundColor: COLORS.secondary }]} // Apply secondary color as in inline style
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={styles.footerColContact}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

// --- Main App Component ---
export default function App() {
  return (
    // ScrollView to allow scrolling on mobile
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      <View style={styles.heroSection}>
        {/* Replace with your actual image source */}
        <Image 
          source={{ uri: 'Frame 13.png' }} 
          style={styles.houseImage} 
          resizeMode="cover" 
        />
      </View>

      <View style={styles.achievementsSection}>
        {/* Replace with your actual image source */}
        <Image 
          source={{ uri: 'image1.png' }} 
          style={styles.promotersImage} 
          resizeMode="contain" 
        />
      </View>

      <AboutSection />
      
      {/* Image for Ongoing Projects content */}
      <Image 
          source={{ uri: 'image2.png' }} 
          style={styles.ongoingProjectsImage} 
          resizeMode="cover" 
      />

      <TestimonialsSection />

      {/* Image for Testimonials content */}
      <Image 
          source={{ uri: 'image3.png' }} 
          style={styles.testimonialsImage} 
          resizeMode="cover" 
      />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    // This allows the ScrollView to fill the screen
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, // Reduced from 50px for mobile
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, // Added width for mobile visibility
    // No direct 'filter: invert' equivalent; assume logo is designed for a dark background
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, // Reduced from 30px
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  
  // 2. Hero Section (for the large house image)
  heroSection: {
    width: windowWidth,
    marginBottom: 20,
  },
  houseImage: {
    width: '100%',
    height: windowWidth * 0.5, // Aspect ratio approximation
  },

  // 3. Achievements Section (image)
  achievementsSection: {
    width: windowWidth,
    alignItems: 'center',
    marginVertical: 10,
  },
  promotersImage: {
    width: '100%',
    height: 100, // Placeholder height; adjust based on actual image ratio
    
  },
  
  // 4. About Section
  aboutSection: {
    paddingHorizontal: 20,
    paddingVertical: 80,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  aboutContent: {
    maxWidth: 800,
    marginBottom: 30,
    // RN Text components don't inherit line-height easily, so apply to individual texts if needed
  },
  aboutText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25, // equivalent of line-height 1.8
    color: COLORS.paragraph,
    marginBottom: 20,
    textAlign: 'center',
  },
  aboutTextBold: {
    fontWeight: '700',
  },
  readMoreBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  readMoreBtnText: {
    color: COLORS.lightText,
    fontSize: 18,
    fontWeight: '600',
  },
  sectionFooter: {
    fontSize: 24, // 1.8em is about 24px
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 20,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  
  // Image between About and Testimonials
  ongoingProjectsImage: {
      width: windowWidth,
      height: 300, // Placeholder height
      marginVertical: 10,
  },

  // 5. Testimonials Section
  testimonialsSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center', // Centers the heading text block
    backgroundColor: '#ffffff',
  },
  testimonialsHeading: {
    fontSize: 48, // 3em is about 48px
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 30,
  },
  
  // Image between Testimonials heading and footer
  testimonialsImage: {
    width: windowWidth,
    height: 300, // Placeholder height
    marginVertical: 10,
  },

  // 6. Footer
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1200, // Max width for content area
    alignSelf: 'center', // Centers the content block
    gap: 20, // Spacing between columns
    flexWrap: 'wrap', // Allows columns to wrap on smaller screens
  },
  footerCol: {
    flex: 1, // Distribute space
    minWidth: 150,
    marginBottom: 20,
  },
  footerColContact: {
    flex: 1.5, // Gives more space to the contact column
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, // equivalent of line-height 1.8
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, // Allows text to wrap within the available space
  },
  // Note: Hover effects need to be implemented using state/hooks (e.g., TouchableOpacity's 'onPressIn'/'onPressOut' or 'activeOpacity')
});

// To apply hover color change for links, you'd typically use the 'TouchableOpacity' component 
// and manage state for the text color, or use a component library that provides this functionality.
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform // Used for cross-platform adjustments if needed
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5 } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  darkText: '#000000',
  lightText: '#FFFFFF',
  paragraph: '#333333',
};

// --- Navbar Component ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Contact us Pressed')}>
        <Text style={styles.navLinkText}>Contact us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Project Category Card Component (Reusable) ---
const ProjectTypeCard = ({ imageSource, title, onPress }) => (
  <TouchableOpacity style={styles.projectTypeCard} onPress={onPress}>
    <Image 
      source={{ uri: imageSource }} 
      style={styles.categoryImage} 
      resizeMode="cover" 
    />
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

// --- Projects Category Section Component ---
const ProjectsCategorySection = ({ data }) => (
  <View style={styles.projectsCategorySection}>
    <View style={styles.categoryContainer}>
      {data.map((item) => (
        <ProjectTypeCard 
          key={item.title}
          imageSource={item.image}
          title={item.title}
          onPress={() => console.log(`${item.title} Pressed`)}
        />
      ))}
    </View>
  </View>
);

// --- Footer Component ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

// --- Data for Project Sections ---
const topCategories = [
    { title: "Residential", image: 'image4.png', href: 'resident.html' },
    { title: "Commercial", image: 'image5.png', href: 'commercial.html' },
];

const subCategories = [
    { title: "Luxury", image: 'image6.png', href: 'luxury.html' },
    { title: "Plotted Development", image: 'image7.png', href: 'plotted.html' },
];

// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      <View style={styles.projectsBanner}>
        {/* Replace with your actual image source */}
        <Image 
          source={{ uri: 'projectlogo.png' }} 
          style={styles.bannerImage} 
          resizeMode="cover" 
        />
      </View>
      
      <ProjectsCategorySection data={topCategories} />
      
      <ProjectsCategorySection data={subCategories} />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling (Reused from previous)
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', // Placeholder style from HTML
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    // On small screens, this group might be hidden or moved to a drawer
    ...Platform.select({
      web: { display: 'flex' }, // Show on web/larger screens
      default: { display: 'none' }, // Hide on mobile (use a drawer for real app)
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, // Changed to 16 for better mobile readability
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, // Changed to 16
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Projects Banner
  projectsBanner: {
    width: windowWidth,
    marginBottom: 20,
    // Adjust height based on your projectlogo.png
  },
  bannerImage: {
    width: '100%',
    height: 200, // Placeholder height. Adjust as necessary.
    resizeMode: 'cover',
  },

  // 3. Projects Category Sections
  projectsCategorySection: {
    paddingVertical: 40, // Reduced from 80px for better vertical flow on mobile
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    gap: 20, // Reduced from 40px
    flexWrap: 'wrap',
  },
  projectTypeCard: {
    // This handles the flex: 1 and max-width: 45% logic for two columns
    width: (windowWidth > 768 ? MAX_CONTENT_WIDTH * 0.45 : windowWidth * 0.9) - 20, // Dynamic width
    minWidth: 300, 
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryImage: {
    width: '100%',
    height: 280, // Reduced from 600px for mobile
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 32, // 2em
    fontWeight: '700',
    color: COLORS.darkText,
    textTransform: 'capitalize',
    paddingBottom: 20,
  },
  
  // 4. Footer Styling (Reused and adapted for RN)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, // Ensures columns wrap on smaller screens
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5 } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  darkText: '#000000',
  lightText: '#FFFFFF',
  paragraph: '#333333',
};

// --- Navbar Component ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Gallery Section Component ---
// This component recreates the image-heavy layout with alternating left/right blocks
const GallerySection = () => {
    // List of image pairs based on the HTML structure
    const imageSets = [
        { main: 'image24.png', secondary: 'image25.png' },
        { main: 'image26.png', secondary: 'image27.png' },
        { main: 'image26.png', secondary: 'image27.png' }, // Duplicate set from HTML
        { main: 'image28.png', secondary: 'image29.png' },
        { main: 'image30.png', secondary: 'image31.png' },
        { main: 'image32.png', secondary: 'image34.png' },
        { main: 'image35.png', secondary: 'image36.png' },
    ];

    return (
        <View style={styles.galleryContainer}>
            {imageSets.map((set, index) => (
                <View key={index} style={styles.galleryItem}>
                    <Image 
                        source={{ uri: set.main }} 
                        style={styles.mainImage} 
                        resizeMode="cover" 
                    />
                    <Image 
                        source={{ uri: set.secondary }} 
                        style={styles.secondaryImage} 
                        resizeMode="cover" 
                    />
                </View>
            ))}
        </View>
    );
};


// --- Footer Component ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Main Banner Image */}
      <Image 
        source={{ uri: 'image23.png' }} 
        style={styles.mainBannerImage} 
        resizeMode="cover" 
      />
      
      {/* Gallery/Showcase Section */}
      <GallerySection />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling (Reused)
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', 
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    // Hide navigation links on mobile
    ...Platform.select({
      web: { display: 'flex' }, 
      default: { display: 'none' }, 
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Main Banner Image (image23.png)
  mainBannerImage: {
    width: windowWidth,
    height: windowWidth * 0.4, // Responsive height (adjust ratio as needed)
    marginTop: 20,
    marginBottom: 20,
  },

  // 3. Gallery Section Styling (Replicating the image layout)
  galleryContainer: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH + 100, // Slightly more width than content to center
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  galleryItem: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    marginBottom: 30, // Space between sets of images
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: 250, // Fixed height for the main wide image
    marginBottom: 10,
  },
  secondaryImage: {
    // HTML uses 700px width, but here we cap it to a percentage of the container
    width: '60%', 
    maxWidth: 700, 
    height: 120, // Reduced height for mobile visibility
    alignSelf: 'flex-end', // Aligns to the right to match the HTML's margin-left
  },
  
  // 4. Footer Styling (Reused)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
    marginTop: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, 
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5 } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  darkText: '#000000',
  lightText: '#FFFFFF',
  paragraph: '#333333',
};

// --- Navbar Component (Reused) ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Commercial Gallery Component ---
const CommercialGallery = () => {
    // List of image pairs based on the HTML structure
    const imageSets = [
        // Main Image (1300px wide) followed by a Secondary Image (700px wide)
        { main: 'image37.png', secondary: 'image38.png' },
        { main: 'image39.png', secondary: 'image40.png' },
        { main: 'image41.png', secondary: 'image42.png' },
    ];

    return (
        <View style={styles.galleryContainer}>
            {imageSets.map((set, index) => (
                <View key={index} style={styles.galleryItem}>
                    <Image 
                        source={{ uri: set.main }} 
                        style={styles.mainGalleryImage} 
                        resizeMode="cover" 
                    />
                    <View style={styles.break}/>
                    <Image 
                        source={{ uri: set.secondary }} 
                        style={styles.secondaryGalleryImage} 
                        resizeMode="cover" 
                    />
                </View>
            ))}
        </View>
    );
};


// --- Footer Component (Reused) ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Main Commercial Banner Image */}
      <Image 
        source={{ uri: 'commercial.png' }} 
        style={styles.commercialBanner} 
        resizeMode="cover" 
      />

      {/* Content Banner Image */}
      <Image 
        source={{ uri: 'image37.png' }} 
        style={styles.contentBanner} 
        resizeMode="cover" 
      />
      
      {/* Gallery/Showcase Section */}
      <CommercialGallery />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling 
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', 
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    ...Platform.select({
      web: { display: 'flex' }, 
      default: { display: 'none' }, 
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Main Images/Banners
  commercialBanner: {
    width: windowWidth,
    height: windowWidth * 0.4, // Responsive height (adjust ratio as needed)
    marginTop: 20,
    marginBottom: 20,
  },
  contentBanner: {
      width: windowWidth,
      height: 250, // Fixed height for this wide image
      alignSelf: 'center',
      paddingHorizontal: 20,
      marginVertical: 10,
  },

  // 3. Gallery Section Styling
  galleryContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  galleryItem: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    marginBottom: 30, // Space between sets of images
    alignItems: 'center',
  },
  mainGalleryImage: {
    // HTML used 1300px wide, here we use full container width
    width: '100%',
    height: 300, // Fixed height for the main wide image
    marginBottom: 20,
  },
  secondaryGalleryImage: {
    // HTML used 700px wide, 200px high
    width: '80%', 
    maxWidth: 700, 
    height: 150, 
    alignSelf: 'center', 
    marginBottom: 20,
  },
  break: {
      height: 20, // To replicate the <br> separation
  },
  
  // 4. Footer Styling (Reused)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
    marginTop: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, 
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5 } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  darkText: '#000000',
  lightText: '#FFFFFF',
};

// --- Navbar Component (Reused) ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Plotted Gallery Component ---
const PlottedGallery = () => {
    // List of image pairs based on the HTML structure
    const imageSets = [
        // Main Image (1300px wide) followed by a Secondary Image (700px wide)
        { main: 'image52.png', secondary: 'image53.png' },
        { main: 'image54.png', secondary: 'image55.png' },
        { main: 'image56.png', secondary: 'image57.png' },
    ];

    return (
        <View style={styles.galleryContainer}>
            {imageSets.map((set, index) => (
                <View key={index} style={styles.galleryItem}>
                    <Image 
                        source={{ uri: set.main }} 
                        style={styles.mainGalleryImage} 
                        resizeMode="cover" 
                    />
                    <View style={styles.break}/>
                    <Image 
                        source={{ uri: set.secondary }} 
                        style={styles.secondaryGalleryImage} 
                        resizeMode="cover" 
                    />
                </View>
            ))}
        </View>
    );
};


// --- Footer Component (Reused) ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Main Plotted Banner Image */}
      <Image 
        source={{ uri: 'plotted.png' }} 
        style={styles.plottedBanner} 
        resizeMode="cover" 
      />

      {/* Content Banner Image (First main image is placed outside the gallery list in the HTML) */}
      <Image 
        source={{ uri: 'image52.png' }} 
        style={styles.contentBanner} 
        resizeMode="cover" 
      />
      
      {/* Gallery/Showcase Section (Starting from image53/54 pair) */}
      <PlottedGallery />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling 
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', 
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    ...Platform.select({
      web: { display: 'flex' }, 
      default: { display: 'none' }, 
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Main Images/Banners
  plottedBanner: {
    width: windowWidth,
    height: windowWidth * 0.4, // Responsive height (adjust ratio as needed)
    marginTop: 20,
    marginBottom: 20,
  },
  contentBanner: {
      width: '100%',
      maxWidth: MAX_CONTENT_WIDTH,
      alignSelf: 'center',
      height: 250, // Fixed height for this wide image
      paddingHorizontal: 20,
      marginVertical: 10,
  },

  // 3. Gallery Section Styling
  galleryContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: -20, // Adjust for the initial content banner gap
  },
  galleryItem: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    marginBottom: 30, // Space between sets of images
    alignItems: 'center',
  },
  mainGalleryImage: {
    // HTML used 1300px wide, here we use full container width
    width: '100%',
    height: 300, // Fixed height for the main wide image
    marginBottom: 20,
  },
  secondaryGalleryImage: {
    // HTML used 700px wide, 200px high
    width: '80%', 
    maxWidth: 700, 
    height: 150, 
    alignSelf: 'center', 
    marginBottom: 20,
  },
  break: {
      height: 20, // To replicate the <br> separation
  },
  
  // 4. Footer Styling (Reused)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
    marginTop: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, 
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5 } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 * Other colors added for clarity
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  lightText: '#FFFFFF',
  darkBodyText: '#333333',
};

// --- Navbar Component (Reused) ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Contact us Pressed')}>
        <Text style={styles.navLinkText}>Contact us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Mission, Vision, Values, and Passion Component ---
const MVVSection = () => (
    <View style={styles.mvvContainer}>
        {/* Mission */}
        <View style={styles.mvvSection}>
            <Text style={styles.mvvTitle}>Mission</Text>
            <Text style={styles.mvvDescription}>
                To consistently exceed the expectations of our investors, corporate clients, and consumers by delivering longer-lasting, higher-quality construction with a focus on transparency, improved specifications, timely delivery, and unwavering professionalism.
            </Text>
        </View>
        <View style={styles.divider} />

        {/* Vision */}
        <View style={styles.mvvSection}>
            <Text style={styles.mvvTitle}>Vision</Text>
            <Text style={styles.mvvDescription}>
                To be a leading real estate developer, setting new benchmarks for top-notch projects and concepts across all markets, propelling the development of contemporary India, while creating outstanding value to our investors and clients.
            </Text>
        </View>
        <View style={styles.divider} />

        {/* Values */}
        <View style={styles.mvvSection}>
            <Text style={styles.mvvTitle}>Values</Text>
            <Text style={styles.mvvDescription}>
                We build residential masterpieces with the same love and detail we would devote to our own homes, emphasizing quality, standardization & attention to detail. Grounded in sound cultural values from the very beginning, we make sure each project is a reflection of the integrity that defines us.
            </Text>
        </View>
        <View style={styles.divider} />

        {/* Passion */}
        <View style={styles.passionSection}>
            <Text style={styles.mvvTitle}>Passion</Text>
            <Text style={styles.mvvDescription}>
                We pour our heart and soul in constructing homes that our customers will love forever. Supported by state-of-the-art research, the most advanced technologies, and flawless materials, we strive to provide homes that inspire warmth, comfort, and enduring luxury.
            </Text>
        </View>
        <View style={styles.divider} />
    </View>
);

// --- Footer Component (Reused) ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Main Banner Images */}
      <View style={styles.imageSection}>
        <Image 
          source={{ uri: 'image14.png' }} 
          style={styles.bannerImage1} 
          resizeMode="cover" 
        />
        <Image 
          source={{ uri: 'image15.jpg' }} 
          style={styles.bannerImage2} 
          resizeMode="contain" 
        />
      </View>
      
      <MVVSection />
      
      {/* What We Bring To Life Section */}
      <View style={styles.whatWeBringSection}>
        <Text style={styles.mainHeading}>What We Bring To Life</Text>
        <Text style={styles.subText}>
            Magizh Builders is committed to providing its clients with a comprehensive portfolio for all their real-estate need.
        </Text>
      </View>

      {/* Service Images */}
      <Image 
        source={{ uri: 'image16.png' }} 
        style={styles.serviceImage} 
        resizeMode="cover"
      />
      <Image 
        source={{ uri: 'image17.png' }} 
        style={styles.serviceImage} 
        resizeMode="cover"
      />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  
  // 1. Navigation Bar Styling 
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', 
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    ...Platform.select({
      web: { display: 'flex' }, 
      default: { display: 'none' }, 
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Main Banner Images
  imageSection: {
      marginBottom: 30,
      alignItems: 'center',
  },
  bannerImage1: {
    width: windowWidth,
    height: windowWidth * 0.4, // Responsive height 
    marginTop: 12,
  },
  bannerImage2: {
    // HTML used a fixed margin, we use alignment for better centering
    width: '80%', 
    maxWidth: 900, 
    height: 300, // Fixed height for this smaller image
    marginTop: 20,
    alignSelf: 'center',
  },

  // 3. MVV and Passion Sections
  mvvContainer: {
    alignSelf: 'center',
    width: '95%',
    maxWidth: 1000,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  mvvSection: {
    marginBottom: 20,
  },
  mvvTitle: {
    fontSize: 24, // xx-large
    fontWeight: 'bold',
    fontFamily: 'Inter', 
    marginBottom: 10,
    color: COLORS.darkBodyText,
  },
  mvvDescription: {
    fontSize: 18, // large
    fontFamily: 'Inter',
    lineHeight: 28,
    color: COLORS.darkBodyText,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  passionSection: {
      marginBottom: 20,
  },

  // 4. What We Bring To Life Section
  whatWeBringSection: {
      alignSelf: 'center',
      width: '95%',
      maxWidth: 1000,
      paddingHorizontal: 12,
      marginBottom: 30,
      alignItems: 'center', // Center content
  },
  mainHeading: {
    fontSize: 24, // xx-large
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 20, // xx-large (slightly smaller for subtext readability)
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
    lineHeight: 30,
    color: COLORS.darkBodyText,
  },

  // 5. Service Images
  serviceImage: {
    width: '95%',
    maxWidth: 1400,
    alignSelf: 'center',
    height: 300, // Fixed height for these wide images
    marginVertical: 10,
    
  },
  
  // 6. Footer Styling (Reused)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
    marginTop: 30,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, 
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput,
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
// Assuming you are using Expo or have installed 'react-native-vector-icons' and linked it
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'; 

// Get screen width for full-width components
const windowWidth = Dimensions.get('window').width;
const MAX_CONTENT_WIDTH = 1200;
const CARD_MAX_WIDTH = 1100;

/* * COLOR CODES:
 * Primary color - #05496B (Dark Background)
 * Secondary color - #017BC6 (Hover/Accent Highlight)
 * Accent color - #D9D9D9 (Text/Link Color)
 */
const COLORS = {
  primary: '#05496B',
  secondary: '#017BC6',
  accent: '#D9D9D9',
  lightText: '#FFFFFF',
  darkBodyText: '#333',
  formButton: '#2a3eb1',
  cardBackground: '#ffffff',
  borderColor: '#ccc',
  lightBorder: '#f0f0f0',
};

// --- Navbar Component (Reused) ---
const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.logoContainer}>
      {/* NOTE: For local images, replace { uri: 'cclogo.png' } with require('./assets/cclogo.png') */}
      <Image 
        source={{ uri: 'cclogo.png' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
    </View>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => console.log('Home Pressed')}>
        <Text style={styles.navLinkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Projects Pressed')}>
        <Text style={styles.navLinkText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Career Pressed')}>
        <Text style={styles.navLinkText}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('About us Pressed')}>
        <Text style={styles.navLinkText}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Contact us Pressed')}>
        <Text style={styles.navLinkText}>Contact us</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.authLinks}>
      <TouchableOpacity onPress={() => console.log('Login/Signup Pressed')}>
        <Text style={styles.authLinkText}>Login /Signup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- Contact Card Component (Form + Info) ---
const ContactCard = () => (
    <View style={styles.contactCardWrapper}>
        <View style={styles.contactCardContainer}>
            
            {/* LEFT SIDE: Contact Form */}
            <View style={styles.contactFormSide}>
                <Text style={styles.formHeading}>Your Perfect Dreams Start with a Conversation!</Text>
                
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Full Name*</Text>
                    <TextInput style={styles.formInput} placeholderTextColor={COLORS.borderColor} />
                </View>
                
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Phone Number*</Text>
                    <TextInput style={styles.formInput} keyboardType="phone-pad" placeholderTextColor={COLORS.borderColor} />
                </View>
                
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Email Address*</Text>
                    <TextInput style={styles.formInput} keyboardType="email-address" placeholderTextColor={COLORS.borderColor} />
                </View>
                
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Enter Your message</Text>
                    <TextInput 
                        style={[styles.formInput, styles.formTextArea]} 
                        multiline
                        numberOfLines={6}
                        placeholderTextColor={COLORS.borderColor}
                    />
                </View>
                
                <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Send Message')}>
                    <Text style={styles.submitButtonText}>Send Message</Text>
                </TouchableOpacity>
            </View>

            {/* RIGHT SIDE: Contact Information */}
            <View style={styles.contactInfoSide}>
                <Text style={styles.infoHeading}>Contact Information</Text>

                <View style={styles.infoItem}>
                    <FontAwesome5 name="map-marker-alt" style={styles.contactIconRight} />
                    <View>
                        <Text style={styles.infoTitle}>Address</Text>
                        <Text style={styles.infoDetail}>Magizh Builders, Ground Floor No.5 Bishop Wallers Avenue Mylapore, Chennai-600004, Tamilnadu</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <FontAwesome5 name="phone-alt" style={styles.contactIconRight} />
                    <View>
                        <Text style={styles.infoTitle}>Phone</Text>
                        <Text style={styles.infoDetail}>+91 123 456 789</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <FontAwesome5 name="envelope" style={styles.contactIconRight} />
                    <View>
                        <Text style={styles.infoTitle}>Email</Text>
                        <Text style={styles.infoDetail}>magizhbuilders@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <FontAwesome name="clock-o" style={styles.contactIconRight} />
                    <View>
                        <Text style={styles.infoTitle}>Business Hours</Text>
                        <Text style={styles.infoDetail}>Mon-Sat{'\n'}10.00 AM-7.00 PM</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
);

// --- Social Connect Card Component ---
const SocialConnectCard = () => (
    <View style={styles.socialConnectCardWrapper}>
        <View style={styles.socialConnectCard}>
            <View style={styles.connectHeader}>
                <FontAwesome5 name="users" size={24} style={styles.connectIcon} />
                <Text style={styles.connectTitle}>Connect with us</Text>
            </View>
            <View style={styles.socialIcons}>
                <TouchableOpacity style={[styles.socialIcon, styles.linkedin]} onPress={() => console.log('LinkedIn Pressed')}>
                    <FontAwesome5 name="linkedin-in" style={styles.socialIconText} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialIcon, styles.instagram]} onPress={() => console.log('Instagram Pressed')}>
                    <FontAwesome5 name="instagram" style={styles.socialIconText} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialIcon, styles.facebook]} onPress={() => console.log('Facebook Pressed')}>
                    <FontAwesome5 name="facebook-f" style={styles.socialIconText} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialIcon, styles.youtube]} onPress={() => console.log('YouTube Pressed')}>
                    <FontAwesome5 name="youtube" style={styles.socialIconText} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

// --- Footer Component (Reused) ---
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerContent}>
      {/* Column 1: Company Info */}
      <View style={[styles.footerCol, styles.companyInfoCol]}>
        <View style={styles.footerLogo}>
          {/* NOTE: For local images, replace { uri: '...' } with require('...') */}
          <Image 
            source={{ uri: 'logo-removebg-preview (1).png' }} 
            style={[styles.logo, { width: 40, height: 40, backgroundColor: COLORS.secondary }]}
            resizeMode="contain" 
          />
          <Text style={styles.companyName}>Magizh Builders</Text>
        </View>
      </View>

      {/* Column 2: Pricing Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Pricing</Text>
        <TouchableOpacity onPress={() => console.log('About Pressed')}>
          <Text style={styles.footerLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Add Properties Pressed')}>
          <Text style={styles.footerLink}>Add Properties</Text>
        </TouchableOpacity>
      </View>

      {/* Column 3: Legal Links */}
      <View style={styles.footerCol}>
        <Text style={styles.footerHeading}>Legal</Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy Pressed')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Licence aggrement Pressed')}>
          <Text style={styles.footerLink}>Licence aggrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Terms of use Pressed')}>
          <Text style={styles.footerLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cookie Policy Pressed')}>
          <Text style={styles.footerLink}>Cookie Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Column 4: Contact Details */}
      <View style={[styles.footerCol, styles.contactCol]}>
        <Text style={styles.footerHeading}>Get In Touch</Text>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" style={styles.contactIcon} />
          <Text style={styles.contactText}>
            39, Kodambakkam Road,{'\n'}Ethiraj Nagar,West mambalam,{'\n'}Chennai- 600033,Tamilnadu,{'\n'}India.
          </Text>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Call Pressed')}>
            <Text style={styles.footerLink}>+91 123 456 789</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" style={styles.contactIcon} />
          <TouchableOpacity onPress={() => console.log('Email Pressed')}>
            <Text style={styles.footerLink}>Info@magizhbuilders.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Main App Component ---
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Main Banner Image */}
      <Image 
        source={{ uri: 'image18.png' }} 
        style={styles.mainBanner} 
        resizeMode="cover" 
      />
      
      <ContactCard />
      <SocialConnectCard />

      <Footer />
    </ScrollView>
  );
}

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5', // Slight off-white background for contrast
  },
  
  // 1. Navigation Bar Styling 
  navbar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    height: 60,
    width: windowWidth,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoContainer: {},
  logo: {
    height: 40,
    width: 100, 
    backgroundColor: 'white', 
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15, 
    ...Platform.select({
      web: { display: 'flex' }, 
      default: { display: 'none' }, 
    }),
  },
  navLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: '500',
    paddingVertical: 10,
  },
  authLinks: {},
  authLinkText: {
    color: COLORS.accent,
    fontSize: 16, 
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  // 2. Main Banner Image
  mainBanner: {
    width: windowWidth,
    height: windowWidth * 0.4, // Responsive height 
    marginTop: 20,
    marginBottom: 20,
  },
  
  // 3. Contact Card Styles
  contactCardWrapper: {
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 12,
      marginBottom: 30,
  },
  contactCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    maxWidth: CARD_MAX_WIDTH,
    width: '100%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },

  // Form Side
  contactFormSide: {
    flex: 2, 
    padding: 30,
    minWidth: 350,
  },
  formHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: COLORS.darkBodyText,
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: COLORS.darkBodyText,
  },
  formInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  formTextArea: {
    height: 120, // Approximate height for 6 rows
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.formButton,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Info Side
  contactInfoSide: {
    flex: 1, 
    backgroundColor: COLORS.cardBackground, 
    padding: 30,
    minWidth: 300,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.lightBorder,
    // Responsive adjustment for border on small screen
    ...Platform.select({
        web: {
            '@media (max-width: 900px)': {
                borderLeftWidth: 0,
                borderTopWidth: 1,
                borderTopColor: COLORS.lightBorder,
            },
        },
    }),
  },
  infoHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: COLORS.darkBodyText,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'flex-start',
    paddingLeft: 35, 
    position: 'relative',
  },
  contactIconRight: {
    fontSize: 20,
    color: COLORS.darkBodyText,
    position: 'absolute',
    left: 0,
    top: 5,
    width: 25, 
    textAlign: 'center',
  },
  infoTitle: {
    fontSize: 16, 
    fontWeight: 'normal', 
    marginBottom: 5,
    color: COLORS.darkBodyText,
  },
  infoDetail: {
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.darkBodyText, 
  },
  
  // 4. Social Connect Card Styles
  socialConnectCardWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  socialConnectCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    padding: 30,
    maxWidth: 500, 
    width: '90%',
    alignItems: 'center',
    height: 200, // Fixed height from HTML style
  },
  connectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  connectIcon: {
    fontSize: 28, 
    color: COLORS.darkBodyText,
    marginRight: 15,
  },
  connectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.darkBodyText,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20, 
  },
  socialIcon: {
    width: 45, 
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconText: {
    fontSize: 22, 
    color: COLORS.lightText, 
  },
  // Specific brand colors (using simpler solid color for Instagram on mobile due to gradient complexity)
  linkedin: { backgroundColor: '#0A66C2' },
  instagram: { backgroundColor: '#C13584' }, 
  facebook: { backgroundColor: '#1877F2' },
  youtube: { backgroundColor: '#FF0000' },

  // 5. Footer Styling (Reused)
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 60,
    paddingHorizontal: 20,
    width: windowWidth,
    marginTop: 30,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_CONTENT_WIDTH, 
    alignSelf: 'center', 
    gap: 20, 
    flexWrap: 'wrap', 
  },
  footerCol: {
    flex: 1, 
    minWidth: 150, 
    marginBottom: 20,
  },
  companyInfoCol: {
      minWidth: 200,
  },
  contactCol: {
    minWidth: 250,
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightText,
    marginBottom: 25,
  },
  footerLink: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 28, 
    marginBottom: 5,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  contactIcon: {
    fontSize: 20,
    color: COLORS.lightText,
    width: 20,
    marginRight: 15,
    marginTop: 2,
  },
  contactText: {
    color: COLORS.accent,
    fontSize: 16,
    lineHeight: 22,
    flex: 1, 
  },
});
import React, { useState, useEffect } from 'react';

// Use lucide-react for icons in a standard React environment
import { Check, X } from 'lucide-react';

// Define the color palette (using standard CSS variables for consistency, though we primarily use Tailwind classes)
const COLORS = {
  background: '#f4f4f4',
  cardBackground: '#fff',
  mainTitle: '#333',
  inputBorder: '#ccc',
  labelColor: '#555',
  submitButton: 'bg-[#1a237e]',
  submitHover: 'hover:bg-[#303f9f]',
  imageBackground: '#f9f9f9',
};

// --- Component: FloatingLogo ---
// In a web environment, the logo is positioned absolutely using Tailwind classes
const FloatingLogo = () => (
  <div className="absolute top-5 left-5 z-10 w-16 h-16">
    {/* Using an image placeholder URL */}
    <img 
      src="https://placehold.co/60x60/f4f4f4/1a237e?text=LOGO" 
      alt="Company Logo" 
      className="w-full h-full object-contain"
    />
  </div>
);

// --- Component: CustomCheckbox ---
const CustomCheckbox = ({ checked, onChange, label }) => (
  <button 
    className="flex items-center space-x-2 my-5" 
    onClick={onChange}
    aria-checked={checked}
    role="checkbox"
  >
    <div className={`w-4 h-4 rounded-sm border-2 transition duration-150 ease-in-out flex items-center justify-center ${
      checked ? 'border-[#1a237e] bg-[#1a237e]' : 'border-gray-400 bg-white'
    }`}>
      {checked && <Check className="w-3 h-3 text-white" />}
    </div>
    <span className="text-gray-600 text-sm font-medium">{label}</span>
  </button>
);

// --- Component: SignupForm ---
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState('');

  // Debounce the message clear
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    
    if (password !== confirmPassword) {
      setMessage("Error: Passwords don't match.");
      return;
    }
    if (!termsAccepted) {
      setMessage("Error: Please accept the Terms of Service.");
      return;
    }
    
    // Success simulation
    setMessage('Success! Registration successful.');
    console.log('Registration Data:', { username, email, password, termsAccepted });
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
      <div 
        className="w-full max-w-5xl flex flex-col md:flex-row bg-white 
                   rounded-xl shadow-2xl overflow-hidden min-h-[500px]"
      >
        {/* Left Side: Image Section (Hidden on small screens) */}
        <div 
          className="hidden md:flex md:w-1/2 lg:w-5/12 
                     items-center justify-center p-6 bg-[#f9f9f9] border-r border-gray-100"
        >
          {/* Using a placeholder image URL */}
          <img 
            src="https://placehold.co/300x300/e0e7ff/1a237e?text=Illustration" 
            alt="Construction themed illustration" 
            className="w-full h-auto max-w-sm object-contain rounded-lg"
          />
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full md:w-1/2 lg:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-8 text-[#1a237e]">
            Sign up
          </h2>
          
          {/* Status Message Display */}
          {message.length > 0 && (
            <div className={`p-3 mb-4 rounded-lg flex items-center justify-between text-sm ${
              message.startsWith('Error') 
                ? 'bg-red-100 text-red-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              <p className="font-medium">{message}</p>
              <button onClick={() => setMessage('')} className="ml-4 text-gray-500 hover:text-gray-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="username" className="block text-base font-semibold text-gray-700 mb-1">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303f9f] focus:border-[#303f9f] transition duration-150"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303f9f] focus:border-[#303f9f] transition duration-150"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303f9f] focus:border-[#303f9f] transition duration-150"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password" className="block text-base font-semibold text-gray-700 mb-1">
                Confirm Password
              </label>
              <input 
                type="password" 
                id="confirm-password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303f9f] focus:border-[#303f9f] transition duration-150"
              />
            </div>
            
            <CustomCheckbox
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              label="I have read the Terms of Service"
            />
            
            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className={`w-full md:w-3/4 mx-auto block py-3 px-6 
                            ${COLORS.submitButton} text-white font-bold text-lg 
                            rounded-lg shadow-lg transition duration-200 ease-in-out 
                            ${COLORS.submitHover} active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#303f9f]/50`}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    // Load Tailwind CSS and set the main font (Inter)
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body { font-family: 'Inter', sans-serif; background-color: ${COLORS.background}; }
      `}</style>
      <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center">
        <FloatingLogo />
        <SignupForm />
      </div>
    </>
  );
}
