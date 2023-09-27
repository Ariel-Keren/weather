<script lang="ts">
	import data from "$lib/stores/dataStore";
	import isMetric from "$lib/stores/isMetricStore";
	import Field from "./Field.svelte";

	$: temperature = $isMetric ? `${$data?.current.temp_c}°C` : `${$data?.current.temp_f}°F`;
	$: feelsLike = $isMetric ? `${$data?.current.feelslike_c}°C` : `${$data?.current.feelslike_f}°F`;
	$: windSpeed = $isMetric ? `${$data?.current.wind_kph} km/h` : `${$data?.current.wind_mph} mph`;
	$: gustSpeed = $isMetric ? `${$data?.current.gust_kph} km/h` : `${$data?.current.gust_mph} mph`;
</script>

{#if $data === undefined}
	<p
		class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-700 font-medium text-5xl uppercase"
	>
		Search for a city
	</p>
{:else if $data === null}
	<p
		class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-700 font-medium text-5xl uppercase"
	>
		Loading
	</p>
{:else}
	<main class="flex flex-col items-center p-10">
		<h2 class="text-gray-200 text-3xl font-medium">{$data.location.name}</h2>
		<h3 class="text-gray-400 text-lg">{$data.location.country} · {$data.location.localtime}</h3>
		<div class="flex items-center uppercase">
			<img alt="" src={$data.current.condition.icon} class="h-16 w-16" />
			<h4 class="text-gray-200 text-xl font-medium">{$data.current.condition.text}</h4>
		</div>
		<div class="flex flex-col w-full">
			<Field title="Temperature" text={temperature} />
			<Field title="Feels Like" text={feelsLike} />
			<Field title="Humidity" text={$data.current.humidity.toString()} />
			<Field title="Wind Direction" text={$data.current.wind_dir} />
			<Field title="Wind Speed" text={windSpeed} />
			<Field title="Gust Speed" text={gustSpeed} />
		</div>
	</main>
{/if}
