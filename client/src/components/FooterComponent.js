import React from 'react';
import './css/footer.scss';

let FooterComponent = function() {
	return (
		<div className="footer-container">
			<a href="https://github.com/Sparsh-singhal">
				<i class="fa fa-github" aria-hidden="true" />
			</a>
			<a href="https://www.linkedin.com/in/sparsh-singhal-4854881aa/">
				<i class="fa fa-linkedin" aria-hidden="true" />
			</a>
			<a href="https://twitter.com/_SparshSinghal">
				<i class="fa fa-twitter" aria-hidden="true" />
			</a>
			<a href="https://codepen.io/_SparshSinghal">
				<i class="fa fa-codepen" aria-hidden="true" />
			</a>
			<a href="https://www.instagram.com/sparshsinghal15/">
				<i class="fa fa-instagram" aria-hidden="true" />
			</a>
			<p style={{ marginTop: '0.7rem', marginBottom: 0 }}>
				Made with <span style={{ color: 'rgba(255, 48, 48)', fontWeight: '500' }}>Love</span> by{' '}
				<span style={{ fontWeight: '500' }}>Sparsh Singhal</span>{' '}
			</p>
			<p style={{ fontWeight: 100 }}>
				<i class="fa fa-copyright" aria-hidden="true" /> 2020 All Rights Reserved.
			</p>
		</div>
	);
};

export default FooterComponent;
