export default function({ $strapi, redirect }) {
  // Checks if user is authenticated. Send user to homepage if not

  if ($strapi.user === null) {
    redirect("/");
  }
}
