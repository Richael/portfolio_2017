$(window).load(function() {

	$('.viewer').click(function() {
		$('body').toggleClass('view');
	});

	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..

			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input_filled' );
				classie.add( inputEl.parentNode.parentNode.nextElementSibling, 'previous_filled' );
				classie.add( inputEl.parentNode.parentNode, 'container_filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input_filled' );
			classie.add( ev.target.parentNode.parentNode.nextElementSibling, 'previous_filled' );
			classie.add( ev.target.parentNode.parentNode, 'container_filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input_filled' );
				classie.remove( ev.target.parentNode.parentNode.nextElementSibling, 'previous_filled' );
				classie.remove( ev.target.parentNode.parentNode, 'container_filled' );
			}
		}
	})();
});