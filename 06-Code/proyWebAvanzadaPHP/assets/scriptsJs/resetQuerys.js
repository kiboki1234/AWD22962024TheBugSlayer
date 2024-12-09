// Eliminar el query parameter 'status' de la URL
if (window.history.replaceState) {
    const url = new URL(window.location);
    url.searchParams.delete('status');
    window.history.replaceState(null, '', url);
}