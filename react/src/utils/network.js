export const getApiResource = async ('http:127/0/0/1:8000') => {
    const res = await fetch('http:127/0/0/1:8000');
    const body = await res.json();

    console.log(passInput.current.value)
}