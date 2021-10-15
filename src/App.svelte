<script>

</script>

<main>
	<div class='flex justify-center h-full bg-gray-300'>
		<svg class='clock' viewBox="0 0 100 100">

			<defs>
				<filter id="shadow-large">
					<feDropShadow dx="0" dy="0" stdDeviation="2"/>
				</filter>
				<filter id="shadow-small">
					<feDropShadow dx="0" dy="0" stdDeviation="0.2"/>
				</filter>

				<filter id="shadow-seconds">
					<feDropShadow dx="0" dy="0" stdDeviation="0.2" flood-color='#ff3e00'/>
				</filter>

				<filter id="shadow-minutes">
					<feDropShadow dx="0" dy="0" stdDeviation="0.2" flood-color='white'/>
				</filter>

				<mask id="mask">
					<g transform="translate(50 50)">
						<g class="hours" transform='rotate({-15 + 2 * 30})'>
							<circle
								cx="0"
								cy="0"
								r="50"
								fill="#fff">
							</circle>
							<path
								d="M 0 -50 v 50 l 28.86 -50"
								fill="#000">
							</path>
						</g>
					</g>
				</mask>
			</defs>

			<circle
				cx="50"
				cy="50"
				r="44"
				fill="#ff3e00">
			</circle>


			<circle
				cx="50"
				cy="50"
				r="42"
				fill="#ff3e00"
				filter="url(#shadow-large)">
			</circle>

			<g
				class="clock--face text-white"
				font-size="8px"
				transform="translate(50 50)"
				text-anchor="middle"
				dominant-baseline="middle">

			</g>

			<circle
				mask="url(#mask)"
				cx="50"
				cy="50"
				r="50"
				fill="#4a4a55">
			</circle>

			<circle
				cx="50"
				cy="50"
				r="2.5"
				filter="url(#shadow-small)"
				fill="#303335">
			</circle>

			<g class="hands" transform="translate(50 50)">
				<g class="minutes" transform='rotate({4 * 6})'>
					<path fill="#fff" d="M -0.4 8 h 0.8 v -33 h -0.8 z"  filter="url(#shadow-minutes)">
					</path>
					<circle
						fill="#303335"
						cx="0"
						cy="0"
						r="0.6">
					</circle>
				</g>

				<g class="seconds" transform=rotate({30 * 6})>
					<path fill="#ff3e00" d="M -0.4 10 h 0.8 v -45 h -0.8 z"  filter="url(#shadow-seconds)">
					</path>
					<circle
						stroke-width="0.4"
						stroke="#ff3e00"
						fill="#303335"
						cx="0"
						cy="0"
						r="0.8">
					</circle>
				</g>
			</g>
		</svg>
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.clock {
		margin-top: 1rem;
		width: 60vmin;
		height: auto;
		filter: url(#shadow-large);
	}
</style>