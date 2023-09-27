<script lang="ts">
	import isMetric from "$lib/stores/isMetricStore";

	const toggleUnits = () => {
		$isMetric = !$isMetric;
	};
</script>

<div class="absolute bottom-5 right-5 flex flex-col items-center">
	<h5 class="text-gray-200 uppercase font-medium">Units</h5>
	<button
		on:click={toggleUnits}
		class="bg-blue-700 py-2 w-24 text-white font-medium uppercase rounded transition-colors hover:bg-blue-600"
		>{$isMetric ? "Metric" : "Imperial"}</button
	>
</div>
