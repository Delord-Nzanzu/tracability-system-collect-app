import React, { FC, ReactNode } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Divider } from "react-native-elements";

interface DialogProps {
  visible?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  title?: string;
}

const DialogBox: FC<DialogProps> = ({ visible, onClose, children, title }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {title && <Text style={styles.title}>{title}</Text>}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeText}>Fermer</Text>
            </TouchableOpacity>
          </View>
          <Divider style={{ marginTop: 10 }} />
          {/* Ici on rend tout le contenu qui est passé */}
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  content: {
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "center",
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DialogBox;
