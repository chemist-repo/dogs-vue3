export default function (
  prop: string|number,
  defaultProp: string|number,
  propsList: (string|number)[]
): string|number
{
  if (!propsList.includes(prop)) {
    // eslint-disable-next-line no-console
    console.warn(
      `Not found parameter "${prop}" in settings - ${JSON.stringify(propsList)}`
    )
    return defaultProp
  }
  return prop
}
