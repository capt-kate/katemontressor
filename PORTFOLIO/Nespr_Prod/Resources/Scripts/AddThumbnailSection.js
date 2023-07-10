/*	This function starts from an image that has been assigned the "imgThumbnail_350pxwide" class during the build.
	It then traverse up through its ancestors in the DOM tree until it reaches an anchor (a) element with the
	"MCPopupThumbnailLink" class. It then wraps this anchor element within a span class of "Thumbnail_350pxwide".
	The result is that any thumbnail links are enclosed within parent span class of "Thumbnail_350pxwide".
	This parent is required in order to add a magnifier image on top of the thumbnail image.
	The position property of span.Thumbnail_350pxwide is set to "relative" within the topic style sheet.
*/

$(function() {
    
		$( "img.imgThumbnail_350pxwide" )
			.closest("a.MCPopupThumbnailLink")
			.wrap('<span class="Thumbnail_350pxwide"></span>');
	});