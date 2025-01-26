import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Custom hook: useCounter
function useTransaction() {

  //   Firebase Functions
  const createTransaction = async (data) => {
    try {
      const collectionName = "transaction";
      const collectionRef = collection(db, collectionName);
      const docRef = await addDoc(collectionRef, data);
      return docRef.id;
    } catch (error) {
      console.error("Error While Creating Transaction: ", error);
      throw error;
    }
  };

  const getAllTransactions = async (currentMonth) => {
    try {
      // Fetch all transactions from
      // the database
      const collectionRef = collection(db, "transaction");
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map((doc) => {
        // Fetch Month Wise Transactions based on the "Dated" field in doc
        const month = doc.data().Dated.split("-");
        return { ...doc.data(), id: doc.id, month: `${month[0]}-${month[1]}` };
      });
      const transactions = data.filter((doc) => doc.month === currentMonth);
      return transactions;
    } catch (error) {
      console.error("Error While Fetching Transactions: ", error);
      throw error;
    }
  };

  const removeTransaction = async (transaction, removeFromState) => {
    try {
      // Remove a transaction from the database
      // using the id
      const collectionRef = collection(db, "transaction");
      await deleteDoc(doc(collectionRef, transaction.id));
      removeFromState(transaction.ID);
    } catch (error) {
      console.error("Error While Removing Transaction: ", error);
      throw error;
    }
  };
  

  return {
    createTransaction,
    getAllTransactions,
    removeTransaction,
  };
}

export default useTransaction;
