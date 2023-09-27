<script lang="ts">
	import type Data from "$lib/types";
	import { PUBLIC_API_KEY } from "$env/static/public";
	import data from "$lib/stores/dataStore";

	let city = "";

	const getWeather = async () => {
		if (city.replaceAll(" ", "") === "") return alert("No city name was provided.");
		$data = null;
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${PUBLIC_API_KEY}&q=${city.trim()}`
		);
		if (!response.ok) return alert("Failed to find the city you're looking for.");
		$data = (await response.json()) as Data;
	};
</script>

<form on:submit|preventDefault={getWeather} class="flex gap-3">
	<input
		bind:value={city}
		placeholder="Your City"
		class="rounded-md bg-gray-900 text-gray-200 p-1 border border-gray-600 outline-none"
	/>
	<input
		type="submit"
		value="Search"
		class="text-gray-300 uppercase font-medium cursor-pointer hover:underline"
	/>
</form>
