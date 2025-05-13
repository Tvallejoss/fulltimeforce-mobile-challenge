import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const DrawerItem = ({ iconSource, label }) => (
  <View style={styles.itemRow}>
    <View style={styles.iconLabel}>
      <Image source={iconSource} style={styles.customIcon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </View>
);

export default function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.closeDrawer()}
      >
        <Ionicons name="close" size={26} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Andrea, 20</Text>
          <Text style={styles.location}>Surco</Text>
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.menuItems}>
            <DrawerItem
              iconSource={require("../assets/icons/lecafe.png")}
              label="Lecafé"
            />
            <DrawerItem
              iconSource={require("../assets/icons/messages.png")}
              label="Mensajes"
            />
            <DrawerItem
              iconSource={require("../assets/icons/matches.png")}
              label="Matches"
            />
            <DrawerItem
              iconSource={require("../assets/icons/profile.png")}
              label="Mi Perfil"
            />
            <DrawerItem
              iconSource={require("../assets/icons/tutorial.png")}
              label="Tutorial"
            />
            <DrawerItem
              iconSource={require("../assets/icons/settings.png")}
              label="Ajustes"
            />
          </View>
          <TouchableOpacity style={styles.logout}>
            <Image
              source={require("../assets/icons/logout.png")}
              style={styles.customIcon}
            />
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.5,
    backgroundColor: "#FFB1C7",
    paddingTop: 40,
    paddingHorizontal: 24,
    borderBottomRightRadius: 40,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 24,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 32,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand_500medium",
  },
  location: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 20,
    fontWeight: "400",
    fontFamily: "MavenPro_700bold",
  },
  contentWrapper: {
    paddingBottom: 24,
  },

  menuItems: {
    gap: 22,
  },

  customIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: "contain",
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "MavenPro_700bold",
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
  },

  logoutText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "MavenPro_700bold",
  },
});
