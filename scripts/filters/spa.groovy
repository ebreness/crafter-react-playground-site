final String requestURI = request.requestURI
final String requestURL = request.requestURL.toString()
String baseUrl = requestURL

if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.substring(0, baseUrl.length()-1)
} else {
    baseUrl = baseUrl.replace(requestURI, '')
}

request.setAttribute("crafterSpaBaseUrl", baseUrl)


filterChain.doFilter(request, response)
