import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Root app container
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  // Section box (for each major component)
  section: {
    marginBottom: 30,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Headings
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },

  // Tasbih list
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemName: {
    fontSize: 16,
    flex: 1,
    color: '#444',
  },
  counter: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },

  // Buttons
  button: {
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  // Search & Add
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  addInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  listItemText: {
    fontSize: 16,
    marginBottom: 4,
  },

  // Teacher message
  teacherBox: {
    marginVertical: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fdfdfd',
  },
  teacherTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  teacherText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
});
