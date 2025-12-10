# @c3toronto/n8n-nodes-pco-groups

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

This is an n8n community node that lets you use [Planning Center Online](https://www.planningcenteronline.com/) (Groups API) in your n8n workflows.


[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Development](#development)
- [Resources](#resources)
- [License](#license)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Node Installation

1. Go to **Settings > Community Nodes** in your n8n instance
2. Click **Install**
3. Enter `@c3toronto/n8n-nodes-pco-groups` in the npm Package Name field
4. Agree to the risks and click **Install**

After installation, the Planning Center Groups node will appear in your nodes panel.

### Manual Installation (Self-Hosted)

```bash
cd ~/.n8n
npm install @c3toronto/n8n-nodes-pco-groups
```

Then restart your n8n instance.

## Prerequisites

You need the following:

1. [n8n](https://n8n.io/) installation (self-hosted or cloud)
2. A [Planning Center Online](https://www.planningcenteronline.com/) account
3. Planning Center API credentials (Personal Access Token)

## Operations

This node provides access to the **Planning Center Groups API v2**, including operations for:

- **Campuses** - Access campus details and listings
- **Groups** - Manage groups, including creation, update, and membership
- **People** - List people and view person details (as group members)
- **Group Applications** - Approve or reject requests to join groups
- **Events** - Manage group events, attendance, and schedules
- **Group Types** - Categorize and manage types of groups
- **Tag Groups** - Organize and filter groups or people using tags

Each resource supports listing, filtering, and retrieving detailed information where available, according to the [Planning Center Groups API v2](https://developer.planning.center/docs/#/groups/).

Each operation supports filtering, pagination, and additional parameters through the "Additional Fields" option.

## Credentials

To connect to Planning Center Online, you'll need to create a Personal Access Token:

1. Log in to your Planning Center account
2. Go to your [Personal Access Tokens page](https://api.planningcenteronline.com/oauth/applications)
3. Click **New Personal Access Token**
4. Give it a name (e.g., "n8n Integration")
5. Copy the **Application ID** and **Secret**

In n8n, create a new "Groups API" credential with:
- **URL**: `https://api.planningcenteronline.com/groups/v2` (default)
- **Client ID**: Your Application ID
- **Client Secret**: Your Secret

## Compatibility

- **Tested with n8n version**: 1.120.4+
- **Planning Center Groups API**: v2
- **Node version**: 18.10 or higher

### Tips

- **Required fields** appear at the top level (e.g., `group_id`, `person_id`)
- **Optional fields** are grouped under "Additional Fields" to keep the interface clean
- Use the **filter** and **where** parameters to narrow down results
- Check the [Planning Center API Documentation](https://developer.planning.center/docs/#/overview) for field details

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/c3toronto/n8n-nodes-pco-groups.git
cd n8n-nodes-pco-groups

# Install dependencies
npm install

# Build the project
npm run build
```

### Local Testing

```bash
# Link the package locally
npm link

# In your n8n installation directory
cd ~/.n8n/custom
npm link @c3toronto/n8n-nodes-pco-groups

# Start n8n
n8n start
```

### Development Commands

```bash
# Build
npm run build

# Watch mode (rebuild on changes)
npm run dev

# Run tests
npm run test

# Lint
npm run lint

# Format code
npm run format
```

### Project Structure

```
n8n-nodes-pco/
├── credentials/
│   └── PlanningCenter.credentials.ts    # API authentication
├── nodes/
│   └── pco/
│       ├── groups.node.ts          # Main node implementation
│       ├── groups.node.json        # Node metadata
│       ├── openapi_groups.json     # OpenAPI specification
│       └── logo.png                # Node icon
└── dist/                           # Compiled output
```

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Planning Center API Documentation](https://developer.planning.center/docs/)
- [Planning Center Groups API Reference](https://developer.planning.center/docs/#/apps/groups)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Version History

See [CHANGELOG.md](CHANGELOG.md) for details.

## License

[MIT](LICENSE.md)

## Credits

This node was built using [@devlikeapro/n8n-openapi-node](https://github.com/devlikeapro/n8n-openapi-node), which generates n8n nodes from OpenAPI specifications.

Built with ❤️ by [C3 Toronto](https://github.com/c3toronto)

---

**Note**: This is a community-maintained package and is not officially associated with Planning Center or n8n.io.
