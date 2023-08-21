
try {
    throw new Error('sanple error');
    console.log('success');
} catch (error) {
    console.error(error);
} finally {
    console.log('finish process');
}