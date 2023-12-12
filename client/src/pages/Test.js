import { useEffect } from "react";
import { useTest } from "../hooks/useTest";

const Test = () => {
    const {getTestData, testData} = useTest()
    useEffect(() => {
        const getData = async () => {
            await getTestData()
        }
        getData()
    },[])
    return ( 
        <div>
            {testData && testData.map((data) => (
                <div>
                    <p>{data.name}</p>
                    <p>{data.rating}</p>
                </div>
            
            ))}
        </div>
     );
}

export default Test;