import React, { useState } from "react";
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import ActionButtons from "./ActionButtons";
import ExpandIcon from "./icons/ExpandIcon";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function ProfileModal({
  visible,
  onClose,
  profile,
  onDislike,
  onLike,
  onSuperLike,
}) {
  const [isMinimized, setIsMinimized] = useState(false);

  const interestsFallback = [
    "Viajar",
    "Leer",
    "Amistad",
    "Salir de fiesta",
    "Pasarlo bien",
  ];

  const interests = profile.interests || interestsFallback;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Image
          source={{ uri: profile.image }}
          style={isMinimized ? styles.fullImage : styles.modalImage}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.modalClose} onPress={onClose}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>

        <View
          style={[
            styles.infoCard,
            isMinimized ? styles.cardMinimized : styles.cardExpanded,
          ]}
        >
          <TouchableOpacity
            style={[
              styles.expandToggle,
              { transform: [{ rotate: isMinimized ? "180deg" : "0deg" }] },
            ]}
            onPress={() => setIsMinimized((prev) => !prev)}
          >
            <ExpandIcon />
          </TouchableOpacity>

          <View style={styles.topInfo}>
            <Text style={styles.nameExpanded}>
              {profile.name}, <Text style={styles.age}>{profile.age}</Text>
            </Text>
            <Text style={styles.locationExpanded}>{profile.location}</Text>

            {!isMinimized && (
              <View style={styles.interests}>
                <Text style={styles.interestsTitle}>Intereses</Text>
                <View style={styles.interestsList}>
                  {interests.map((item, idx) => (
                    <View key={idx} style={styles.interestPill}>
                      <Text style={styles.interestText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>

          {!isMinimized && (
            <View style={styles.actionsWrapper}>
              <ActionButtons
                onDislike={(e) => {
                  onClose();
                  onDislike(e);
                }}
                onLike={(e) => {
                  onClose();
                  onLike(e);
                }}
                onSuperLike={(e) => {
                  onClose();
                  onSuperLike(e);
                }}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },

  modalImage: {
    width: "100%",
    height: height * 0.48,
  },

  fullImage: {
    width: "100%",
    height: "100%",
  },

  modalClose: {
    position: "absolute",
    top: 50,
    left: 24,
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 100,
    padding: 6,
  },

  infoCard: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },

  cardExpanded: {
    top: height * 0.45,
    bottom: 0,
    paddingTop: 36,
    paddingBottom: 40,
  },

  cardMinimized: {
    top: height * 0.85,
    bottom: 0,
    paddingTop: 28,
    paddingBottom: 20,
  },

  expandToggle: {
    position: "absolute",
    top: -32,
    right: 0,
    zIndex: 10,
  },

  topInfo: {
    gap: 12,
    marginBottom: 24,
  },

  nameExpanded: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },

  age: {
    fontWeight: "normal",
  },

  locationExpanded: {
    fontSize: 16,
    color: "#666",
  },

  interests: {
    marginTop: 16,
    marginBottom: 24,
  },

  interestsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },

  interestsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  interestPill: {
    backgroundColor: "#B79EFF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },

  interestText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  actionsWrapper: {
    alignItems: "center",
    marginBottom: 8,
  },
});
