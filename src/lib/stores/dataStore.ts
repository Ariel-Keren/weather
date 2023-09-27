import type Data from "$lib/types";
import { writable } from "svelte/store";

const data = writable<Data | null | undefined>(undefined);

export default data;
