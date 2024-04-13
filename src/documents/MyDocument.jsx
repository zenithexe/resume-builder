import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { Html } from "react-pdf-html";

//Font Registration
// Font.register({
//   family: 'Inter',
//   fonts: [
//     { src: fonts + '../fonts/' },
//     { src: fonts + '/Open_Sans/OpenSans-Bold.ttf', fontWeight: 'bold' },
//     { src: fonts + '/Open_Sans/OpenSans-Italic.ttf', fontStyle: 'italic' },
//     {
//       src: fonts + '/Open_Sans/OpenSans-BoldItalic.ttf',
//       fontWeight: 'bold',
//       fontStyle: 'italic',
//     },
//   ],
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: "80px 40px 20px 40px",
  },
  header: {},
  content: {
    display: "grid",
    flexDirection: "row",
  },
  mainColumn: {
    width: "70%",
  },
  sectionHeading: {
    width:"100",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "30px 0px 10px 0px",
    backgroundColor: "yellow",
    borderRadius:"20px"
  },
  blockList: {
    marginTop: "40px",
  },
  block: {
    marginBottom: "20px",
  },
  blockHeading: {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "2px",
  },
  blockInstitute: {
    margin: "2px",
    fontWeight: "500",
    fontSize: "15px",
  },
  blockTimeline: {
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "2px",
  },
  blockDescription: {
    fontSize: "15px",
  },
});

// Create Document Component
const MyDocument = ({ name }) => {
  return (
    <Document>
      <Page size="Letter" style={styles.page}>
      <View style={styles.content}>
          <View style={styles.mainColumn}>
            <Text style={styles.sectionHeading}>Heading</Text>
            <View style={styles.blockList}>
              <View style={styles.block}>
                <Text style={styles.blockHeading}>BlockHeading</Text>
                <Text style={styles.blockInstitute}>BlockHeading</Text>
                <Text style={styles.blockTimeline}>BlockHeading</Text>
                <Text style={styles.blockDescription}>BlockHeading</Text>
              </View>
              <View style={styles.block}>
                <Text style={styles.blockHeading}>BlockHeading</Text>
                <Text style={styles.blockInstitute}>BlockHeading</Text>
                <Text style={styles.blockTimeline}>BlockHeading</Text>
                <Text style={styles.blockDescription}>BlockHeading</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>{name}</Text>
          </View>
        </View> 
      </Page>
    </Document>
  );
};

/* 
  <View style={styles.content}>
          <View style={styles.mainColumn}>
            <Text style={styles.sectionHeading}>Heading</Text>
            <View style={styles.blockList}>
              <View style={styles.block}>
                <Text style={styles.blockHeading}>BlockHeading</Text>
                <Text style={styles.blockInstitute}>BlockHeading</Text>
                <Text style={styles.blockTimeline}>BlockHeading</Text>
                <Text style={styles.blockDescription}>BlockHeading</Text>
              </View>
              <View style={styles.block}>
                <Text style={styles.blockHeading}>BlockHeading</Text>
                <Text style={styles.blockInstitute}>BlockHeading</Text>
                <Text style={styles.blockTimeline}>BlockHeading</Text>
                <Text style={styles.blockDescription}>BlockHeading</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>{name}</Text>
          </View>
        </View> 
*/

export default MyDocument;
