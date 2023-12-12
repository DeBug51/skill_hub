import { useState } from "react"; 

const useTest = () => {
    const [testData, setTestData] = useState(null)
    const getTestData = async () => {
        const res = await fetch('/api/test/info',{
            method: 'GET'
        })
        const json = await res.json()
        if (res.ok){
            setTestData(json)
        }
    } 
    return {getTestData, testData};
}
 
export {useTest};