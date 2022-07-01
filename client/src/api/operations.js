export const getAllOperations = async () => {
    const res = await fetch('http://localhost:4000/operations')
    const data = await res.json()
    return data
}

export const createOperation = async (operation) => {
    const res = await fetch('http://localhost:4000/operation', {
        method: 'POST',
        body: JSON.stringify(operation),
        headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    return data
}

